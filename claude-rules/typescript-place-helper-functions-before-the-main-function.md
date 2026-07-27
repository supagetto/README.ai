---
paths:
  - "**/*.{ts,tsx}"
---

# Place Helper Functions Before the Main Function

Place helper functions at the top, the main/exported function at the bottom.

```typescript
// ❌ Avoid - main function before its helper
export const fn = (): void => {
  fn2();
};

const fn2 = (): void => {
  ...
};

// ✅ Helper first, main function below
const fn2 = (): void => {
  ...
};

export const fn = (): void => {
  fn2();
};
```
