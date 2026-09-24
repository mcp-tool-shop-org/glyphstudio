# glyphstudio: how it works

Mapped at 2026-09-24 from commit 77b5fa4.

## What this is

15 parts, mostly TypeScript (424 files). Work enters through 3 doors; the busiest is CI, which reaches 3 parts.

## What changed since the last map

This is the first map.

## What comes in

1. **CI.** On a pull request touching 8 paths; on a push to main touching 8 paths; or by hand. Runs packages/domain/src/ciGates.test.ts, packages/domain/src/shortcutManifest.test.ts, packages/domain/src/sizeProfile.test.ts and 117 more; checks packages/domain/src/, packages/mcp-sprite-server/src/ and packages/state/src/.
2. **Deploy site to GitHub Pages.** On a push to main touching 2 paths; or by hand. Runs site/astro.config.mjs and site/src/.
3. **Dogfood.** By hand. Runs no file this map can see.

## What happens through CI

1. The workflow runs 5 files in domain, 23 files in mcp-sprite-server, and 93 files in state; it checks packages/domain/src/ in domain, packages/mcp-sprite-server/src/ in mcp-sprite-server and packages/state/src/ in state.

## Who reads the results

CI writes nothing this map can see.

## The other doors

**Deploy site to GitHub Pages** runs site/astro.config.mjs and site/src/, and deploys the site.

**Dogfood** runs no file this map can see and sends a dispatch to dogfood-lab/testing-os.

## What breaks what

No part is imported by another part, and no part sits on the path of two doors.

## What tends to change together

No two source files changed together often enough to name.

Window: 180 days; a pair counts from 3 shared commits, since the window holds fewer than 30 qualifying commits.

## What no test touches

- **api-contract** is imported by no test.
- **scripts** is imported by no test.
- **showcase** is imported by no test.

## Written but never read

- **docs/dogfood/character-sprite/** is written by scripts/translate-character.mjs and read by nothing else in this repository.
- **docs/dogfood/prop-sprite/** is written by scripts/translate-prop.mjs and read by nothing else in this repository.
- **docs/dogfood/stage43-creature/** is written by scripts/dogfood-43-creature.mjs and read by nothing else in this repository.
- **docs/dogfood/stage43-humanoid/** is written by scripts/dogfood-43-humanoid.mjs and read by nothing else in this repository.
- **docs/dogfood/stage43-prop/** is written by scripts/dogfood-43-prop.mjs and read by nothing else in this repository.
- **docs/dogfood/stage44-curves/** is written by scripts/dogfood-44-curves.mjs and read by nothing else in this repository.
- **docs/dogfood/stage44-quality/dogfood-log.md** is written by scripts/dogfood-44-quality.mjs and read by nothing else in this repository.
- **docs/dogfood/stage45-feedback/dogfood-log.md** is written by scripts/dogfood-45-feedback.mjs and read by nothing else in this repository.

And 10 more places.

## Helpers that look duplicated

No two parts export a helper that looks alike.

## Generated, never hand-edited

- **docs/dogfood/character-concept/** is written by scripts/dogfood-character.mjs.
- **docs/dogfood/character-sprite/** is written by scripts/translate-character.mjs.
- **docs/dogfood/prop-concept/** is written by scripts/dogfood-prop.mjs.
- **docs/dogfood/prop-sprite/** is written by scripts/translate-prop.mjs.
- **docs/dogfood/stage43-creature/** is written by scripts/dogfood-43-creature.mjs.
- **docs/dogfood/stage43-humanoid/** is written by scripts/dogfood-43-humanoid.mjs.
- **docs/dogfood/stage43-prop/** is written by scripts/dogfood-43-prop.mjs.
- **docs/dogfood/stage44-curves/** is written by scripts/dogfood-44-curves.mjs.
- **docs/dogfood/stage44-quality/dogfood-log.md** is written by scripts/dogfood-44-quality.mjs.
- **docs/dogfood/stage45-feedback/dogfood-log.md** is written by scripts/dogfood-45-feedback.mjs.
- **docs/dogfood/vector-master/** is written by scripts/dogfood-vector-master.mjs.
- **docs/showcase/stage46/showcase-log.md** is written by scripts/showcase-46.mjs.
- **docs/showcase/stage47-ollama/dogfood-log.md** is written by scripts/dogfood-47-ollama.mjs.
- **docs/showcase/stage47a-test/shapes.json** is written by scripts/test-47a-prompt.mjs.
- **docs/showcase/stage47b-critique/** is written by scripts/test-47b-critique-loop.mjs.
- **docs/visual-recovery/critiques/** is written by scripts/critique-sprite.mjs.
- **docs/visual-recovery/hero-sprite/hero-500.png** is written by scripts/hero-sprite.mjs.
- **docs/visual-recovery/hero-sprite/hero-silhouette-500.png** is written by scripts/hero-sprite.mjs.
- **showcase/** is written by showcase/generate.mjs.
- **showcase/previews/** is written by showcase/render-previews.mjs.

## Hand-authored

People write .github/, assets/, audit/, dogfood/, examples/, the repository root and site/; 7 writes with paths built at run time may land here.

## Where to start

.github/workflows/ci.yml → packages/state/src/aiStore.test.ts

Read those in order to follow one pull request end to end.

## What this map cannot see

- 16 import sites could not be resolved.
- 1 file uses syntax the parser cannot read (apps/desktop/src/components/VectorReductionPanel.tsx), so what it imports is not known.
- 7 writes and 8 reads use paths built at run time and are not named here.
- 4 writes go to the directory the command is run in, the home directory or a path its caller passes, not to this repository.
- Statistics confidence is low: fewer than 30 qualifying commits in the window, and fewer than 20 source files reach 10 revisions.

Regenerate with `npx --yes @dogfood-lab/atlas map`.
