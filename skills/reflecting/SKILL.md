---
name: reflecting
description: 'Review the reflection files written by the writing-reflections skill and propose fixes to the README.ai rules, skills, and agents they name. Use when the user says "reflect".'
user-invocable: false
---

Scope: only the rules, skills, and agents from the README.ai repository, installed into `~/.claude/`.

1. Read every file in `~/.workbench/reflections/`. If there are none, say "No changes" and stop.
2. Group the files by instruction. Treat `none` files about the same topic as one group.
3. Read `~/.workbench/reflections-log.md`, then rule out groups in this order:
   1. Skip one-off groups with no clear cause in an instruction. Say which and why.
   2. Skip a group that matches a rejection in the log, unless it has new evidence.
   3. If the instruction a group names no longer exists, ask the user: remove, keep, or update.
   4. Read the instruction. If it already states the fix clearly, reject the group: the agent did not follow clear text. If the text is there but buried or weak, rewrite or move it. Do not add it again.
4. For each remaining group, propose one change to the instruction. If most files say `Loaded: no`, fix the skill's description, not its body. If the log shows the instruction was fixed before, that fix failed: prefer Rewrite or Delete to Add text. Otherwise use this order of preference:
   1. Delete it: the instruction is wrong or stale.
   2. Rewrite it: the instruction is unclear.
   3. Move it: it is always loaded but matters only for some files or tasks, so it belongs in a `paths:` rule or a skill.
   4. Replace it with a hook or script: a check can enforce it. Name the reflection it would have caught and the event that runs it.
   5. Add text: only when no change above fixes it. Keep it as short as possible.
5. Show each change as a diff with its net line count and the number of files behind it, and wait for the user to approve it.
6. Apply approved changes in the README.ai repository, not in `~/.claude/`, since its install script overwrites the installed copies. Ask the user for the repository path if you do not know it.
7. For every group that was fixed or rejected, add one line to `~/.workbench/reflections-log.md`: date, instruction, change or rejection reason. Then delete its reflection files. Keep skipped files so repeats can build up.

Done when every group is fixed, rejected, or skipped with a reason.
