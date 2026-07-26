---
paths:
  - "**/*.{ts,tsx}"
---

# TypeScript Functions

## Use a Single Args Object Parameter for Functions

- Use a single `args` object parameter instead of multiple positional parameters
- Destructure the args object directly in the function signature
- Use an inline type for the args object by default — only pull it into a separate type alias when that aids readability or reuse (e.g. the shape is shared across functions, or it's large/complex enough that inlining hurts clarity)
- This does not apply to higher-order functions that take a single function parameter — a lone callback stays a plain positional parameter rather than being wrapped in an args object

```typescript
// ❌ Avoid - multiple positional parameters
const fn = (foo: string, bar: number): void => {
  ...
};

// ❌ Avoid - args object without destructuring in signature
const fn = (args: { foo: string }): void => {
  const { foo } = args;
  ...
};

// ❌ Avoid - separate type alias for args
type FnArgs = {
  foo: string;
};
const fn = ({ foo }: FnArgs): void => {
  ...
};

// ✅ Single args object, destructured in signature with inline type
const fn = ({ foo }: { foo: string }): void => {
  ...
};

// ✅ Higher-order functions taking a single callback are exempt
const fn2 = (callback: () => void): void => {
  ...
};
```

## Initialize Default Values in the Parameter

Assign default values directly in the function parameter instead of falling back inside the function body.

```typescript
// ❌ Avoid - fallback assigned inside the function body
const fn = ({ foo }: { foo?: string }): void => {
  const bar = foo ?? 'baz';
  ...
};

// ✅ Initialize the default value in the parameter
const fn = ({ foo = 'baz' }: { foo?: string }): void => {
  ...
};
```

## Prefer Return Values Over Output Arguments

- Never mutate a function's parameters — treat them as read-only
- An output argument — a parameter passed in only so the function can mutate it to "return" data — is a common form of this; return a new value instead of mutating the argument to communicate it

```typescript
// ❌ Avoid - mutates the parameter
const fn = ({ foo }: { foo: number }): number => {
  foo += 1;

  return foo;
};

// ✅ Copy the parameter, then mutate the local copy instead
const fn = ({ foo }: { foo: number }): number => {
  let updatedFoo = foo;
  updatedFoo += 1;

  return updatedFoo;
};
```

## Always Add Explicit Return Types to Functions

- Always add explicit return types to functions and methods; do not rely on type inference for return types
- Exception: when a callback's return type is already pinned by an explicit generic type argument on the method it's passed to (e.g. `.reduce<string[]>(...)`), omit the annotation on the callback itself — it would just repeat what the generic already states

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
