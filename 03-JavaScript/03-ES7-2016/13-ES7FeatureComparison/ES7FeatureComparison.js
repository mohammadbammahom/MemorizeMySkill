// این درس مقایسه کاربردی ویژگی‌های اصلی ES7 را نشان می‌دهد.
// هدف این است که تفاوت بین عملگر توان، عملگر نسبت به توان و includes روشن شود.

console.log("=== Exponentiation operator ===");
console.log(3 ** 4);

let score = 2;
score **= 5;
console.log("Exponentiation assignment:", score);

console.log("\n=== Array includes ===");
const permissions = ["read", "write", "delete", "update"];
console.log("Can write:", permissions.includes("write"));
console.log("Can export:", permissions.includes("export"));

console.log("\n=== Real-world comparison ===");
const monthlyGrowth = 1.1;
const investment = 5000;
const futureValue = investment * (monthlyGrowth ** 12);
console.log("Future value:", futureValue.toFixed(2));

const productNames = ["Laptop", "Phone", "Tablet", "Router"];
console.log("Has router:", productNames.includes("Router"));

console.log("\n=== Problem each feature solves ===");
console.log("**: Fast numeric power calculation");
console.log("**=: Reuse value and update it in place");
console.log("includes(): Quick membership check in an array");

const comparisonValue = Math.pow(5, 3);
console.log("Math.pow value:", comparisonValue);
console.log("ES7 value:", 5 ** 3);

const userRoles = ["admin", "moderator", "editor"];
console.log("Moderator is present:", userRoles.includes("moderator"));

const safeScore = 4;
const safePower = safeScore ** 2;
console.log("Safe power:", safePower);

// ES7 ویژگی‌های محدود اما بسیار مفید و کاربردی دارد.
console.log("Conclusion: ES7 improves power math and array membership checks with clean syntax.");
