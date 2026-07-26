---
paths:
  - "**/*.{ts,tsx}"
---

# TypeScript Style

## Use Arrow Functions Instead of Function Declarations

Always use arrow functions instead of `function` declarations.

```typescript
// ❌ Avoid - function declaration
function fn(): void {
  ...
};

// ✅ Use arrow functions
const fn = (): void => {
  ...
};
```

## Always Use Braces

- Always use braces for control statements, even for single-line bodies
- Wrap each `switch` `case` body in braces to scope block-local variables

```typescript
// ❌ Avoid
if (...) fn();

// ✅ Use braces
if (...) {
  fn();
}

// ❌ Avoid - case body without braces
switch (foo) {
  case "bar":
    const baz = getBaz();
    fn(baz);
    break;
}

// ✅ Use braces around case bodies
switch (foo) {
  case "bar": {
    const baz = getBaz();
    fn(baz);
    break;
  }
}
```

## Separate Statements from Control Flow with Blank Lines

- Add a blank line before control statements (`if`, `for`, `while`, etc.) when preceded by other statements
- This includes separating consecutive control statements from each other, not just from preceding code
- Exception: no blank line needed when the control statement is the first line in a block, or when variables are directly related

```typescript
// ❌ Avoid - no spacing between statements and control flow
fn();
if (...) {
  ...
}
if (...) {
  ...
}

// ✅ Add blank line before each if
fn();

if (...) {
  ...
}

if (...) {
  ...
}

// ✅ Exception - variable directly tied to the if, no blank line needed
const isFoo = checkFoo();
if (isFoo) {
  ...
}
```

## Mark Non-Awaited Promises with Void

Prefix a promise-returning call with `void` when you intentionally don't await it, so it's clear the omission is deliberate and not a missing `await`.

```typescript
// ❌ Avoid - unawaited promise with no indication it's intentional
const fn = (): void => {
  fnAsync();
};

// ✅ Mark intentional fire-and-forget with void
const fn = (): void => {
  void fnAsync();
};
```

## Use `for...of` Loops Instead of `forEach`

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
