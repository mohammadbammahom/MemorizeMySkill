// عملگر spread در ES6
// این درس نشان می‌دهد چگونه آیتم‌های آرایه و اشیا را در ساختارهای جدید کپی کنیم.

const baseUsers = ["Muhammad", "Umar"];
const moreUsers = ["Khadijah", "Aisha", ...baseUsers];
console.log("=== Example 1: spread with arrays ===");
console.log(moreUsers);

const defaultSettings = { theme: "light", notifications: true };
const customSettings = { ...defaultSettings, notifications: false, layout: "grid" };
console.log("\n=== Example 2: spread with objects ===");
console.log(customSettings);

const numbers = [10, 20, 30];
const maxNumber = Math.max(...numbers);
console.log("\n=== Example 3: spread in function call ===");
console.log(maxNumber);

const updatedUsers = ["AbuBakr", ...moreUsers, "Ali"];
console.log("\n=== Example 4: add values in array ===");
console.log(updatedUsers);

console.log("\n=== Summary ===");
console.log("Spread operator makes array and object copying easier.");