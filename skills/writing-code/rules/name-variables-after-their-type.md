# Name Variables After Their Type

Name variables after their type (in camelCase), not after their role or usage.

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

// ✅ Use the type name
const foo = await getFoo();

// ✅ For arrays, use the plural of the type name
const foos = await getFoos();
for (const foo of foos) {
  ...
}

// ✅ Callback parameters
const hasFoo = foos.some((foo) => {
  return foo.id === id;
});
```
