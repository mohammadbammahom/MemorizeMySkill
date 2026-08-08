// Array.includes در ES7
// این درس نشان می‌دهد چگونه یک مقدار در آرایه را بدون نگرانی از NaN بررسی کنیم.

const students = ["Muhammad", "Ali", "Aisha", "Fatimah"];
console.log("=== Example 1: includes on strings ===");
console.log(students.includes("Ali"));
console.log(students.includes("Umar"));

const scores = [10, 20, 30, NaN];
console.log("\n=== Example 2: includes with NaN ===");
console.log(scores.includes(NaN));

const products = ["Notebook", "Pen", "Book"];
console.log("\n=== Example 3: search from a position ===");
console.log(products.includes("Pen", 1));
console.log(products.includes("Pen", 2));

const members = ["AbuBakr", "Umar", "Uthman", "Ali"];
console.log("\n=== Example 4: use in real data ===");
console.log(members.includes("Uthman"));

console.log("\n=== Summary ===");
console.log("Array.includes provides a clean and readable way to check membership in arrays.");
