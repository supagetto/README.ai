---
paths:
  - "*/*.{ts,tsx}"
---

# TypeScript Naming

## Use Descriptive Variable and Property Names

Always use descriptive variable and property names; avoid single-letter names.

```typescript
// ❌ Avoid - single-letter or cryptic names
const f = getFoo();
for (let i = 0; i < foos.length; i++) {
  ...
}

// ✅ Use descriptive names
const foo = getFoo();
for (let fooIndex = 0; fooIndex < foos.length; fooIndex++) {
  ...
}
```

## Name Variables After Their Type Alias

Name variables after their type alias (in camelCase), not after their role or usage.

```typescript
type Foo = {
  id: string;
};

const getFoo = async (): Promise<Foo> => {
  ...
};

const getFoos = async (): Promise<Foo[]> => {
  ...
};

// ❌ Avoid - name describes role, not type
const result = await getFoo();

// ✅ Use the type alias name
const foo = await getFoo();

// ✅ For arrays, use the plural of the type alias name
const foos = await getFoos();
for (const foo of foos) {
  ...
}
```

## Name Type Properties After Their Type

Name each property in a type or interface after its own type (in camelCase), not after its role — the same rule that applies to variables applies to object properties.

```typescript
type Bar = {
  id: string;
};

// ❌ Avoid - property names don't reflect their type
type Foo = {
  data: Bar;
  items: Bar[];
};

// ✅ Property names match the type (singular), plural for arrays
type Foo = {
  bar: Bar;
  bars: Bar[];
};
```

## Use Predicate Prefixes for Boolean Names

- Always use predicate prefixes for boolean variables and object properties
- Common prefixes: `is`, `should`, `has`, `can`, `will`

```typescript
// ❌ Avoid - non-predicate boolean names
const foo = await getFoo();
const bazQuxCorge = baz.qux === 'corge';

const fn = ({ enabled }: { enabled: boolean }): void => {
  ...
};

// ✅ Use predicate prefixes
const isFoo = await getFoo();
const isBazQuxCorge = baz.qux === 'corge';

const fn = ({ isEnabled }: { isEnabled: boolean }): void => {
  ...
};
```

## Suffix Names With Their Unit

When a value has a unit that isn't obvious from its type alone (e.g. currency, time), suffix the variable or property name with that unit.

```typescript
// ❌ Avoid - unit isn't clear from the name
const amount = 500;
const createdDateTime = '2024-01-01T00:00:00Z';

// ✅ Suffix the name with its unit
const amountCents = 500;
const createdIsoDateTimeUtc = '2024-01-01T00:00:00Z';
```
