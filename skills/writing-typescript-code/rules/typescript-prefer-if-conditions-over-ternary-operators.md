# Prefer If Conditions Over Ternary Operators

Prefer an `if` condition over a ternary operator for control flow.

```typescript
// ❌ Avoid - ternary for control flow
const foo = bar ? "baz" : "qux";

const fn = (): void => {
  return bar ? fn2() : fn3();
};

// ✅ Prefer an if condition
let foo = "qux";
if (bar) {
  foo = "baz";
}

const fn = (): void => {
  if (bar) {
    fn2();
    return;
  }

  fn3();
};
```
