---
paths:
  - '**/*.{ts,tsx}'
---

# Use Predicate Prefixes for Boolean Names

- Always use predicate prefixes for boolean variables and object properties
- Common prefixes: `is`, `should`, `has`, `can`, `will`

```typescript
// ❌ Avoid - non-predicate boolean names
const foo = await getFoo();
const bazQuxCorge = baz.qux === 'corge';

const fn = ({ enabled }: { enabled: boolean }): void => {
  ...
};

// ✅ Use predicate prefixes
const isFoo = await getFoo();
const isBazQuxCorge = baz.qux === 'corge';

const fn = ({ isEnabled }: { isEnabled: boolean }): void => {
  ...
};
```
