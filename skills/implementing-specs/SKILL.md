---
name: implementing-specs
description: "Implement work from a spec and its tasks. Use when the user says \"implement this\", \"build this\", \"start coding\", or similar."
---

Implement the work described in the spec and its tasks.

## Process

### 1. Find the spec

Look for the spec in this order:

1. A path the user passed as an argument.
2. A spec directory under `~/.workbench/specs/` matching the current repo and branch (the naming convention is `<timestamp>_<owner-repo>_<branch>_<description>/SPEC.md`).
3. If nothing is found, ask the user. If there is no spec, stop — there is nothing to implement from.

### 2. Find the tasks

Look for task files under the spec's `tasks/` subdirectory (the naming convention is `<timestamp>_<owner-repo>_<branch>_<description>/tasks/<NN>-<slug>.md`). If none exist, implement directly from the spec.

### 3. Implement

Work through the tasks (or the spec if there are no tasks), implementing each requirement.

### 4. Review

Once done, use /reviewing-spec-implementations to review the work.

### 5. Fix

Address all findings from the review in a single pass. Do not re-review after fixing.
