/**
 * Keeps the advertised tool input schemas identical to what v1.0.1 served.
 *
 * Moving to MCP SDK 1.32 and Zod 4 changed how the SDK renders tool inputs as
 * JSON Schema: objects no longer say `additionalProperties: false`, unions of
 * literals became `anyOf` of `const`s, and discriminated unions became
 * `oneOf`. Clients read these schemas, so the contract is restored here, in one
 * place, on the way out of `tools/list`. Runtime validation is untouched: the
 * tool schemas are still plain `z.object`, which ignores unknown keys exactly
 * as before.
 */

type Json = Record<string, unknown>;

function isObj(v: unknown): v is Json {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

/** `anyOf` of `{type:'number'|'string', const}` siblings -> `{type, enum}`. */
function collapseConstUnion(node: Json): void {
  const any = node.anyOf;
  if (!Array.isArray(any) || any.length === 0) return;
  const types = new Set<unknown>();
  const values: unknown[] = [];
  for (const m of any) {
    if (!isObj(m) || !('const' in m) || typeof m.type !== 'string') return;
    if (Object.keys(m).some((k) => k !== 'type' && k !== 'const')) return;
    types.add(m.type);
    values.push(m.const);
  }
  if (types.size !== 1) return;
  delete node.anyOf;
  node.type = [...types][0];
  node.enum = values;
}

function walk(node: unknown): void {
  if (Array.isArray(node)) {
    node.forEach(walk);
    return;
  }
  if (!isObj(node)) return;

  if ('oneOf' in node && !('anyOf' in node)) {
    node.anyOf = node.oneOf;
    delete node.oneOf;
  }

  for (const v of Object.values(node)) walk(v);

  collapseConstUnion(node);

  if (
    node.type === 'object' &&
    isObj(node.properties) &&
    Object.keys(node.properties).length > 0 &&
    !('additionalProperties' in node)
  ) {
    node.additionalProperties = false;
  }
}

/** Returns a copy of a tools/list result with input schemas in the v1.0.1 shape. */
export function restoreInputSchemaContract<T extends { tools: Array<{ inputSchema?: unknown }> }>(
  result: T,
): T {
  const copy = structuredClone(result);
  for (const tool of copy.tools) walk(tool.inputSchema);
  return copy;
}

/**
 * Wraps the SDK's `tools/list` handler. The SDK installs it on the first tool
 * registration, so call this after every tool is registered.
 */
export function installInputSchemaContract(server: {
  server: { _requestHandlers: Map<string, (...args: never[]) => unknown> };
}): void {
  const handlers = server.server._requestHandlers;
  const original = handlers.get('tools/list');
  if (!original) throw new Error('tools/list handler missing; register tools first');
  handlers.set('tools/list', async (...args: never[]) =>
    restoreInputSchemaContract((await original(...args)) as { tools: Array<{ inputSchema?: unknown }> }),
  );
}
