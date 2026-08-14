# Always Add Explicit Return Types to Functions

- Always add explicit return types to functions and methods; do not rely on type
  inference for return types
- Exception: when a callback's return type is already pinned by an explicit
  generic type argument on the method it's passed to (e.g.
  `.reduce<string[]>(...)`), omit the annotation on the callback itself — it
  would just repeat what the generic already states

```typescript
// ❌ Avoid - no explicit return type
const fn = () => {
  ...
};

// ✅ Use explicit return types
const fn = (): void => {
  ...
};

// ✅ Exempt - the generic type argument on reduce already pins the return type
const getFoos = ({ bars }: { bars: string[] }): string[] => {
  return bars.reduce<string[]>((foos, bar) => {
    return [...foos, bar.toUpperCase()];
  }, []);
};
```
