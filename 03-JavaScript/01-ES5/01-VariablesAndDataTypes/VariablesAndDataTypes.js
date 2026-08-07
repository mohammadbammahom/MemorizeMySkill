// متغیرها و انواع داده در JavaScript
// این درس پایه‌ای‌ترین ابزار برای مدیریت داده در برنامه‌هاست.
// در ES5، از var استفاده می‌کنیم تا با سبک کلاسیک JavaScript کار کنیم.

var userName = "Muhammad";
var age = 28;
var isActive = true;
var accountBalance = 1250.75;
var favoriteLanguages = ["JavaScript", "Python", "C#"];
var userProfile = {
  name: userName,
  age: age,
  isActive: isActive,
  favoriteLanguages: favoriteLanguages
};

console.log("=== Example 1: User Information ===");
console.log("User Name:", userName);
console.log("Age:", age);
console.log("Active Status:", isActive);
console.log("Account Balance:", accountBalance);

console.log("\n=== Example 2: Create a User Profile ===");
console.log("User Profile:", userProfile);

function getUserSummary(user, balance) {
  return "User " + user.name + " is " + user.age + " years old and has " + balance + " dollars";
}

console.log("\n=== Example 3: User Summary ===");
console.log(getUserSummary(userProfile, accountBalance));

console.log("\n=== Example 4: Check Data Types ===");
console.log("Type of userName:", typeof userName);
console.log("Type of age:", typeof age);
console.log("Type of isActive:", typeof isActive);
console.log("Type of favoriteLanguages:", typeof favoriteLanguages);
console.log("Type of userProfile:", typeof userProfile);

console.log("\n=== Example 5: Empty Values ===");
var emptyValue;
var emptyString = "";
var nullValue = null;

console.log("emptyValue:", emptyValue);
console.log("typeof emptyValue:", typeof emptyValue);
console.log("emptyString:", emptyString);
console.log("typeof emptyString:", typeof emptyString);
console.log("nullValue:", nullValue);
console.log("typeof nullValue:", typeof nullValue);

console.log("\n=== Example 6: Calculate an Order Total ===");
var price = 120;
var quantity = 3;
var totalPrice = price * quantity;

console.log("Unit Price:", price);
console.log("Quantity:", quantity);
console.log("Total Price:", totalPrice);

console.log("\n=== Example 7: Boolean Logic ===");
var hasDiscount = true;
var shippingCost = hasDiscount ? 10 : 20;

console.log("Has Discount:", hasDiscount);
console.log("Shipping Cost:", shippingCost);

console.log("\n=== Example 8: Working with Real Data Arrays ===");
var orders = [
  { id: 101, total: 300, paid: true },
  { id: 102, total: 450, paid: false },
  { id: 103, total: 600, paid: true }
];

var completedOrders = 0;
for (var i = 0; i < orders.length; i++) {
  if (orders[i].paid) {
    completedOrders = completedOrders + 1;
  }
}

console.log("Completed Orders:", completedOrders);

console.log("\n=== Example 9: Convert Data ===");
var numericString = "42";
var numericValue = Number(numericString);

console.log("Numeric String:", numericString);
console.log("Converted Number:", numericValue);
console.log("Type After Conversion:", typeof numericValue);

console.log("\n=== Summary ===");
console.log("Variables, data types, and type checking are the foundation of many real applications.");
console.log("They appear in front-end, React, and Node.js projects every day.");
