# PromiseFinally

## Introduction

`Promise.prototype.finally()` runs code after a promise settles, whether it resolves or rejects.

## History

This method was introduced in ES9.

## Why this feature exists

It helps keep cleanup logic in one place.

## Syntax

```js
promise.finally(onFinally)
```

## Return Value

A new promise.

## Simple Example

```js
function fetchData() {
  return Promise.resolve('done');
}

fetchData().finally(() => console.log('Finished'));
```

## Real World Example

```js
function saveUser() {
  return Promise.resolve('Saved');
}

saveUser()
  .then(result => console.log(result))
  .catch(err => console.error(err))
  .finally(() => console.log('Cleanup complete'));
```

## Best Practices

- Use it for cleanup and logging
- Avoid putting business logic inside `finally`

## Summary

`finally()` is a practical ES9 feature for cleaner promise handling.
