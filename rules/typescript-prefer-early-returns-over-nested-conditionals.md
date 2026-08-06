---
paths:
  - '**/*.{ts,tsx}'
---

# Prefer Early Returns Over Nested Conditionals

Prefer early returns to reduce nesting.

```typescript
// ❌ Avoid
const fn = ({ foo }: { foo: string | undefined }): void => {
  if (foo) {
    ...
  }
};

// ✅ Prefer early return
const fn = ({ foo }: { foo: string | undefined }): void => {
  if (!foo) {
    return;
  }

  ...
};
```
