---
name: auditing-overengineering
description: >
  Repo or path audit for over-engineering. Like reviewing-overengineering, but
  scans a whole tree instead of a diff: a ranked list of what to delete,
  simplify, or replace with stdlib/native equivalents. Defaults to the whole
  repo; give it a path (e.g. a package or directory in a monorepo) to scope
  it. Use when the user says "audit this codebase", "audit <path> for
  over-engineering", "what can I delete from this repo", "find bloat",
  "auditing-overengineering", or "/auditing-overengineering". One-shot report,
  does not apply fixes.
user-invocable: false
---

reviewing-overengineering, but for a whole tree instead of a diff. Scope to
the given path, or the whole repo if none is given. Rank findings biggest cut
first.

## Tags

Same as reviewing-overengineering:

- `delete:` dead code, unused flexibility, speculative feature. Replacement:
  nothing.
- `stdlib:` hand-rolled thing the standard library ships. Name the function.
- `native:` dependency or code doing what the platform already does. Name the
  feature.
- `yagni:` abstraction with one implementation, config nobody sets, layer with
  one caller.
- `shrink:` same logic, fewer lines. Show the shorter form. Targets redundant
  logic only — never formatting or style-guide choices.

## Hunt

Deps the stdlib or platform already ships, single-implementation interfaces,
factories with one product, wrappers that only delegate, files exporting one
thing, dead flags and config, hand-rolled stdlib.

## Output

One line per finding, ranked: `<tag> <what to cut>. <replacement>. [path]`. End
with `net: -<N> lines, -<M> deps possible.` Nothing to cut:
`Lean already. Ship.`

## Boundaries

Scope: over-engineering and complexity only. Correctness bugs, security holes,
performance, and formatting/style-guide preferences are explicitly out of scope.
Route them to a normal review pass. Lists findings, applies nothing. One-shot.
"stop auditing-overengineering" or "normal mode" to revert.
