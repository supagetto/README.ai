---
name: writing-reflections
description: 'Log a missing or incorrect README.ai rule, skill, or agent as a reflection file. Use when one of them fails during a session, or the user corrects behavior one should have prevented.'
user-invocable: false
---

Scope: only the rules, skills, and agents from the README.ai repository, installed into `~/.claude/`. Ignore instructions that belong to other repositories, such as a project's `CLAUDE.md` or `AGENTS.md`.

Write a new reflection file for the issue. Do not stop the task to fix the instruction.

Save each issue as its own file at `~/.workbench/reflections/<timestamp>.md`, where `<timestamp>` is `YYYY-MM-DD-HHMMSS` from when the issue happened. Never read or edit existing reflection files; a repeat of an issue is a new file.

The files are the only input to the reflecting skill; the transcript is not read. Write each file so it stands alone:

```markdown
# <short title>

- Instruction: <rule, skill, or agent, then its name, such as rule `surgical-changes`; or "none" if no README.ai instruction covers it>
- Loaded: <for a skill or agent: yes or no, was it loaded in the session; for a rule: "always">
- Missed:
  - "<quoted line from the instruction>": <how it was missed>
  - <for "none": what the missing instruction should have said>
- What happened: <what the agent did, with file paths>
- Correction: <what the user said, quoted, or what fixed it>
- Why it was missed: <the gap in the instruction, such as vague wording, buried among other rules, wrong place, or no check enforcing it>
- What could be better: <a first guess at the fix to the instruction, not to the agent's behavior>
```

Write "Why it was missed" and "What could be better" about the instruction, not the agent. "The agent should have been more careful" is not a cause; "the rule never says when tests are required" is. Write "What could be better" as a general rule, not the incident: leave out paths, commit hashes, versions, and lists of what failed this time. It is a hint; the reflecting skill decides the fix after it sees every file for that instruction.

