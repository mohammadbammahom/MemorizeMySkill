// توان‌گیری در ES7
// این درس به ما نشان می‌دهد که چگونه با عملگر ** مقدار را به توان برسانیم.

const base = 2;
const exponent = 5;
const result = base ** exponent;

console.log("=== Example 1: exponentiation operator ===");
console.log("2 ** 5 =", result);

const area = 3 ** 3;
console.log("\n=== Example 2: calculate power ===");
console.log("3 ** 3 =", area);

const values = [2, 3, 4];
const squaredValues = values.map(value => value ** 2);
console.log("\n=== Example 3: use in arrays ===");
console.log(squaredValues);

const studentScore = 6;
const finalScore = studentScore ** 2;
console.log("\n=== Example 4: practical usage ===");
console.log("Student score squared:", finalScore);

console.log("\n=== Summary ===");
console.log("The exponentiation operator makes power calculations cleaner and easier to read.");
