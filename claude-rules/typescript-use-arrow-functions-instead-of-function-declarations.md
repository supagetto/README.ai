---
paths:
  - "**/*.{ts,tsx}"
---

# Use Arrow Functions Instead of Function Declarations

Always use arrow functions instead of `function` declarations.

```typescript
// ❌ Avoid - function declaration
function fn(): void {
  ...
};

// ✅ Use arrow functions
const fn = (): void => {
  ...
};
```
