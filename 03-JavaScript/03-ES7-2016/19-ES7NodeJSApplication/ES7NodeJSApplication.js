// این برنامه کاربردی Node.js از ES7 برای مدیریت داده‌ها و مجوزها استفاده می‌کند.
// سناریو: بررسی کاربران، مجوزها، امتیازها و گزارش‌های ساده.

const userRecords = [
  { name: "Muhammad", score: 94, role: "admin", permissions: ["read", "write", "delete"] },
  { name: "Ali", score: 86, role: "editor", permissions: ["read", "write"] },
  { name: "Bilal", score: 79, role: "viewer", permissions: ["read"] },
  { name: "Aisha", score: 88, role: "admin", permissions: ["read", "write", "update"] },
  { name: "Hamza", score: 67, role: "viewer", permissions: ["read"] },
  { name: "Usamah", score: 90, role: "editor", permissions: ["read", "write", "update"] }
];

function getUsersByRole(data, role) {
  return data.filter((user) => user.role === role).map((user) => user.name);
}

function getUsersByScore(data, minimumScore) {
  return data.filter((user) => user.score >= minimumScore).map((user) => user.name);
}

function getAccessStatus(user, action) {
  return user.permissions.includes(action) ? "allowed" : "denied";
}

function calculateGrowth(initialAmount, rate, years) {
  return initialAmount * (rate ** years);
}

const administrators = getUsersByRole(userRecords, "admin");
console.log("Administrators:", administrators);

const qualifiedUsers = getUsersByScore(userRecords, 85);
console.log("Qualified users:", qualifiedUsers);

for (const user of userRecords) {
  console.log(user.name + " write access:", getAccessStatus(user, "write"));
}

const selectedUsers = userRecords.map((user) => ({
  name: user.name,
  score: user.score,
  weightedScore: user.score ** 2,
  canDelete: getAccessStatus(user, "delete") === "allowed"
}));
console.log("Selected users:", selectedUsers);

const activeProducts = ["Laptop", "Phone", "Tablet", "Monitor"];
console.log("Tablet available:", activeProducts.includes("Tablet"));
console.log("Monitor available:", activeProducts.includes("Camera"));

const capital = 4000;
const expectedCapital = calculateGrowth(capital, 1.15, 3);
console.log("Expected capital:", expectedCapital.toFixed(2));

let totalScore = 2;
totalScore **= 6;
console.log("Total score:", totalScore);

console.log("Node.js ES7 application completed successfully.");
