# Never Use Non-Null Assertions

Never use non-null assertions (`!`); use type narrowing or early returns
instead.

```typescript
// ❌ Avoid
const foo = bar.foo!;

// ✅ Narrow the type before use
if (!bar.foo) {
  return;
}

const foo = bar.foo;
```
