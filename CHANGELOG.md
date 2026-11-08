# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.0.2] - 2026-11-07

### Security
- Updated `devalue` in the documentation site to 5.9.3 or later, which fixes two published advisories (GHSA-j22f-vq7h-c4qm, GHSA-mcm9-63f2-9j32).
- Updated the MCP sprite server to the current MCP SDK (1.32.2) and Zod 4, which clears every known advisory in its dependencies, including a critical one in a web-server library it pulls in.
- Updated the documentation site's build tools to clear its known advisories.

### Changed
- The documentation site now builds on Astro 7.
- Added a beginner section to the handbook and refreshed the README and handbook pages.
- Checks now run on every pull request, and coverage and test results are reported to Codecov.
- Added the Atlas repository map, checked in CI.
- All version numbers (packages, desktop app, Tauri config) now agree at 1.0.2.

### Fixed
- Removed a personal home-directory path from a project brief and a test fixture.

## [1.0.1] - 2026-03-25

### Fixed
- MCP sprite server no longer uses hardcoded version — reads dynamically from package.json

### Added
- `version.ts` module for MCP sprite server with dynamic version/name exports
- 3 new version tests for MCP sprite server

## [1.0.0] - 2026-03-16

### Added

- **Canvas Editor (Rust backend):** deterministic pixel canvas with layers, stroke-based drawing, undo/redo, rectangular selection, clipboard, transforms, multi-frame timeline, onion skin, playback, motion assistance, anchors, secondary motion, motion presets, clips, sprite sheet export, asset catalog, project save/load, autosave, crash recovery
- **Scene Compositor:** scene composition with asset instances, z-ordering, camera system with keyframe animation, character build system, scene undo/redo, persisted provenance, scene comparison and restore workflows
- **Sprite Editor (frontend-only):** pixel editor with pencil, eraser, fill, eyedropper tools, multi-layer editing with alpha compositing, frame management with onion skin and playback, rectangular selection with clipboard, sprite sheet import/export, palette panel, animation preview with per-frame duration editing
- **Sprite Persistence:** native .glyph file format with save/load/save-as via Tauri file dialogs (Ctrl+S/Ctrl+Shift+S/Ctrl+O)
- **Animation Export:** animated GIF export with authored timing, sprite sheet + JSON metadata export, PNG frame export
- **Desktop Shell:** Tauri v2 native window with 166 Rust commands
- **Documentation:** handbook with getting started, architecture, workspace, and API reference guides
- **Tests:** 2,658 tests across desktop app and state packages
