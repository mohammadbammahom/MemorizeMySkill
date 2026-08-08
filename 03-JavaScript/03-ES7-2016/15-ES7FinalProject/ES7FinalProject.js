// این پروژه نهایی ES7 یک برنامه ترمینال ساده اما واقعی برای مدیریت داده‌ها و مجوزها است.
// این برنامه از توان‌گیری، includes و پردازش آرایه‌ها برای شبیه‌سازی سناریوی واقعی استفاده می‌کند.

function calculateGrowth(initialAmount, rate, years) {
  return initialAmount * (rate ** years);
}

function hasPermission(userPermissions, permission) {
  return userPermissions.includes(permission);
}

function createPerformanceReport(users) {
  return users.map((user) => ({
    name: user.name,
    score: user.score,
    weightedScore: user.score ** 2,
    role: user.role,
    hasAccess: hasPermission(user.permissions, "read")
  }));
}

const accountOwners = [
  { name: "Muhammad", score: 92, role: "admin", permissions: ["read", "write", "delete"] },
  { name: "Ali", score: 85, role: "editor", permissions: ["read", "write"] },
  { name: "Bilal", score: 68, role: "viewer", permissions: ["read"] },
  { name: "Aisha", score: 94, role: "admin", permissions: ["read", "write", "delete", "update"] },
  { name: "Hamza", score: 77, role: "editor", permissions: ["read", "write"] }
];

const growthValue = calculateGrowth(1200, 1.1, 4);
console.log("Growth value:", growthValue.toFixed(2));

const permissions = ["read", "write", "delete", "update"];
console.log("Permission check:", hasPermission(permissions, "update"));
console.log("Permission check:", hasPermission(permissions, "export"));

const filteredUsers = accountOwners.filter((user) => user.score >= 80);
console.log("High score users:", filteredUsers.map((user) => user.name));

const report = createPerformanceReport(accountOwners);
console.log("Performance report:", report);

let projectScore = 2;
projectScore **= 4;
console.log("Project score:", projectScore);

const products = ["Laptop", "Monitor", "Phone", "Tablet"];
console.log("Tablet in catalog:", products.includes("Tablet"));
console.log("Camera in catalog:", products.includes("Camera"));

const totalUserScore = accountOwners.reduce((sum, user) => sum + user.score, 0);
console.log("Total user score:", totalUserScore);

console.log("ES7 final project completed successfully.");
