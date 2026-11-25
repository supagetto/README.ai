# Prefer If Conditions Over Ternary Operators for Control Flow

Prefer an `if` condition over a ternary operator for control flow.

```typescript
// ❌ Avoid - ternary for control flow
const fn = (): void => {
  return bar ? fn2() : fn3();
};

// ✅ Prefer an if condition
const fn = (): void => {
  if (bar) {
    fn2();
    return;
  }

  fn3();
};
```
