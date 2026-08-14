---
name: writing-commit-message
description: >
  Use whenever writing a commit message, or when the user asks to commit,
  create a commit, or run git commit.
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
- If the subject alone is not enough to understand the change (what
  changed, or why), add a body. Skip the body when the title is clear.

## Content rules

Write in imperative mood: "Add" not "Added". The description says
*what* changed — the diff already shows the how, don't restate it.
The body explains the *why*: motivation, prior behavior, or constraints
that drove the decision. Always add a body for breaking changes,
security fixes, data migrations, and reverts.

Never include:

- Filler phrases: "This commit does X", "I", "we", "now", "currently".
- Secrets or PII.

## Icon reference

Pick the icon whose description matches the change.

| Icon | Description |
| --- | --- |
| 🐛 | Fix a bug |
| ✨ | Introduce new features |
| 📝 | Add or update documentation |
| 🎨 | Improve structure / format of the code |
| ♻️ | Refactor code |
| ⚡️ | Improve performance |
| ✅ | Add, update, or pass tests |
| 👷 | Add or update CI build system |
| 💚 | Fix CI build |
| ⏪️ | Revert changes |
| 🔥 | Remove code or files |
| 🚑️ | Critical hotfix |
| 🚀 | Deploy stuff |
| 💄 | Add or update the UI and style files |
| 🎉 | Begin a project |
| 🔒️ | Fix security issues |
| 🔐 | Add or update secrets |
| 🔖 | Release / version tags |
| 🚨 | Fix compiler / linter warnings |
| 🚧 | Work in progress |
| ⬇️ | Downgrade dependencies |
| ⬆️ | Upgrade dependencies |
| 📌 | Pin dependencies to specific versions |
| 📈 | Add or update analytics or track code |
| ➕ | Add a dependency |
| ➖ | Remove a dependency |
| 🔧 | Add or update configuration files |
| 🔨 | Add or update development scripts |
| 🌐 | Internationalization and localization |
| ✏️ | Fix typos |
| 💩 | Write bad code that needs to be improved |
| 🔀 | Merge branches |
| 📦️ | Add or update compiled files or packages |
| 👽️ | Update code due to external API changes |
| 🚚 | Move or rename resources (files, paths, routes) |
| 📄 | Add or update license |
| 💥 | Introduce breaking changes |
| 🍱 | Add or update assets |
| ♿️ | Improve accessibility |
| 💡 | Add or update comments in source code |
| 🍻 | Write code drunkenly |
| 💬 | Add or update text and literals |
| 🗃️ | Perform database related changes |
| 🔊 | Add or update logs |
| 🔇 | Remove logs |
| 👥 | Add or update contributor(s) |
| 🚸 | Improve user experience / usability |
| 🏗️ | Make architectural changes |
| 📱 | Work on responsive design |
| 🤡 | Mock things |
| 🥚 | Add or update an easter egg |
| 🙈 | Add or update a .gitignore file |
| 📸 | Add or update snapshots |
| ⚗️ | Perform experiments |
| 🔍️ | Improve SEO |
| 🏷️ | Add or update types |
| 🌱 | Add or update seed files |
| 🚩 | Add, update, or remove feature flags |
| 🥅 | Catch errors |
| 💫 | Add or update animations and transitions |
| 🗑️ | Deprecate code that needs to be cleaned up |
| 🛂 | Work on code related to authorization, roles and permissions |
| 🩹 | Simple fix for a non-critical issue |
| 🧐 | Data exploration/inspection |
| ⚰️ | Remove dead code |
| 🧪 | Add a failing test |
| 👔 | Add or update business logic |
| 🩺 | Add or update healthcheck |
| 🧱 | Infrastructure related changes |
| 🧑‍💻 | Improve developer experience |
| 💸 | Add sponsorships or money related infrastructure |
| 🧵 | Add or update code related to multithreading or concurrency |
| 🦺 | Add or update code related to validation |
| 🧹 | Commit changes related to miscellaneous chores |
| 👇 | Squash commits |
| 🫥 | Fixup commits |

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
