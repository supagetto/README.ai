# Prefer Mutation Over Immutability in Local Scope

- Prefer mutating a locally-scoped variable over rebuilding immutable copies, when it makes the logic easier to follow
- If the mutation logic starts to feel complicated (e.g. multiple conditional mutations spread across a function), reconsider and prefer a clearer immutable approach instead
- In practice, this usually means a `for` loop with local mutation (e.g. `.push()`) instead of `.reduce()` for building up a value across iterations; reach for `.reduce()` instead when the transform is a short, single-expression composition (e.g. chained with `.map()`/`.filter()`)

```typescript
// ❌ Avoid - rebuilds an immutable copy instead of mutating locally
const getFoos = ({ bars }: { bars: string[] }): string[] => {
  return bars.reduce<string[]>((foos, bar) => {
    return [...foos, bar.toUpperCase()];
  }, []);
};

// ✅ Mutate the locally-scoped array directly
const getFoos = ({ bars }: { bars: string[] }): string[] => {
  const foos: string[] = [];

  for (const bar of bars) {
    foos.push(bar.toUpperCase());
  }

  return foos;
};
```

```typescript
// ❌ Avoid - conditional spread rebuilding
const buildFoo = ({ isBaz }: { isBaz: boolean }): Foo => {
  return {
    bar: 'bar',
    ...(isBaz ? { baz: 'qux' } : {}),
  };
};

// ✅ Mutate the locally-scoped object directly
const buildFoo = ({ isBaz }: { isBaz: boolean }): Foo => {
  const foo: Foo = { bar: 'bar' };

  if (isBaz) {
    foo.baz = 'qux';
  }

  return foo;
};
```
