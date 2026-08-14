# Use `for...of` Loops Instead of `forEach`

Prefer a `for...of` loop over `Array#forEach` when iterating over a collection.

```typescript
// ❌ Avoid - forEach
foos.forEach((foo) => {
  ...
});

// ✅ Use for...of
for (const foo of foos) {
  ...
}
```
