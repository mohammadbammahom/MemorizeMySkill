// زمینه اجرای غیرهمزمان در JavaScript
// این درس به ما می‌آموزد که در کدنویسی غیرهمزمان، context اجرا چگونه تغییر می‌کند و چرا باید آن را کنترل کنیم.

console.log("=== Example 1: synchronous execution ===");
console.log("Start");
console.log("Finish");

console.log("\n=== Example 2: asynchronous callback ===");
setTimeout(function () {
  console.log("This runs later");
}, 50);

console.log("This runs first");

const user = {
  name: "Muhammad",
  loadProfile: function () {
    return this.name;
  }
};

console.log("\n=== Example 3: context with object method ===");
console.log(user.loadProfile());

const loadProfileLater = user.loadProfile;
console.log("\n=== Example 4: lost context in async flow ===");
console.log(loadProfileLater());

const safeProfile = user.loadProfile.bind(user);
setTimeout(function () {
  console.log("Bound context:", safeProfile());
}, 20);

console.log("\n=== Summary ===");
console.log("Understanding async execution and context is essential for reliable JavaScript code.");
