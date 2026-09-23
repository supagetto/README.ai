# AGENTS.md

## General

- Name rule, skill, and agent files and directories in kebab-case:
  lowercase words separated by hyphens (e.g. `simplicity-first.md`,
  `writing-code/`).
- Use correct punctuation.

## Creating Rules

- Keep each rule specific — one concern per file, not a broad catch-all.
- Add a file in `rules/`. Only add frontmatter for file-scoped rules, using
  `paths:`, e.g.:

  ```markdown
  ---
  paths:
    - 'src/**/*.{ts,tsx}'
    - 'lib/**/*.ts'
    - 'tests/**/*.test.ts'
  ---
  ```

## Creating Skills

- Name it as a gerund phrase (e.g. `writing-code`).
