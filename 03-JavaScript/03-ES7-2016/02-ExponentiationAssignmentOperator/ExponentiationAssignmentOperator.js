// عملگر تخصیص توان در ES7
// این درس نشان می‌دهد چگونه با **= یک عدد را به‌صورت کوتاه به توان برسانیم.

let value = 3;
console.log("=== Example 1: exponentiation assignment ===");
value **= 3;
console.log("3 **= 3 =>", value);

let growth = 2;
console.log("\n=== Example 2: repeated power calculation ===");
growth **= 4;
console.log("2 **= 4 =>", growth);

let radius = 5;
console.log("\n=== Example 3: area simulation ===");
radius **= 2;
console.log("Radius squared:", radius);

let score = 10;
console.log("\n=== Example 4: score growth ===");
score **= 2;
console.log("Score squared:", score);

console.log("\n=== Summary ===");
console.log("Exponentiation assignment provides a concise way to update values by power.");
