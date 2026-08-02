# StrictMode

## Introduction

Strict mode helps developers write safer JavaScript by preventing silent errors and disallowing risky syntax.

## History

Strict mode was introduced in ES5 to make JavaScript more predictable.

## Why this feature exists

It reduces mistakes and makes code easier to maintain.

## Syntax

```js
'use strict';
```

## Rules

- Prevents accidental global variables
- Disallows duplicate parameter names
- Makes `this` in functions more predictable

## Simple Example

```js
'use strict';

function greet(name) {
  console.log(name);
}

greet('Ada');
```

## Real World Example

```js
'use strict';

function createUser(name) {
  this.name = name;
}

const user = new createUser('Grace');
console.log(user.name);
```

## Common Mistakes

- Forgetting to enable strict mode in large files
- Assuming `this` behaves the same as in sloppy mode

## Best Practices

- Use strict mode in modules and scripts
- Keep it consistent across files

## Interview Questions

- What does strict mode change in JavaScript?
- Why is strict mode useful?

## Summary

Strict mode improves reliability and is a foundational ES5 feature.
