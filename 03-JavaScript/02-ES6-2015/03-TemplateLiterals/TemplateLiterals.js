// قالب‌های متنی در ES6
// این درس نشان می‌دهد چگونه رشته‌ها را با template literal ساده‌تر و خواناتر بسازیم.

const studentName = "Umar";
const courseName = "ES6 Fundamentals";
const score = 95;

const summary = `Student: ${studentName}
Course: ${courseName}
Score: ${score}`;
console.log("=== Example 1: multiline template literal ===");
console.log(summary);

const items = ["JavaScript", "Node.js", "React"];
const message = `Recommended tools: ${items.join(", ")}`;
console.log("\n=== Example 2: interpolation with array ===");
console.log(message);

const email = `${studentName.toLowerCase()}@example.com`;
console.log("\n=== Example 3: build dynamic string ===");
console.log(email);

console.log("\n=== Summary ===");
console.log("Template literals make string creation easier and safer.");