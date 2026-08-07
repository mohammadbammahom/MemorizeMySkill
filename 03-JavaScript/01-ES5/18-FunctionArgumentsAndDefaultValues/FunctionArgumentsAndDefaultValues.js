// آرگومان‌ها و مقادیر پیش‌فرض تابع
// این درس برای ساخت توابع قابل استفاده در برنامه‌های واقعی بسیار مهم است.

function createGreeting(userName, greetingType) {
  greetingType = greetingType || "welcome";
  return greetingType + ", " + userName;
}

console.log("=== Example 1: Default greeting ===");
console.log(createGreeting("Muhammad"));
console.log(createGreeting("Aisha", "hello"));

console.log("\n=== Example 2: Build a payment summary ===");
function createPaymentSummary(customerName, amount, currency) {
  currency = currency || "USD";
  return customerName + " paid " + amount + " " + currency;
}

console.log(createPaymentSummary("AbuBakr", 250));
console.log(createPaymentSummary("Umar", 300, "EUR"));

console.log("\n=== Example 3: Use a fallback value ===");
function getDiscountStatus(status) {
  status = status || "standard";
  return "Discount status: " + status;
}

console.log(getDiscountStatus("vip"));
console.log(getDiscountStatus());

console.log("\n=== Summary ===");
console.log("Default values make functions more flexible and easier to use.");
