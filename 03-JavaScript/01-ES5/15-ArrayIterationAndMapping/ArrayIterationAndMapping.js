// پیمایش و نگاشت آرایه‌ها
// این درس به ما کمک می‌کند داده‌های آرایه را به‌صورت عملیاتی و قابل استفاده پردازش کنیم.

var students = [
  { id: 1, name: "Muhammad", score: 92, level: "advanced" },
  { id: 2, name: "Aisha", score: 81, level: "intermediate" },
  { id: 3, name: "Ali", score: 67, level: "beginner" },
  { id: 4, name: "Khadijah", score: 88, level: "advanced" }
];

console.log("=== Example 1: Iterate over array items ===");
for (var i = 0; i < students.length; i++) {
  console.log(students[i].name + " -> " + students[i].score);
}

console.log("\n=== Example 2: Collect names in a new array ===");
var names = [];
for (var j = 0; j < students.length; j++) {
  names.push(students[j].name);
}
console.log(names);

console.log("\n=== Example 3: Create a summary array ===");
var summaries = [];
for (var k = 0; k < students.length; k++) {
  summaries.push(students[k].name + " has score " + students[k].score);
}
console.log(summaries);

console.log("\n=== Example 4: Find students who passed ===");
var passedStudents = [];
for (var m = 0; m < students.length; m++) {
  if (students[m].score >= 70) {
    passedStudents.push(students[m].name);
  }
}
console.log(passedStudents);

console.log("\n=== Example 5: Build a score map ===");
var scoreMap = {};
for (var n = 0; n < students.length; n++) {
  scoreMap[students[n].name] = students[n].score;
}
console.log(scoreMap);

console.log("\n=== Summary ===");
console.log("Array iteration and mapping help us transform and analyze data efficiently.");
