---
name: writing-typescript-code
description: TypeScript/TSX style conventions. Use when writing or editing TypeScript or TSX code.
allowed-agents:
  - grunt
user-invocable: false
---

After you write or edit TypeScript or TSX code:

1. Run `${CLAUDE_SKILL_DIR}/scripts/lint <files>` from the project root. It runs oxlint with type-aware rules, so the project needs a `tsconfig.json`.
2. Fix every error it reports, then run it again. Repeat until it reports no errors.
3. Check the code against the conventions that lint cannot check: the `writing-code` skill's rules, and `${CLAUDE_SKILL_DIR}/rules`. That folder holds one file per convention, named after the rule. List it, then read only the files relevant to the code.
