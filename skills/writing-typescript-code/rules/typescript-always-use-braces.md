# Always Use Braces

Always use braces for everything, even for single-line bodies

```typescript
// ❌ Avoid
if (isFoo) fn();

// ✅ Use braces
if (isFoo) {
  fn();
}
```

```typescript
// ❌ Avoid
for (const bar of bars) fn({ bar });

// ✅ Use braces
for (const bar of bars) {
  fn({ bar });
}
```

```typescript
// ❌ Avoid
while (isFoo) fn();

// ✅ Use braces
while (isFoo) {
  fn();
}
```

```typescript
// ❌ Avoid - expression body
const double = ({ foo }: { foo: number }): number => foo * 2;

// ✅ Use a block body
const double = ({ foo }: { foo: number }): number => {
  return foo * 2;
};
```

```typescript
// ❌ Avoid - case body without braces
switch (foo) {
  case "bar":
    const baz = getBaz();
    fn({ baz });
    break;
}

// ✅ Use braces around case bodies
switch (foo) {
  case "bar": {
    const baz = getBaz();
    fn({ baz });
    break;
  }
}
```
