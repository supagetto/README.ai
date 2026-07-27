# Git Guardrails

- Do NOT commit directly to main/master — always work in a branch
- Do NOT use `git add .` blindly — review staged changes before committing,
  don't sweep in unrelated files
- Do NOT commit secrets or .env files — check `git diff --staged` before
  committing
- Do NOT force push (`git push --force` or `git push --force-with-lease`) under
  any circumstances
- Do NOT amend commits that have already been pushed to the remote — create a
  new commit instead
- Do NOT delete branches without confirming they're merged or no longer needed
- Do NOT push unless explicitly told to
