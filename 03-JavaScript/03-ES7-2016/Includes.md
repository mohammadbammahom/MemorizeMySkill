# Includes

## Introduction

`Array.prototype.includes()` checks whether an array contains a given value.

## History

This method was introduced in ES7.

## Why this feature exists

It provides a clearer and more expressive way to test membership.

## Syntax

```js
array.includes(searchElement)
array.includes(searchElement, fromIndex)
```

## Parameters

- `searchElement`: the value to search for
- `fromIndex`: optional index to start searching from

## Return Value

A boolean value.

## Simple Example

```js
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana'));
```

## Real World Example

```js
const allowedRoles = ['admin', 'editor'];

function canAccess(role) {
  return allowedRoles.includes(role);
}

console.log(canAccess('admin'));
```

## Common Mistakes

- Confusing `includes()` with `indexOf()`
- Forgetting that `includes()` uses strict equality

## Best Practices

- Use it for simple membership checks
- Prefer it over `indexOf()` when readability matters

## Summary

`includes()` is a small ES7 addition that improves clarity in everyday code.
