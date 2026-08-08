// این چالش نهایی ES7 یک برنامه ترمینال واقعی برای مدیریت کاربران و محصولات است.
// این نسخه مجموع همه مهارت‌های ES7 را در یک سناریوی عملی به کار می‌گیرد.

function calculateGrowth(initialAmount, rate, years) {
  return initialAmount * (rate ** years);
}

function hasAccess(userPermissions, targetPermission) {
  return userPermissions.includes(targetPermission);
}

function getQualifiedUsers(users, minimumScore) {
  return users.filter((user) => user.score >= minimumScore);
}

function getProductList(products, category) {
  return products.filter((product) => product.category === category);
}

const users = [
  { name: "Muhammad", score: 96, role: "admin", permissions: ["read", "write", "delete", "update"] },
  { name: "Ali", score: 88, role: "editor", permissions: ["read", "write", "update"] },
  { name: "Bilal", score: 72, role: "viewer", permissions: ["read"] },
  { name: "Aisha", score: 91, role: "admin", permissions: ["read", "write", "delete"] },
  { name: "Hamza", score: 81, role: "editor", permissions: ["read", "write"] },
  { name: "Usamah", score: 69, role: "viewer", permissions: ["read"] }
];

const products = [
  { name: "Laptop", category: "electronics", price: 1200 },
  { name: "Phone", category: "electronics", price: 800 },
  { name: "Book", category: "education", price: 50 },
  { name: "Tablet", category: "electronics", price: 600 },
  { name: "Notebook", category: "stationery", price: 25 }
];

const allowedActions = ["read", "write", "delete", "update", "view"];
console.log("Action allowed:", allowedActions.includes("delete"));
console.log("Action allowed:", allowedActions.includes("export"));

const qualifiedUsers = getQualifiedUsers(users, 85);
console.log("Qualified users:", qualifiedUsers.map((user) => user.name));

const electronicsProducts = getProductList(products, "electronics");
console.log("Electronics products:", electronicsProducts.map((product) => product.name));

for (const user of users) {
  console.log(user.name + " delete access:", hasAccess(user.permissions, "delete"));
}

const report = users.map((user) => ({
  name: user.name,
  score: user.score,
  squaredScore: user.score ** 2,
  canUpdate: hasAccess(user.permissions, "update")
}));
console.log("User report:", report);

const initialBudget = 2500;
const budgetGrowth = calculateGrowth(initialBudget, 1.12, 4);
console.log("Budget growth:", budgetGrowth.toFixed(2));

let challengeScore = 3;
challengeScore **= 4;
console.log("Challenge score:", challengeScore);

console.log("Final ES7 challenge completed successfully.");
