---
name: using-workbench
description: Conventions for the local workbench directory. Referenced by other skills that read or write workbench files.
user-invocable: false
---

The workbench is a local directory at `~/.workbench/` that stores specs, tasks, grillings, questionnaires, and other working files outside the current workspace.

## Directory Structure

```
~/.workbench/
  specs/
    <timestamp>_<owner-repo>_<branch>_<description>/
      SPEC.md
      tasks/
        <number>_<description>.md
  grillings/
    <timestamp>_<owner-repo>_<branch>_<description>.md
  questionnaires/
    <timestamp>_<description>.md
  handoffs/
    <timestamp>_<description>.md
```

## Common Fields

- `<timestamp>`: `YYYY-MM-DD-HHMM` from when the session began.
- `<owner-repo>`: from `git remote get-url origin` (e.g. `supagetto-readme-ai`). If there's no remote, use `<parent-dir>-<repo-dir>` instead.
- `<branch>`: the current git branch with `/` replaced by `-`.
- `<description>`: a short kebab-case description.
- Use `_` between fields, `-` within fields.

## Specs

### Task Files

Number files from `01` in dependency order (blockers first).

## Grillings

A new topic starts a new file.

## Questionnaires

Questionnaire files are not tied to a specific repo or branch.

## Finding Existing Files

To find files for the current repo and branch, look under the relevant subdirectory for entries matching the current `<owner-repo>` and `<branch>` (or just `<description>` for questionnaires). If multiple matches exist, prefer the most recent timestamp.
