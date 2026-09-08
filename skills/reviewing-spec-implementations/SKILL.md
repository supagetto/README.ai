---
name: reviewing-spec-implementations
description: "Review changes since a fixed point against the originating spec. Reports missing requirements, scope creep, and incorrect implementations. Use when the user says \"review the implementation\", \"check against the spec\", \"spec review\", or similar."
user-invocable: false
---

Review the diff between `HEAD` and a fixed point the user supplies, checking whether the code faithfully implements the originating spec.

## Process

### 1. Pin the fixed point

Use whatever the user said as the fixed point (a commit SHA, branch name, tag, `main`, `HEAD~5`, etc.). If they didn't specify one, ask.

Capture the diff once:

```sh
git diff <fixed-point>...HEAD
```

Three-dot so the comparison is against the merge-base. Also capture the commit list:

```sh
git log <fixed-point>..HEAD --oneline
```

Before going further, confirm the fixed point resolves (`git rev-parse <fixed-point>`) and the diff is non-empty. A bad ref or empty diff should fail here, not later.

### 2. Identify the spec

Look for the originating spec in this order:

1. A path the user passed as an argument.
2. A spec file under `~/.workbench/specs/` matching the current repo and branch (the naming convention is `<timestamp>_<owner-repo>_<branch>_<description>.md`).
3. If nothing is found, ask the user. If there is no spec, stop — there is nothing to review against.

### 3. Review the diff against the spec

For every requirement in the spec, check the diff and report:

- **Missing**: requirements the spec asked for that are absent or only partially implemented.
- **Scope creep**: behaviour in the diff that the spec did not ask for.
- **Wrong**: requirements that look implemented but where the implementation contradicts what the spec described.

Quote the spec line for each finding. Keep the review under 400 words.

### 4. Report

Present findings under a single `## Spec Review` heading.

End with a one-line summary: total findings and the worst issue (if any).
