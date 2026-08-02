# LetConst

## Introduction

`let` and `const` provide block-scoped variables, which make JavaScript code safer and easier to reason about.

## History

These declarations were introduced in ES6 to address the limitations of `var`.

## Why this feature exists

They reduce bugs caused by function-scoping and accidental redefinitions.

## Syntax

```js
let count = 1;
const name = 'Ada';
```

## Rules

- `let` can be reassigned.
- `const` cannot be reassigned.
- Both are block-scoped.

## Simple Example

```js
let score = 10;
score = 20;

const pi = 3.14;
// pi = 3.15; // Error
```

## Real World Example

```js
function updateCounter() {
  let counter = 0;
  counter += 1;
  return counter;
}

console.log(updateCounter());
```

## Common Mistakes

- Using `var` when `let` is more appropriate
- Mutating `const` objects and arrays by mistake

## Best Practices

- Prefer `const` by default
- Use `let` only when reassignment is required

## Interview Questions

- What is the difference between `let` and `var`?
- Why is `const` preferred for constants?

## Summary

`let` and `const` are core ES6 features that improve code clarity and reliability.
