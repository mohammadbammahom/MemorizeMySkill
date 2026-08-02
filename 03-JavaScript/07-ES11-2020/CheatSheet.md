# ES11 Cheat Sheet

## Syntax

```js
const value = input ?? 'default';
const name = user?.profile?.name;
```

## Quick reference

| Feature | Example |
| --- | --- |
| Nullish coalescing | `value ?? defaultValue` |
| Optional chaining | `user?.name` |
| All settled | `Promise.allSettled([...])` |
