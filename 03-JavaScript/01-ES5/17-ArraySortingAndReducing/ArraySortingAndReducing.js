// مرتب‌سازی و کاهش آرایه‌ها
// این درس به ما کمک می‌کند داده‌ها را از نظر منطقی دسته‌بندی و خلاصه کنیم.

var orders = [
  { id: 1, customer: "Muhammad", total: 120 },
  { id: 2, customer: "Aisha", total: 90 },
  { id: 3, customer: "Ali", total: 220 },
  { id: 4, customer: "Khadijah", total: 150 }
];

console.log("=== Example 1: Sort orders by total ===");
var sortedOrders = orders.slice();
sortedOrders.sort(function (a, b) {
  return a.total - b.total;
});
console.log(sortedOrders);

console.log("\n=== Example 2: Reduce array to a single total ===");
var totalRevenue = 0;
for (var i = 0; i < orders.length; i++) {
  totalRevenue = totalRevenue + orders[i].total;
}
console.log("Total revenue:", totalRevenue);

console.log("\n=== Example 3: Find highest order ===");
var highestOrder = orders[0];
for (var j = 1; j < orders.length; j++) {
  if (orders[j].total > highestOrder.total) {
    highestOrder = orders[j];
  }
}
console.log("Highest order:", highestOrder);

console.log("\n=== Example 4: Create a summary list ===");
var summaryList = [];
for (var k = 0; k < orders.length; k++) {
  summaryList.push(orders[k].customer + " -> " + orders[k].total);
}
console.log(summaryList);

console.log("\n=== Summary ===");
console.log("Sorting and reducing help us understand and summarize data effectively.");
