# Flat

## Introduction

`Array.prototype.flat()` creates a new array with sub-array elements concatenated to a specified depth.

## History

This method was introduced in ES10.

## Why this feature exists

It simplifies dealing with nested arrays.

## Syntax

```js
array.flat()
array.flat(depth)
```

## Return Value

A new flattened array.

## Simple Example

```js
const numbers = [1, [2, 3], [4, [5]]];
console.log(numbers.flat(2));
```

## Real World Example

```js
const menu = [["starter", "main"], ["dessert"]];
const allItems = menu.flat();
console.log(allItems);
```

## Best Practices

- Use it when flattening nested arrays
- Avoid overusing it on very large datasets

## Summary

`flat()` is a practical ES10 addition for working with nested lists.
