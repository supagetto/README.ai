---
paths:
  - "**/*.{ts,tsx}"
---

# Prefer Return Values Over Output Arguments

- Never mutate a function's parameters — treat them as read-only
- An output argument — a parameter passed in only so the function can mutate it
  to "return" data — is a common form of this; return a new value instead of
  mutating the argument to communicate it

```typescript
// ❌ Avoid - mutates the parameter
const fn = ({ foo }: { foo: number }): number => {
  foo += 1;

  return foo;
};

// ✅ Copy the parameter, then mutate the local copy instead
const fn = ({ foo }: { foo: number }): number => {
  let updatedFoo = foo;
  updatedFoo += 1;

  return updatedFoo;
};
```
