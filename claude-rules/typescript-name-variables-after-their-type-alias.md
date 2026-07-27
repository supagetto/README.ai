---
paths:
  - "**/*.{ts,tsx}"
---

# Name Variables After Their Type Alias

Name variables after their type alias (in camelCase), not after their role or usage.

```typescript
type Foo = {
  id: string;
};

const getFoo = async (): Promise<Foo> => {
  ...
};

const getFoos = async (): Promise<Foo[]> => {
  ...
};

// ❌ Avoid - name describes role, not type
const result = await getFoo();

// ✅ Use the type alias name
const foo = await getFoo();

// ✅ For arrays, use the plural of the type alias name
const foos = await getFoos();
for (const foo of foos) {
  ...
}
```
