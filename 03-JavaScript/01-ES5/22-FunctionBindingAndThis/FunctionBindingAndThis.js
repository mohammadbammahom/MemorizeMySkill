// bind و this
// این درس نشان می‌دهد چرا در بعضی موقعیت‌ها this تغییر می‌کند و چگونه آن را ثابت نگه داریم.

var user = {
  name: "Ali",
  greet: function () {
    return "Hello, " + this.name;
  }
};

console.log("=== Example 1: Normal method call ===");
console.log(user.greet());

var borrowedGreet = user.greet;
console.log("\n=== Example 2: Lost this ===");
console.log(borrowedGreet());

var boundGreet = user.greet.bind(user);
console.log("\n=== Example 3: Fixed with bind ===");
console.log(boundGreet());

function showMessage(callback) {
  return callback();
}

var safeCallback = user.greet.bind(user);
console.log("\n=== Example 4: Callback with bound this ===");
console.log(showMessage(safeCallback));

console.log("\n=== Summary ===");
console.log("Binding helps us keep the correct context for this.");
