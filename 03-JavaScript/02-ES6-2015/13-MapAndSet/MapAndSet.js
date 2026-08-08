// Map و Set در ES6
// این درس نشان می‌دهد چگونه از ساختارهای داده جدید استفاده کنیم.

const studentScores = new Map();
studentScores.set("Ali", 90);
studentScores.set("Aisha", 85);
studentScores.set("Khadijah", 92);

console.log("=== Example 1: Map store and retrieve ===");
console.log("Ali score:", studentScores.get("Ali"));
console.log("Map size:", studentScores.size);

const subjects = new Set(["Math", "Science", "Math", "History"]);
console.log("\n=== Example 2: Set removes duplicates ===");
console.log(subjects);
console.log("Has Science:", subjects.has("Science"));

const combined = [...subjects, "Physics"];
console.log("\n=== Example 3: convert Set to array with spread ===");
console.log(combined);

for (const [name, score] of studentScores) {
  console.log("Student:", name, "Score:", score);
}

console.log("\n=== Summary ===");
console.log("Map and Set provide efficient data storage for unique values and keyed collections.");