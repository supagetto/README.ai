---
name: borrowing-skills
description: "Load a borrowed third-party skill for the stub skill that invokes it."
user-invocable: false
---

# Borrowing Skills

A stub skill invokes this skill and gives a repo, a commit, and a path. This file loads that skill.

## Workflow

1. **Check for updates:** run `git ls-remote https://github.com/<repo> HEAD`. If it fails (for example offline), skip to step 2 with the pinned commit. If the latest commit differs from the pinned one, show the user `https://github.com/<repo>/compare/<pinned>...<latest>` and ask whether to upgrade, then wait for the answer.
   - Yes: replace the commit in the source stub at `~/repos/README.ai/skills/<stub name>/SKILL.md`, use the new commit for the rest of this session, and tell the user to run `scripts/install personal` from `~/repos/README.ai` so the installed stub picks it up.
   - No: use the pinned commit.
2. Run `<skill base directory>/scripts/fetch-borrowed-skill <repo> <commit>`. It prints the clone path.
3. Read `<clone path>/<path>` and follow it as the active skill.
4. Resolve every relative path or bare filename in the borrowed skill (linked `.md` files, scripts, schemas) against the borrowed `SKILL.md`'s folder inside the clone, using absolute paths. The working directory is the user's project, not the clone.

## Rules

- If no stub gave a repo, a commit, and a path, say so and stop.
- Never search GitHub or guess a repo, commit, or path. Use only what the stub gives.
- Change a commit only after the user approves it in step 1.

## Done When

The borrowed skill's instructions are loaded and being followed.
