---
name: creating-handoffs
description: Use when the user says "hand off", "create a handoff", "write a handoff", or similar.
user-invocable: false
---

1. If the user passed arguments, treat them as a description of what the next session will focus on and use that to shape the document.

2. Write a handoff document summarising the current conversation so a fresh agent can continue the work. Write it so it stands alone: capture the context directly in it, rather than requiring the reader to open other artifacts (briefs, plans, ADRs, issues, commits, diffs). Redact any sensitive information such as API keys, passwords, or personally identifiable information.

3. Include a "suggested skills" section naming which skills the next agent should invoke.

4. Save the file following the conventions in the using-workbench skill.

Done when a fresh agent could continue the work using only this file.
