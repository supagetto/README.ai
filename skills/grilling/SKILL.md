---
name: grilling
description: Grill the user relentlessly about a decision or idea. Use when the user wants to stress-test their thinking, or uses any 'grill' trigger phrases.
user-invocable: false
model: claude-opus-4-7
effort: medium
---

Interview the user relentlessly until you reach a shared understanding. Map this as a **design tree**: every decision branches into the decisions that hang off it.

Work the tree in **rounds**. The **frontier** is every decision whose prerequisites are already settled: the questions you can ask _now_ without guessing at answers you haven't heard yet. Ask the whole frontier in one round: number each question and give your recommended answer. Then wait for the user's answers before the next round.

Format a round like so:

```
❓ **Q1** - **<question title>**: <question body, might be multiple paragraphs, including multiple choices>

➡️ <your recommended answer>

---

❓ **Q2** - **<question title>**: <question body, might be multiple paragraphs, including multiple choices>

➡️ <your recommended answer>
```

Each round the user answers reshapes the tree: settled decisions push the frontier outward and unblock questions that depended on them. Recompute the frontier and ask the next round. A question whose answer depends on another question still open in this round belongs to a _later_ round, not this one.

Finding _facts_ is your job, never the user's. When a frontier question needs a fact from the environment (filesystem, tools, etc.), dispatch a sub-agent to find it; don't ask the user for anything you could look up yourself. Don't block on it: a running exploration is an unsettled prerequisite, so only the questions downstream of it wait for the sub-agent to report; ask the rest of the frontier now. The _decisions_ are the user's: put each to them and wait.

After each round, write or overwrite `~/.workbench/grillings/<start-timestamp>_<owner-repo>_<branch>_<description>.md` with the settled decision tree so far: each decision, its chosen answer, and its rationale, in the order settled. This is a raw record, not a synthesized plan. Keep it current as rounds complete rather than only at the end, so an interrupted session still leaves a trail. A new topic starts a new file; never overwrite a prior session's file for a different topic.

`<start-timestamp>` is `YYYY-MM-DD-HHMM` from when the session began. `<owner-repo>` comes from `git remote get-url origin` (e.g. `supagetto-readme-ai`); if there's no remote, use `<parent-dir>-<repo-dir>` instead. `<branch>` is the current git branch with `/` replaced by `-`.

The session is done when the frontier is empty: every branch of the design tree visited, nothing left silently assumed. Do not act on it until the user confirms you have reached a shared understanding.
