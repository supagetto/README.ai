# Prefer Type Aliases Over Interfaces

Use `type` by default; use `interface` only when you need declaration merging (e.g. to augment a library's types).

```typescript
// ❌ Avoid - interface for a plain object shape
interface Foo {
  bar: string;
}

// ✅ Use a type alias
type Foo = {
  bar: string;
};

// ✅ Exempt - declaration merging to augment a library's types
declare module 'baz' {
  interface Qux {
    bar: string;
  }
}
```
