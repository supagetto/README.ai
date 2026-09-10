# Always Use Multiline JSDoc

Always write JSDoc comments in multiline format, even for short descriptions.

```typescript
// ❌ Avoid
/** Does something. */
const fn = ({ foo }: { foo: string }): void => {
  // ...
};

// ✅ Use multiline format
/**
 * Does something.
 */
const fn = ({ foo }: { foo: string }): void => {
  // ...
};
```

```typescript
// ❌ Avoid
type Foo = {
  /** The bar value. */
  bar: string;
  /** The baz value. */
  baz: number;
};

// ✅ Use multiline format
type Foo = {
  /**
   * The bar value.
   */
  bar: string;
  /**
   * The baz value.
   */
  baz: number;
};
```
