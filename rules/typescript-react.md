---
paths:
  - "**/*.tsx"
---

# TypeScript React

## Destructure Props in the Component Parameter

Destructure props directly in the component's function parameter instead of accessing them via a `props` object.

```tsx
// ❌ Avoid
export const Component = (props: { foo: string }): JSX.Element => {
  const { foo } = props;

  ...
};

// ✅ Destructure directly in the parameter
export const Component = ({ foo }: { foo: string }): JSX.Element => {
  ...
};
```

## Use the Updater Function Form of setState

- When updating state based on its previous value, always use the updater function form of `setState`
- Use a descriptive `previous`-prefixed parameter name
- Exception to the single-args-object rule: the updater receives the raw previous value positionally (that's the `setState` signature), so it isn't wrapped in a destructured object — still give it an explicit return type

```typescript
// ❌ Avoid - reading state directly
if (isDropdownOpen) {
  setIsDropdownOpen(false);
} else {
  setIsDropdownOpen(true);
}

setCount(count + 1);

// ✅ Use updater function
setIsDropdownOpen((previousIsDropdownOpen): boolean => {
  return !previousIsDropdownOpen;
});

setCount((previousCount): number => {
  return previousCount + 1;
});
```
