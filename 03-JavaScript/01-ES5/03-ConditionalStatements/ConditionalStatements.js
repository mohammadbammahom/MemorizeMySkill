// شرط‌ها
// این درس به ما کمک می‌کند بر اساس داده‌های واقعی تصمیم بگیریم.

var userStatus = "active";
var accountType = "premium";
var hasPendingVerification = false;
var orderAmount = 280;
var freeShippingThreshold = 300;

console.log("=== Example 1: Login access ===");
if (userStatus === "active") {
  console.log("User can access the dashboard.");
} else {
  console.log("User must log in again.");
}

console.log("\n=== Example 2: Premium account access ===");
if (accountType === "premium" || accountType === "admin") {
  console.log("User has access to advanced features.");
} else {
  console.log("User has access to basic features only.");
}

console.log("\n=== Example 3: Verification status ===");
if (hasPendingVerification) {
  console.log("Account is waiting for verification.");
} else {
  console.log("Account is ready for purchases.");
}

console.log("\n=== Example 4: Shipping decision ===");
if (orderAmount >= freeShippingThreshold) {
  console.log("Free shipping is available.");
} else {
  console.log("Shipping fee will be added.");
}

console.log("\n=== Example 5: Multiple conditions ===");
if (userStatus === "active" && !hasPendingVerification) {
  console.log("The account is fully usable.");
} else if (userStatus === "active" && hasPendingVerification) {
  console.log("The account is active but needs verification.");
} else {
  console.log("The account is inactive.");
}

console.log("\n=== Example 6: Order approval ===");
var orderStatus = "pending";
if (orderStatus === "paid") {
  console.log("Order is approved.");
} else if (orderStatus === "pending") {
  console.log("Order is still waiting for payment.");
} else {
  console.log("Order was canceled.");
}

console.log("\n=== Example 7: Discount eligibility ===");
var isMember = true;
var totalPurchase = 1200;
if (isMember && totalPurchase >= 1000) {
  console.log("Customer is eligible for a loyalty discount.");
} else {
  console.log("No loyalty discount is available.");
}

console.log("\n=== Example 8: Payment method check ===");
var paymentMethod = "card";
if (paymentMethod === "card") {
  console.log("Payment will be processed securely.");
} else if (paymentMethod === "cash") {
  console.log("Payment will be collected on delivery.");
} else {
  console.log("Payment method is not supported.");
}

console.log("\n=== Summary ===");
console.log("Conditional statements help applications make decisions based on real data.");
