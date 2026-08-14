# Use Descriptive Variable and Property Names

Always use descriptive variable and property names; avoid single-letter names.

```typescript
// ❌ Avoid - single-letter or cryptic names
const f = getFoo();
for (let i = 0; i < foos.length; i++) {
  ...
}

// ✅ Use descriptive names
const foo = getFoo();
for (let fooIndex = 0; fooIndex < foos.length; fooIndex++) {
  ...
}
```
