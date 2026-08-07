// بسته‌ها و callbackها
// این درس به ما کمک می‌کند رفتار توابع درون توابع و کار با تابع‌های پاس‌شده را بهتر بفهمیم.

function processItems(items, callback) {
  var result = [];
  for (var i = 0; i < items.length; i++) {
    result.push(callback(items[i]));
  }
  return result;
}

var students = ["Muhammad", "Ali", "Khadijah", "Aisha"];
var studentLengths = processItems(students, function (name) {
  return name.length;
});
console.log("=== Example 1: Callback result ===");
console.log(studentLengths);

function createCounter() {
  var count = 0;

  return function () {
    count = count + 1;
    return count;
  };
}

var counter = createCounter();
console.log("\n=== Example 2: Closure counter ===");
console.log(counter());
console.log(counter());

var prices = [120, 80, 200, 45];
var doubledPrices = processItems(prices, function (price) {
  return price * 2;
});
console.log("\n=== Example 3: Process numbers ===");
console.log(doubledPrices);

console.log("\n=== Summary ===");
console.log("Closures and callbacks make code reusable and flexible.");
