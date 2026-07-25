---
paths:
  - "*/*.{ts,tsx}"
---

# TypeScript Structure

## Prefer Early Returns Over Nested Conditionals

Prefer early returns to reduce nesting.

```typescript
// ❌ Avoid
const fn = ({ foo }: { foo: string | undefined }): void => {
  if (foo) {
    ...
  }
};

// ✅ Prefer early return
const fn = ({ foo }: { foo: string | undefined }): void => {
  if (!foo) {
    return;
  }

  ...
};
```

## Place Helper Functions Before the Main Function

Place helper functions at the top, the main/exported function at the bottom.

```typescript
// ❌ Avoid - main function before its helper
export const fn = (): void => {
  fn2();
};

const fn2 = (): void => {
  ...
};

// ✅ Helper first, main function below
const fn2 = (): void => {
  ...
};

export const fn = (): void => {
  fn2();
};
```

## Group Domain Functions Into a Namespace Object

When several functions produce the same domain type, group them into a single namespace object named after that type, with each method named after its source.

```typescript
// ❌ Avoid - loose exported function for the domain
export const getFooFromBar = ({ bar }: { bar: string }): string => {
  ...
};

// ✅ Define the function, then group into a namespace object named after the domain
const fromBar = ({ bar }: { bar: string }): string => {
  ...
};

export const getFoo = {
  fromBar,
};
```

## Prefer Mutation Over Immutability for Local Variables

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

## Extract Unclear Conditions Into a Named Variable

If a condition is not immediately clear at a glance, extract it into a descriptively named variable and use that in the condition instead.

```typescript
// ❌ Avoid - unclear inline condition
if (foo.bar && foo.baz < 3 && !foo.qux) {
  ...
}

// ✅ Extract into a descriptively named variable
const isFooBarBazQux = foo.bar && foo.baz < 3 && !foo.qux;
if (isFooBarBazQux) {
  ...
}
```
