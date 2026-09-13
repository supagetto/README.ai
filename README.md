## 🤖 Agents

- 🎯 **boss** — orchestrates: plans, delegates, reconciles, verifies
- 🔍 **scout** — fast codebase search and pattern matching
- 🤓 **nerd** — external docs and library research
- 🧠 **bigbrain** — architecture, debugging, and code review
- 🎨 **artist** — UI/UX design, review, and implementation
- 🔨 **grunt** — bounded, headless implementation
- 👁️ **witness** — visual analysis of images, PDFs, and diagrams

## 🔁 Workflow

All work routes through boss. It delegates each step to the right agent; agents never talk to each other.

```mermaid
flowchart TD
    A["🔥 grill the idea<br/>by boss + bigbrain / scout / nerd / witness"] --> B["📝 write spec<br/>by boss"]
    B --> C["📋 break into tasks<br/>by boss"]
    C --> D["🔨 implement<br/>by grunt (logic) or artist (UI)"]
    D --> E["🔎 code review<br/>by bigbrain (logic) or artist (UI)"]
    E --> F{❓ findings?}
    F -->|yes| G["🩹 fix<br/>by grunt or artist"]
    G --> E
    F -->|no| H(["🏁 end"])
```
