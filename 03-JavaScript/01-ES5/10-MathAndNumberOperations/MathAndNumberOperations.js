// ریاضی و عملیات عددی
// این درس برای محاسبه‌های برنامه‌ای و منطق مالی ضروری است.

console.log("=== Example 1: Basic math operations ===");
console.log("Addition:", 15 + 7);
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 6 * 9);
console.log("Division:", 36 / 6);

console.log("\n=== Example 2: Math object methods ===");
console.log("Round:", Math.round(4.7));
console.log("Floor:", Math.floor(4.9));
console.log("Ceil:", Math.ceil(4.1));
console.log("Absolute:", Math.abs(-20));
console.log("Maximum:", Math.max(12, 45, 7));
console.log("Minimum:", Math.min(12, 45, 7));

console.log("\n=== Example 3: Random number generation ===");
var randomNumber = Math.random();
console.log("Random number:", randomNumber);

console.log("\n=== Example 4: Generate a number in a range ===");
var min = 10;
var max = 20;
var randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Random number in range:", randomInRange);

console.log("\n=== Example 5: Currency calculation ===");
var price = 125.99;
var taxRate = 0.08;
var totalWithTax = price + (price * taxRate);
console.log("Price with tax:", totalWithTax.toFixed(2));

console.log("\n=== Summary ===");
console.log("Math and number operations are used in finance, analytics, and real-world calculations.");
