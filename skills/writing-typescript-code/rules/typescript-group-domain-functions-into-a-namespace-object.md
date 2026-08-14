# Group Domain Functions Into a Namespace Object

When several functions produce the same domain type, group them into a single
namespace object named after that type, with each method named after its source.

```typescript
// ❌ Avoid - loose exported function for the domain
export const getFooFromBar = ({ bar }: { bar: string }): string => {
  ...
};

// ✅ Define the function, then group into a namespace object named after
// the domain
const fromBar = ({ bar }: { bar: string }): string => {
  ...
};

export const getFoo = {
  fromBar,
};
```
