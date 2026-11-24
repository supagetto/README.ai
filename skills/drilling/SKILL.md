---
name: drilling
description: 'Question the user in batches until you share one understanding of a decision or idea. Use when the user says "drill me" or "drilling time".'
user-invocable: false
model: fable
effort: high
---

Question the user until the two of you understand the problem the same way. Keep a decision tree in mind: each decision has child decisions that only make sense once it is answered.

## Process

1. List the decisions that are ready: every decision whose parent decisions are answered. Leave out any decision whose answer hangs on another question that is still open, including one in the batch you are about to send, because asking it now means guessing at an answer you don't have.
2. Check the environment for facts yourself. For each fact you need, start a sub-agent with a fresh context window. Never ask the user something you can look up, so their attention goes to decisions, not facts. Don't hold up the batch for it: ask the questions that don't need the fact, and keep the dependent ones for later.
3. Send every ready question in one batch, numbered, each with your recommended answer, so the user answers them in one pass instead of one round trip each. Phrase each so that "yes" accepts the recommendation, so agreeing takes one word. Use this layout, as rendered markdown and not inside a code block, so the headings and bold make each question easy to scan:

   ```markdown
   ### ❓ Q1. <title>
   <body, can run several paragraphs and list choices>

   👉 **Recommended:** <your answer>

   ---

   ### ❓ Q2. <title>
   <body>

   👉 **Recommended:** <your answer>
   ```

4. Stop and wait for the answers. The decisions belong to the user, so don't settle any yourself.
5. After each batch of answers, write or overwrite the drilling file with what is settled so far. For each decision record the question, the chosen answer, and the reason, in the order they were settled. Name and place the file as the using-workbench skill says. It is a raw record, not a plan. Writing it every batch leaves a trail if the session is cut off. A different topic gets its own file; never overwrite another topic's.
6. Work out which decisions the answers unlocked, and go back to step 1.

Done when no question is left and nothing has been assumed without saying so. Then state the shared understanding and take no action until the user confirms it.
