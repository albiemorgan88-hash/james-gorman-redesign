# Workspace Audit — 18 Feb 2026

## Size: 159MB → 3.1MB (98% reduction)
Primary saving: `projects/wallet/node_modules` (155MB) trashed.

## Context Files (loaded every message)
| File | Before | After | Savings |
|------|--------|-------|---------|
| SOUL.md | 1,895 | 797 | 58% |
| AGENTS.md | 1,177 | 732 | 38% |
| USER.md | 1,217 | 747 | 39% |
| TOOLS.md | 1,471 | 1,138 | 23% |
| MEMORY.md | 2,958 | 1,788 | 40% |
| IDENTITY.md | 221 | 221 | — |
| HEARTBEAT.md | 168 | 168 | — |
| **Total** | **9,107** | **5,591** | **39%** |

**Token estimate:** ~1,398 tokens/session (down from ~2,277). Saves ~879 tokens/message.

## What Was Removed
- Redundancy between SOUL.md and AGENTS.md (orchestrator rule, personality duplication)
- SOUL.md ALWAYS section (duplicated USER.md and AGENTS.md info)
- Verbose descriptions trimmed throughout
- Stacey/personality info deduplicated (SOUL owns tone, USER owns facts)
- MEMORY.md: removed items already in USER.md (debt amount, Stacey details, strong opinions)

## Files Trashed
- `*.skill` (3 files) — binary archives duplicating `skills/` directories
- `node_modules/` (root, 464KB) — orphaned
- `projects/wallet/node_modules/` (155MB) — can `npm install` if needed
- `projects/.DS_Store`
- `reports/designer-brief.md` — superseded by `designer-brief-final.md`
- `reports/schema-markup.html` — one-off output
- `scripts/internal-linking.py`, `internal-linking2.py` — superseded by v3
- `memory/2026-02-10-evening.md` — duplicate of date entry
- `memory/chatgpt-import-analysis.md` — one-off analysis

## Recommendations
1. **Archive old reports** — reports/ has 20+ files from Feb 10-13. Move completed work to `reports/archive/` monthly.
2. **Nightly builds accumulate** — `projects/nightly-builds/` has 4 dated dirs. Add cleanup to nightly cron (keep last 3).
3. **Tender projects** — keep until outcomes known, then archive.
4. **`seo-titles-push.sh` and `push-blogs.mjs` at root** — move to `scripts/` for tidiness.
5. **Memory files** — consider archiving anything older than 7 days to `memory/archive/`.

## Skills (No Changes Needed)
All 10 skill directories are well-structured with SKILL.md files. References are lean.
