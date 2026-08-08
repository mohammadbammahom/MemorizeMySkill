// توابع پیکانی در ES6
// این درس نشان می‌دهد چگونه با arrow function کد کوتاه‌تر و خواناتر بنویسیم.

const numbers = [5, 12, 18, 25];

const squared = numbers.map(number => number * number);
console.log("=== Example 1: map with arrow function ===");
console.log(squared);

const students = [
  { name: "Aisha", score: 85 },
  { name: "Ali", score: 92 },
  { name: "Fatimah", score: 78 }
];

const passedStudents = students.filter(student => student.score >= 80);
console.log("\n=== Example 2: filter with arrow function ===");
console.log(passedStudents);

const greet = name => `Hello, ${name}`;
console.log("\n=== Example 3: arrow function with single argument ===");
console.log(greet("Muhammad"));

const multiply = (a, b) => a * b;
console.log("\n=== Example 4: arrow function with multiple arguments ===");
console.log(multiply(6, 7));

console.log("\n=== Summary ===");
console.log("Arrow functions help write cleaner callback and functional code.");