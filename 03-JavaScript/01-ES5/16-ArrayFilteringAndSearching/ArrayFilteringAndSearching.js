// فیلتر کردن و جست‌وجوی آرایه‌ها
// این درس برای پیدا کردن آیتم‌های خاص در داده‌های بزرگ بسیار مهم است.

var products = [
  { id: 1, name: "Book", category: "Education", price: 25, inStock: true },
  { id: 2, name: "Pen", category: "Office", price: 5, inStock: true },
  { id: 3, name: "Notebook", category: "Education", price: 12, inStock: false },
  { id: 4, name: "Bag", category: "Travel", price: 40, inStock: true }
];

console.log("=== Example 1: Find products in stock ===");
var availableProducts = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].inStock) {
    availableProducts.push(products[i].name);
  }
}
console.log(availableProducts);

console.log("\n=== Example 2: Find products by category ===");
var educationProducts = [];
for (var j = 0; j < products.length; j++) {
  if (products[j].category === "Education") {
    educationProducts.push(products[j].name);
  }
}
console.log(educationProducts);

console.log("\n=== Example 3: Find a product by name ===");
var searchName = "Pen";
var matchedProduct = null;
for (var k = 0; k < products.length; k++) {
  if (products[k].name === searchName) {
    matchedProduct = products[k];
    break;
  }
}
console.log(matchedProduct);

console.log("\n=== Example 4: Find products below a price ===");
var lowPriceProducts = [];
for (var m = 0; m < products.length; m++) {
  if (products[m].price < 20) {
    lowPriceProducts.push(products[m].name);
  }
}
console.log(lowPriceProducts);

console.log("\n=== Summary ===");
console.log("Filtering and searching help us locate relevant data quickly.");
