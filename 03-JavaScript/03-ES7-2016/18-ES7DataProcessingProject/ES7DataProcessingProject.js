// این پروژه کوچک اما واقعی، پردازش داده‌های کاربران و محصولات با ES7 را نشان می‌دهد.
// هدف این است که داده‌ها فیلتر، محاسبه و گروه‌بندی شوند.

const users = [
  { name: "Muhammad", score: 95, role: "admin", permissions: ["read", "write", "delete"] },
  { name: "Ali", score: 76, role: "editor", permissions: ["read", "write"] },
  { name: "Bilal", score: 82, role: "viewer", permissions: ["read"] },
  { name: "Aisha", score: 90, role: "admin", permissions: ["read", "write", "update"] },
  { name: "Hamza", score: 71, role: "viewer", permissions: ["read"] }
];

function getHighScoreUsers(data) {
  return data.filter((user) => user.score >= 80).map((user) => user.name);
}

function getAdmins(data) {
  return data.filter((user) => user.role === "admin").map((user) => user.name);
}

function calculateGrowth(initialAmount, rate, years) {
  return initialAmount * (rate ** years);
}

function hasAccess(userPermissions, permission) {
  return userPermissions.includes(permission);
}

const highScoreUsers = getHighScoreUsers(users);
console.log("High score users:", highScoreUsers);

const adminUsers = getAdmins(users);
console.log("Admin users:", adminUsers);

const capitalization = calculateGrowth(1500, 1.1, 3);
console.log("Capitalization:", capitalization.toFixed(2));

for (const user of users) {
  console.log(user.name + " can delete:", hasAccess(user.permissions, "delete"));
}

const report = users.map((user) => ({
  name: user.name,
  score: user.score,
  squaredScore: user.score ** 2,
  hasReadAccess: hasAccess(user.permissions, "read")
}));
console.log("Report:", report);

const productCatalog = ["Laptop", "Phone", "Tablet", "Monitor"];
console.log("Tablet available:", productCatalog.includes("Tablet"));
console.log("Camera available:", productCatalog.includes("Camera"));

let growthValue = 3;
growthValue **= 3;
console.log("Growth value:", growthValue);
