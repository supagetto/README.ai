---
name: setting-up-graft
description: Use when graft/ or .serena/ is not git-ignored, or graft cards are not greppable by ripgrep, or the user asks to set up graft.
user-invocable: false
---

Keep `graft/` (and `.serena/`, `.analysis/`) hidden from git, but keep `graft/` cards searchable by ripgrep — with **local-only** files that never appear in `git status` and survive even if the shared `.gitignore` drops these rules.

The two mechanisms, and why local: `.git/info/exclude` is a per-clone gitignore that is never committed, so coworkers never see it. A `.ignore` file is honoured by ripgrep regardless of git tracking and outranks git's ignore rules — so `!graft/` re-admits the cards to search, and excluding the `.ignore` file itself hides it from git.

From the repo root, run the two scripts by absolute path. The skill's base directory is shown when the skill loads.

1. **Set up** local git excludes and `.ignore` (idempotent):

```sh
<skill base directory>/scripts/setup
```

2. **Verify** — must print `PASS`:

```sh
<skill base directory>/scripts/verify
```

Caveat: `.git/info/exclude` does not survive a fresh `git clone`. Re-run `setup` after cloning; re-running is always safe. Nothing here is ever committed or pushed.
