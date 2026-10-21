---
name: writing-for-humans
description: 'Use before sending or posting outbound text that someone other than the user will read.'
user-invocable: false
---

Outbound text goes out under the user's name and cannot be unsent, so the user approves every word before it leaves.

## Steps

1. Draft the text. If the user gave the exact wording, that wording is the draft; skip step 2.
2. Load the removing-ai-tells skill and apply it to the draft.
3. Show the user the final text exactly as it will be sent. Then stop and wait.
4. Send the approved text verbatim. If the user asks for changes, apply them and return to step 3.

Done when the sent text matches the approved text word for word.
