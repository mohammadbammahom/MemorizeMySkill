// این درس یک سناریوی واقعی پردازش داده در Node.js را نشان می‌دهد.
// در این مثال، داده‌های کاربران و محصولات با ES7 پردازش می‌شوند.

const users = [
  { name: "Muhammad", score: 90, role: "admin" },
  { name: "Ali", score: 75, role: "editor" },
  { name: "Bilal", score: 82, role: "viewer" },
  { name: "Aisha", score: 88, role: "admin" },
  { name: "Hamza", score: 60, role: "viewer" }
];

const adminUsers = users.filter((user) => user.role === "admin");
console.log("Admin users:", adminUsers.map((user) => user.name));

const scores = users.map((user) => user.score ** 2);
console.log("Squared scores:", scores);

const topUsers = users.filter((user) => user.score >= 80).map((user) => user.name);
console.log("Top users:", topUsers);

const allowedUsers = ["Muhammad", "Ali", "Aisha", "Hamza"];
const activeUsers = users.filter((user) => allowedUsers.includes(user.name));
console.log("Active users:", activeUsers.map((user) => user.name));

const totalScore = users.reduce((sum, user) => sum + user.score, 0);
console.log("Total score:", totalScore);

const report = users.map((user) => ({
  name: user.name,
  score: user.score,
  weightedScore: user.score ** 2,
  canAccess: allowedUsers.includes(user.name)
}));
console.log("User report:", report);

const productList = ["Laptop", "Tablet", "Phone", "Monitor"];
console.log("Has Tablet:", productList.includes("Tablet"));
console.log("Has Router:", productList.includes("Router"));

const growthFactor = 1.12;
const initialBudget = 1000;
const finalBudget = initialBudget * (growthFactor ** 3);
console.log("Final budget:", finalBudget.toFixed(2));

const dataset = [10, 20, 30, 40];
const scaledDataset = dataset.map((item) => item ** 3);
console.log("Scaled dataset:", scaledDataset);
