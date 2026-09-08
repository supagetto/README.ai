---
name: handoff
description: Compact the current conversation into a handoff document for another agent to pick up.
user-invocable: false
---

Write a handoff document summarising the current conversation so a fresh agent can continue the work. Save to `~/.workbench/handoffs` - not the current workspace. Name the file `<timestamp>_<description>.md`, using a `YYYY-MM-DD-HHMM` timestamp (e.g. `2026-09-08-1430`) and a short kebab-case description. Use `_` between fields, `-` within fields.

Include a "suggested skills" section in the document, naming which skills the next agent should call the Skill tool for.

Write the document so it stands alone: capture the context a fresh agent needs directly in it, rather than requiring them to open other artifacts (briefs, plans, ADRs, issues, commits, diffs).

Redact any sensitive information, such as API keys, passwords, or personally identifiable information.

If the user passed arguments, treat them as a description of what the next session will focus on and tailor the doc accordingly.
