# ObjectEntries

## Introduction

`Object.entries()` returns an array of key-value pairs for an object.

## History

This helper was introduced in ES8.

## Why this feature exists

It makes object iteration easier and more consistent with array iteration.

## Syntax

```js
Object.entries(obj)
```

## Return Value

An array of `[key, value]` pairs.

## Simple Example

```js
const user = { name: 'Ada', role: 'admin' };
console.log(Object.entries(user));
```

## Real World Example

```js
const settings = { theme: 'dark', compact: true };

for (const [key, value] of Object.entries(settings)) {
  console.log(`${key}: ${value}`);
}
```

## Common Mistakes

- Using it on `null` or `undefined`
- Confusing it with `Object.keys()`

## Best Practices

- Use it when you need both keys and values
- Combine it with destructuring for readable loops

## Summary

`Object.entries()` is a practical ES8 feature for working with object data.
