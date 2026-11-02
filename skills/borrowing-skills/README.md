# Borrowing Skills

Shared procedure that loads borrowed third-party skills for their stub skills.

## Why not a slash command skill

I want borrowed skills to load the same way as my own: from a normal prompt, without a slash command. The simple path is to install each one as a slash command skill (`disable-model-invocation: true`), which keeps its description out of context but breaks that consistency. Instead, each borrowed skill gets a small stub with a short description I write, and the stub fetches the real skill at a pinned commit only when it runs. The cost is extra work: a stub per skill, and pinned commits that I approve before each upgrade.

## Adding a skill

1. Get the commit with `git ls-remote https://github.com/<owner>/<repo> HEAD`.
2. Copy an existing stub (for example `skills/auditing-security/`) to `skills/<name>/` and set its repo, commit, and path.
3. Write a short description of about 10 to 20 tokens. It's what costs context in every session.

## Updating a skill

When a stub runs, Claude checks for upstream updates and asks before upgrading. To update by hand, edit the commit in the stub.
