---
name: writing-commit-messages
description: Use when writing a commit message or when the user asks to commit.
user-invocable: false
model: claude-haiku-4-5
---

ALWAYS use this exact template:

```
<icon> <description>

[optional body]
```

- Icon and description separated by a space
- Use the actual emoji character (e.g. ✨), never the `:shortcode:` text form
- Start the description with an uppercase letter, imperative mood
- Keep the subject line under 72 characters
- If the subject alone is not enough to understand the change (what changed, or why), add a body. Skip the body when the title is clear.

## Content rules

Source the message from the diff alone: every claim in the subject and body must be visible in the staged changes. Conversation history, prior requests, and the reason the user is committing now are not part of the message.

Write in imperative mood: "Add" not "Added". The description says *what* changed — the diff already shows the how, don't restate it. The body explains the *why*, but only where the diff itself shows it (a replaced value, a removed workaround, a renamed concept). When the diff carries no reason, state what changed and stop; an invented reason is worse than none. Always add a body for breaking changes, security fixes, data migrations, and reverts.

Never include secrets or PII.

## Icon reference

See [`ICONS.md`](ICONS.md) for the full icon reference.

## Examples

Clear from the title — no body needed:

```
🐛 Resolve null pointer in order calculation
✨ Add sync data option to troubleshooting menu
♻️ Extract payment logic into separate module
```

Title alone is incomplete — add a body:

```
🔧 Update auth session timeout

Raise idle timeout from 15m to 1h so long-running
admin workflows stop forcing re-login mid-task.
```
