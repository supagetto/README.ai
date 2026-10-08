# Never Use Type Assertions

Never use type assertions (`as`); use type narrowing, type guards, or `satisfies` instead. Exceptions: `as const`, and inside user-defined type guards (functions returning `value is T`).

```typescript
// ❌ Avoid
const foo = JSON.parse(bar) as Foo;

// ✅ Narrow the type with a type guard
const foo: unknown = JSON.parse(bar);

if (!isFoo(foo)) {
  return;
}
```
