# Use a Ternary to Declare and Initialize a Conditional Value

When a variable's initial value depends on a condition, declare and initialize it in one step with a ternary instead of declaring it with `let` and reassigning it in an `if`. With `let` and an `if`, the declaration holds a placeholder that may be overwritten, so it does not show the variable's real value. Do not nest ternaries; if there are more than two outcomes, use an `if` condition or a lookup instead.

```typescript
// ❌ Avoid - declare with let, then reassign in an if
let foo = "qux";
if (bar) {
  foo = "baz";
}

// ✅ Declare and initialize with a ternary
const foo = bar ? "baz" : "qux";
```

Use a ternary only when the value is final at declaration. If the variable is reassigned later, declare it with `let` and use `if` conditions throughout.

```typescript
// ✅ Use if conditions - the value changes again later
let label = "Guest";
if (user) {
  label = user.name;
}

if (isAdmin) {
  label = `${label} (admin)`;
}
```
