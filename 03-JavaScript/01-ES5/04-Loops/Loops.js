// حلقه‌ها
// این درس به ما کمک می‌کند روی داده‌های زیادی به‌صورت خودکار کار کنیم.

var orders = [
  { id: 101, customer: "Muhammad", total: 120, paid: true },
  { id: 102, customer: "AbuBakr", total: 260, paid: false },
  { id: 103, customer: "Ali", total: 410, paid: true },
  { id: 104, customer: "Khadijah", total: 75, paid: false }
];

console.log("=== Example 1: For loop over orders ===");
for (var i = 0; i < orders.length; i++) {
  console.log("Order", orders[i].id, "for", orders[i].customer, "with total", orders[i].total);
}

console.log("\n=== Example 2: Count paid orders ===");
var paidOrderCount = 0;
for (var j = 0; j < orders.length; j++) {
  if (orders[j].paid) {
    paidOrderCount = paidOrderCount + 1;
  }
}
console.log("Paid orders:", paidOrderCount);

console.log("\n=== Example 3: While loop for retry attempts ===");
var retryCount = 0;
while (retryCount < 3) {
  console.log("Retry attempt", retryCount + 1);
  retryCount = retryCount + 1;
}

console.log("\n=== Example 4: Do while loop for payment check ===");
var paymentAttempts = 0;
do {
  paymentAttempts = paymentAttempts + 1;
  console.log("Payment attempt", paymentAttempts);
} while (paymentAttempts < 2);

console.log("\n=== Example 5: Sum order totals ===");
var totalSales = 0;
for (var k = 0; k < orders.length; k++) {
  totalSales = totalSales + orders[k].total;
}
console.log("Total sales:", totalSales);

console.log("\n=== Example 6: Loop through an object ===");
var userProfile = {
  name: "Muhammad",
  age: 30,
  isActive: true,
  city: "Riyadh"
};

for (var key in userProfile) {
  console.log(key + ":", userProfile[key]);
}

console.log("\n=== Summary ===");
console.log("Loops help automate repetitive work in real applications.");
