---
paths:
  - "**/*.{ts,tsx}"
---

# Name Type Properties After Their Type

Name each property in a type or interface after its own type (in camelCase), not
after its role — the same rule that applies to variables applies to object
properties.

```typescript
type Bar = {
  id: string;
};

// ❌ Avoid - property names don't reflect their type
type Foo = {
  data: Bar;
  items: Bar[];
};

// ✅ Property names match the type (singular), plural for arrays
type Foo = {
  bar: Bar;
  bars: Bar[];
};
```
