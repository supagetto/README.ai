---
paths:
  - "**/*.{ts,tsx}"
---

# Separate Statements from Control Flow with Blank Lines

- Add a blank line before control statements (`if`, `for`, `while`, etc.) when
  preceded by other statements
- This includes separating consecutive control statements from each other, not
  just from preceding code
- Exception: no blank line needed when the control statement is the first line
  in a block, or when variables are directly related

```typescript
// ❌ Avoid - no spacing between statements and control flow
fn();
if (...) {
  ...
}
if (...) {
  ...
}

// ✅ Add blank line before each if
fn();

if (...) {
  ...
}

if (...) {
  ...
}

// ✅ Exception - variable directly tied to the if, no blank line needed
const isFoo = checkFoo();
if (isFoo) {
  ...
}
```
