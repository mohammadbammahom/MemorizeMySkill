// ماژول‌ها و namespaceها
// این الگوها به ما کمک می‌کنند کد را در بخش‌های جداگانه برای برنامه‌های بزرگ سازمان‌دهی کنیم.

var OrderApp = OrderApp || {};

OrderApp.calculateTax = function (amount, taxRate) {
  return amount * taxRate;
};

OrderApp.createInvoice = function (customerName, amount) {
  var tax = OrderApp.calculateTax(amount, 0.08);
  var total = amount + tax;
  return {
    customer: customerName,
    subtotal: amount,
    tax: tax,
    total: total
  };
};

console.log("=== Example 1: Create an invoice ===");
console.log(OrderApp.createInvoice("AbuBakr", 500));

console.log("\n=== Example 2: Calculate tax separately ===");
console.log("Tax amount:", OrderApp.calculateTax(500, 0.08));

console.log("\n=== Summary ===");
console.log("Modules and namespaces help keep related logic organized.");
