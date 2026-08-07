// توابع
// این درس به ما کمک می‌کند منطق را به بخش‌های قابل استفاده تقسیم کنیم.

function createOrderSummary(customerName, totalAmount, shippingFee) {
  var totalWithShipping = totalAmount + shippingFee;
  return "Order for " + customerName + " totals " + totalWithShipping + " dollars";
}

console.log("=== Example 1: Create a reusable order summary ===");
console.log(createOrderSummary("Muhammad", 250, 20));
console.log(createOrderSummary("Aisha", 430, 15));

console.log("\n=== Example 2: Calculate discount ===");
function calculateDiscount(totalAmount, discountRate) {
  return totalAmount * discountRate;
}

var discount = calculateDiscount(1000, 0.1);
console.log("Discount:", discount);

console.log("\n=== Example 3: Check order eligibility ===");
function isEligibleForFreeShipping(orderTotal) {
  return orderTotal >= 300;
}

console.log("Eligible for free shipping:", isEligibleForFreeShipping(280));
console.log("Eligible for free shipping:", isEligibleForFreeShipping(350));

console.log("\n=== Example 4: Build a short user profile ===");
function createUserProfile(userName, userAge) {
  return {
    name: userName,
    age: userAge,
    isActive: true
  };
}

var profile = createUserProfile("Umar", 29);
console.log("User profile:", profile);

console.log("\n=== Example 5: Validate login input ===");
function isValidLogin(username, password) {
  return username.length > 3 && password.length > 5;
}

console.log("Valid login:", isValidLogin("AbuBakr", "123456"));
console.log("Valid login:", isValidLogin("Ali", "abc"));

console.log("\n=== Example 6: Function with default value in ES5 style ===");
function getPaymentMessage(paymentStatus) {
  paymentStatus = paymentStatus || "pending";
  return "Payment status: " + paymentStatus;
}

console.log(getPaymentMessage("paid"));
console.log(getPaymentMessage());

console.log("\n=== Summary ===");
console.log("Functions make code reusable, readable, and easier to maintain.");
