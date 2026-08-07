// محدوده تابع و هاستینگ
// این درس به ما کمک می‌کند رفتار متغیرها در زمان اجرا را بهتر بفهمیم.

console.log("=== Example 1: Hoisting of function declarations ===");
console.log(greet("Ali"));

function greet(name) {
  return "Hello, " + name;
}

console.log("\n=== Example 2: Local scope ===");
function createCounter() {
  var count = 0;

  function increment() {
    count = count + 1;
    return count;
  }

  return increment;
}

var counter = createCounter();
console.log(counter());
console.log(counter());

console.log("\n=== Example 3: Variable hoisting ===");
console.log(message);
var message = "Learning JavaScript";

console.log("\n=== Summary ===");
console.log("Scope and hoisting are essential for understanding variable behavior.");
