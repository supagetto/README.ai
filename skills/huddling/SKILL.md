---
name: huddling
description: 'Pressure-test a decision with a crew of five advisors who answer independently, peer-review each other anonymously, and get a verdict from bigbrain. Use when the user says "huddle this" or "huddle up".'
user-invocable: false
---

**1. Frame.** Read only the 2-3 context files that matter (CLAUDE.md, files the user referenced, relevant code). Keep the user's request verbatim. Write a neutral framed question: the decision, key context, what's at stake. Don't steer. If too vague, ask the user one clarifying question first. For rando, send the framed question without workspace context beyond what's needed to understand it. Skip huddling for questions with one right answer — just answer.

**2. Huddle.** Spawn hater, toddler, hypeman, rando, and hustler in parallel (all five in a single message so they run concurrently) in Advise mode with the framed question. Send toddler the verbatim request alongside the framed question so it can attack the framing itself.

**3. Review.** Shuffle the five responses into A-E randomly (so positions don't reveal authors); boss keeps the letter→agent mapping. Spawn the same five agents in parallel in Review mode (all five in a single message so they run concurrently) with the framed question and the four responses that are not their own — each reviewer never sees its own response.

**4. Verdict.** Spawn bigbrain with the verbatim request, the framed question, the five responses de-anonymized by name, the A-E mapping, and the five reviews. bigbrain must verify any load-bearing code claims itself using Read before relying on them. bigbrain can side with a minority if its reasoning is strongest, and the recommendation must be a real answer, not "it depends". Output format:

```
**Consensus:** unanimous | majority | split
## Where the crew agrees
## Where the crew clashes
## Blind spots from review
## Recommendation
## One thing to do first
```

**5. Failures.** If an agent errors or returns nothing, retry it once; then proceed without it and name who was missing in the verdict.

Return the verdict in chat. No HTML report, no transcript files.
