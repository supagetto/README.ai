---
paths:
  - '**/*.{ts,tsx}'
---

# Always Use Braces

- Always use braces for control statements, even for single-line bodies
- Wrap each `switch` `case` body in braces to scope block-local variables

```typescript
// ❌ Avoid
if (...) fn();

// ✅ Use braces
if (...) {
  fn();
}

// ❌ Avoid - case body without braces
switch (foo) {
  case "bar":
    const baz = getBaz();
    fn(baz);
    break;
}

// ✅ Use braces around case bodies
switch (foo) {
  case "bar": {
    const baz = getBaz();
    fn(baz);
    break;
  }
}
```
