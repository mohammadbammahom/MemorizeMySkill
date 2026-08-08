// این پروژه نهایی ES7 یک سیستم مدیریت ساده اما واقعی برای کاربران، مجوزها، محصولات و گزارش‌ها است.
// هدف این برنامه نشان دادن ترکیب ES7 با منطق JavaScript معمولی در یک سناریوی کاربردی است.

function calculateGrowth(initialValue, rate, years) {
  return initialValue * (rate ** years);
}

function hasAccess(userPermissions, permission) {
  return userPermissions.includes(permission);
}

function getUsersByRole(users, role) {
  return users.filter((user) => user.role === role);
}

function getTopProducts(products, minPrice) {
  return products.filter((product) => product.price >= minPrice);
}

const users = [
  { name: "Muhammad", role: "admin", permissions: ["read", "write", "delete", "update"] },
  { name: "Ali", role: "editor", permissions: ["read", "write", "update"] },
  { name: "Bilal", role: "viewer", permissions: ["read"] },
  { name: "Aisha", role: "admin", permissions: ["read", "write", "delete"] },
  { name: "Hamza", role: "editor", permissions: ["read", "write"] },
  { name: "Usamah", role: "viewer", permissions: ["read"] }
];

const products = [
  { name: "Laptop", category: "electronics", price: 1200, quantity: 8 },
  { name: "Phone", category: "electronics", price: 900, quantity: 12 },
  { name: "Book", category: "education", price: 50, quantity: 30 },
  { name: "Tablet", category: "electronics", price: 600, quantity: 10 },
  { name: "Notebook", category: "stationery", price: 25, quantity: 45 }
];

const adminUsers = getUsersByRole(users, "admin");
console.log("Admin users:", adminUsers.map((user) => user.name));

const premiumProducts = getTopProducts(products, 800);
console.log("Premium products:", premiumProducts.map((product) => product.name));

for (const user of users) {
  console.log(user.name + " delete access:", hasAccess(user.permissions, "delete"));
}

const productReport = products.map((product) => ({
  name: product.name,
  totalValue: product.price * product.quantity,
  squaredPrice: product.price ** 2,
  category: product.category
}));
console.log("Product report:", productReport);

const inventoryValue = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
console.log("Inventory value:", inventoryValue.toFixed(2));

const growthForecast = calculateGrowth(inventoryValue, 1.08, 3);
console.log("Growth forecast:", growthForecast.toFixed(2));

let scoreValue = 4;
scoreValue **= 3;
console.log("Score value:", scoreValue);

const validRoles = ["admin", "editor", "viewer"];
console.log("Editor role valid:", validRoles.includes("editor"));
console.log("Support role valid:", validRoles.includes("support"));

console.log("ES7 comprehensive project completed successfully.");
