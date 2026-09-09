---
name: implementing-specs
description: "Implement work from a spec and its tasks. Use when the user says \"implement this\", \"build this\", \"start coding\", or similar."
---

## Process

### 1. Find the spec

Look for the spec in this order:

1. A path the user passed as an argument.
2. A spec matching the current repo and branch (see the using-workbench skill for location and naming conventions).
3. If nothing is found, ask the user. If there is no spec, stop — there is nothing to implement from.

### 2. Find the tasks

Look for task files under the spec's `tasks/` subdirectory (see the using-workbench skill for naming conventions). If none exist, implement directly from the spec.

### 3. Implement

Work the frontier: pick any task whose blockers are all complete. For each task:

1. Implement the requirement.
2. Check off the task's acceptance criteria as each is satisfied.
3. Run the relevant tests and confirm they pass.

Repeat until every task's acceptance criteria are met and all tests pass. If there are no tasks, work directly from the spec's requirements in order.

### 4. Review

Once done, use /reviewing-spec-implementations to review the work.

### 5. Fix

Fix all findings in a single pass, then stop.
