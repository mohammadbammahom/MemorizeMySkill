// پارامترهای پیش‌فرض در ES6
// این درس نشان می‌دهد چگونه با default parameters توابع انعطاف‌پذیرتر بنویسیم.

const createUser = (name = "Ali", role = "student") => {
  return {
    name,
    role,
    active: true
  };
};

console.log("=== Example 1: default parameters ===");
console.log(createUser());
console.log(createUser("Aisha"));
console.log(createUser("Fatimah", "teacher"));

const calculateTax = (amount, taxRate = 0.05) => {
  return amount + amount * taxRate;
};

console.log("\n=== Example 2: default tax rate ===");
console.log(calculateTax(200));
console.log(calculateTax(200, 0.08));

const buildMessage = (name, status = "active") => `${name} is ${status}`;
console.log("\n=== Example 3: default status ===");
console.log(buildMessage("Muhammad"));
console.log(buildMessage("Umar", "pending"));

console.log("\n=== Summary ===");
console.log("Default parameters make functions easier to call with missing values.");