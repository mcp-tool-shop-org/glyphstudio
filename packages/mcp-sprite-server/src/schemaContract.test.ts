import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';
import { createGlyphStudioServer } from './server.js';

const base: Record<string, unknown> = JSON.parse(
  readFileSync(new URL('./__fixtures__/base-tools-list-v1.0.1.json', import.meta.url), 'utf-8'),
);

async function connect() {
  const { server } = createGlyphStudioServer();
  const [a, b] = InMemoryTransport.createLinkedPair();
  const client = new Client({ name: 'contract-test', version: '0.0.0' });
  await Promise.all([server.connect(a), client.connect(b)]);
  return client;
}

/**
 * The only documented, harmless differences from v1.0.1: safe-integer bounds
 * on integers and `additionalItems: false` on tuples. Strip exactly those.
 */
function stripHarmless(node: unknown): unknown {
  if (Array.isArray(node)) return node.map(stripHarmless);
  if (typeof node !== 'object' || node === null) return node;
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
    if (k === 'additionalItems' && v === false) continue;
    if (k === 'minimum' && v === Number.MIN_SAFE_INTEGER) continue;
    if (k === 'maximum' && v === Number.MAX_SAFE_INTEGER) continue;
    out[k] = stripHarmless(v);
  }
  return out;
}

/** Inline local `#/...` $refs: v1.0.1 shared repeated sub-schemas by $ref, Zod 4 repeats them inline. Same schema. */
function deref(root: unknown): unknown {
  const resolve = (node: unknown, seen: string[]): unknown => {
    if (Array.isArray(node)) return node.map((n) => resolve(n, seen));
    if (typeof node !== 'object' || node === null) return node;
    const o = node as Record<string, unknown>;
    if (typeof o.$ref === 'string' && o.$ref.startsWith('#')) {
      if (seen.includes(o.$ref)) throw new Error('recursive $ref ' + o.$ref);
      let target: unknown = root;
      for (const part of o.$ref.slice(1).split('/').filter(Boolean)) {
        target = (target as Record<string, unknown>)[decodeURIComponent(part)];
      }
      return resolve(target, [...seen, o.$ref]);
    }
    return Object.fromEntries(Object.entries(o).map(([k, v]) => [k, resolve(v, seen)]));
  };
  return resolve(root, []);
}

describe('tool input schema contract (vs v1.0.1)', () => {
  it('serves the same tools as v1.0.1', async () => {
    const client = await connect();
    const { tools } = await client.listTools();
    expect(tools.map((t) => t.name).sort()).toEqual(Object.keys(base).sort());
  });

  it('serves every tool inputSchema identical to v1.0.1, apart from safe-integer bounds, additionalItems and $ref-vs-inline', async () => {
    const client = await connect();
    const { tools } = await client.listTools();
    for (const t of tools) {
      expect(stripHarmless(deref(t.inputSchema)), t.name).toEqual(deref(base[t.name]));
    }
  });

  it('tools/call ignores an unknown key exactly as v1.0.1 did', async () => {
    const client = await connect();
    const plain = await client.callTool({ name: 'sprite_rotate_canvas', arguments: { sessionId: 'nope', angle: 90 } });
    const extra = await client.callTool({
      name: 'sprite_rotate_canvas',
      arguments: { sessionId: 'nope', angle: 90, surprise: true },
    });
    expect(extra).toEqual(plain);
  });

  it('tools/call still rejects an angle outside the enum', async () => {
    const client = await connect();
    const res = await client.callTool({ name: 'sprite_rotate_canvas', arguments: { sessionId: 'nope', angle: 45 } });
    expect(res.isError).toBe(true);
  });
});
