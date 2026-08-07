// عملگرها و عبارت‌ها در ES5
// این ابزارها به ما کمک می‌کنند تا مقادیر را مقایسه کنیم، مجموع‌ها را محاسبه کنیم و تصمیم بگیریم.

console.log("=== Example 1: Arithmetic operators in a shopping cart ===");
var productPrice = 150;
var quantity = 3;
var shippingFee = 25;
var totalPrice = productPrice * quantity + shippingFee;

console.log("Product price:", productPrice);
console.log("Quantity:", quantity);
console.log("Shipping fee:", shippingFee);
console.log("Total price:", totalPrice);

console.log("\n=== Example 2: Comparison operators for account access ===");
var enteredPassword = "123456";
var storedPassword = "123456";
var isPasswordCorrect = enteredPassword === storedPassword;

console.log("Entered password matches stored password:", isPasswordCorrect);

console.log("\n=== Example 3: Logical operators for access control ===");
var isLoggedIn = true;
var isAdmin = false;
var canManageUsers = isLoggedIn && isAdmin;

console.log("Is user logged in?", isLoggedIn);
console.log("Is user an admin?", isAdmin);
console.log("Can manage users?", canManageUsers);

console.log("\n=== Example 4: Assignment operators in a checkout summary ===");
var subtotal = 800;
var discount = 120;
var finalAmount = subtotal - discount;

console.log("Subtotal:", subtotal);
console.log("Discount:", discount);
console.log("Final amount:", finalAmount);

console.log("\n=== Example 5: Unary operators in a dashboard counter ===");
var unreadMessages = 4;
unreadMessages++;
console.log("Unread messages after increment:", unreadMessages);

var activeSessions = 2;
activeSessions--;
console.log("Active sessions after decrement:", activeSessions);

console.log("\n=== Example 6: Operator precedence in a promotion calculation ===");
var basePrice = 500;
var taxRate = 0.08;
var couponDiscount = 50;
var payableAmount = basePrice + basePrice * taxRate - couponDiscount;

console.log("Base price:", basePrice);
console.log("Tax rate:", taxRate);
console.log("Coupon discount:", couponDiscount);
console.log("Payable amount:", payableAmount);

console.log("\n=== Example 7: Using logical operators in a course platform ===");
var hasSubscription = true;
var hasTrialExpired = false;
var canWatchPremiumVideos = hasSubscription && !hasTrialExpired;

console.log("Has subscription:", hasSubscription);
console.log("Has trial expired:", hasTrialExpired);
console.log("Can watch premium videos:", canWatchPremiumVideos);

console.log("\n=== Example 8: Comparing values carefully ===");
var numberValue = 10;
var stringValue = "10";
var strictComparison = numberValue === stringValue;
var looseComparison = numberValue == stringValue;

console.log("Strict comparison:", strictComparison);
console.log("Loose comparison:", looseComparison);

console.log("\n=== Example 9: Real-world decision logic for orders ===");
var orderTotal = 420;
var freeShippingThreshold = 500;
var qualifiesForFreeShipping = orderTotal >= freeShippingThreshold;

console.log("Order total:", orderTotal);
console.log("Free shipping threshold:", freeShippingThreshold);
console.log("Qualifies for free shipping:", qualifiesForFreeShipping);

console.log("\n=== Example 10: Combining several operators ===");
var cartTotal = 1000;
var discountCodeApplied = true;
var isMember = true;
var finalCheckoutAmount = cartTotal - (discountCodeApplied ? 100 : 0);

if (isMember && finalCheckoutAmount > 800) {
  finalCheckoutAmount = finalCheckoutAmount - 50;
}

console.log("Cart total:", cartTotal);
console.log("Discount code applied:", discountCodeApplied);
console.log("Is member:", isMember);
console.log("Final checkout amount:", finalCheckoutAmount);

console.log("\n=== Summary ===");
console.log("Operators and expressions turn raw data into decisions and calculations.");
console.log("They are essential for pricing, authentication, dashboards, and business logic.");
