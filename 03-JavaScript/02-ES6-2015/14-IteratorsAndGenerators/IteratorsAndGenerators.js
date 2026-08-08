// Iteratorها و Generatorها در ES6
// این درس نشان می‌دهد چگونه داده‌ها را با iterator و generator مدیریت کنیم.

function* countUpTo(limit) {
  let count = 1;
  while (count <= limit) {
    yield count;
    count += 1;
  }
}

console.log("=== Example 1: generator function ===");
const counter = countUpTo(3);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

const range = {
  from: 1,
  to: 4,
  [Symbol.iterator]() {
    let current = this.from;
    const end = this.to;
    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        }
        return { done: true };
      }
    };
  }
};

console.log("\n=== Example 2: custom iterator ===");
for (const value of range) {
  console.log(value);
}

console.log("\n=== Example 3: spread from iterable ===");
console.log([...range]);

console.log("\n=== Summary ===");
console.log("Iterators and generators make custom iterable data easy to build.");