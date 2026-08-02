# AGENTS.md

## General

- Name rule, skill, and agent files and directories in kebab-case:
  lowercase words separated by hyphens (e.g. `git-guardrails.md`,
  `auditing-overengineering/`).
- Wrap all lines to a maximum of 80 columns.
- When a YAML `description` field doesn't fit on one line within that limit,
  use the folded style (`description: >`) with wrapped, indented lines.

## Creating Rules

**Every rule needs a claude-rules and cursor-rules counterpart.**

- Keep each rule specific — one concern per file, not a broad catch-all.
- Add a matching file in both `claude-rules/` and `cursor-rules/` with the
  same base filename and identical body content.
- Only the frontmatter format differs:
  - `claude-rules/*.md`: no frontmatter for always-apply rules; `paths:` for
    file-scoped rules.
  - `cursor-rules/*.mdc`: `description` + `alwaysApply: true` for always-apply
    rules; `description` + `globs` for file-scoped rules.

## Creating Skills

- Name it as a gerund phrase (e.g. `auditing-overengineering`).
