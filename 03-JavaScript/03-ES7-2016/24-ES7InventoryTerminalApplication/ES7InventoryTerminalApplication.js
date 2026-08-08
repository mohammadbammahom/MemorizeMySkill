// این برنامه ترمینال یک سیستم موجودی ساده اما عملی است.
// در این سناریو، محصولات، دسته‌ها، مجوزها و کاربران با داده‌های ES7 مدیریت می‌شوند.

const products = [
  { name: "Laptop", category: "electronics", price: 1200, quantity: 8, allowedUsers: ["Muhammad", "Ali", "Hamza"] },
  { name: "Phone", category: "electronics", price: 800, quantity: 12, allowedUsers: ["Muhammad", "Bilal", "Aisha"] },
  { name: "Book", category: "education", price: 50, quantity: 25, allowedUsers: ["Ali", "Aisha", "Usamah"] },
  { name: "Tablet", category: "electronics", price: 600, quantity: 10, allowedUsers: ["Muhammad", "Ali"] }
];

const roles = ["admin", "editor", "viewer"];
const activeUser = "Ali";

function hasAccess(userName, product) {
  return product.allowedUsers.includes(userName);
}

function calculateInventoryValue(productList) {
  return productList.reduce((sum, product) => sum + product.price * product.quantity, 0);
}

function calculateGrowth(value, years) {
  return value * (1.08 ** years);
}

for (const product of products) {
  console.log(product.name + " access:", hasAccess(activeUser, product));
  console.log(product.name + " total price:", (product.price * product.quantity).toFixed(2));
}

const inventoryValue = calculateInventoryValue(products);
console.log("Inventory value:", inventoryValue.toFixed(2));

const projectedValue = calculateGrowth(inventoryValue, 3);
console.log("Projected value:", projectedValue.toFixed(2));

const electronicsProducts = products.filter((product) => product.category === "electronics");
console.log("Electronics products:", electronicsProducts.map((product) => product.name));

console.log("Admin role available:", roles.includes("admin"));
console.log("Support role available:", roles.includes("support"));

let stockFactor = 3;
stockFactor **= 2;
console.log("Stock factor:", stockFactor);
