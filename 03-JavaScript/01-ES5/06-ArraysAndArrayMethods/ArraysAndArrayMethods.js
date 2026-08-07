// آرایه‌ها و متدهای آرایه
// این درس برای کار با مجموعه داده‌های مرتبط در برنامه‌های واقعی بسیار مهم است.

var students = [
  { id: 1, name: "Muhammad", score: 92, passed: true },
  { id: 2, name: "Aisha", score: 81, passed: true },
  { id: 3, name: "Ali", score: 67, passed: false },
  { id: 4, name: "Khadijah", score: 88, passed: true }
];

console.log("=== Example 1: Array of student records ===");
console.log(students);

console.log("\n=== Example 2: Access array items ===");
console.log("First student:", students[0]);
console.log("Last student:", students[students.length - 1]);

console.log("\n=== Example 3: Add a new student ===");
students.push({ id: 5, name: "Husayn", score: 95, passed: true });
console.log("Updated students:", students);

console.log("\n=== Example 4: Remove the last student ===");
students.pop();
console.log("After removing the last element:", students);

console.log("\n=== Example 5: Find passed students ===");
var passedStudents = [];
for (var i = 0; i < students.length; i++) {
  if (students[i].passed) {
    passedStudents.push(students[i].name);
  }
}
console.log("Passed students:", passedStudents);

console.log("\n=== Example 6: Calculate average score ===");
var totalScore = 0;
for (var j = 0; j < students.length; j++) {
  totalScore = totalScore + students[j].score;
}
var averageScore = totalScore / students.length;
console.log("Average score:", averageScore);

console.log("\n=== Example 7: Sort students by score ===");
var sortedStudents = students.slice();
sortedStudents.sort(function (a, b) {
  return a.score - b.score;
});
console.log("Sorted students:", sortedStudents);

console.log("\n=== Example 8: Filter students by passing status ===");
var failedStudents = [];
for (var k = 0; k < students.length; k++) {
  if (!students[k].passed) {
    failedStudents.push(students[k].name);
  }
}
console.log("Failed students:", failedStudents);

console.log("\n=== Summary ===");
console.log("Arrays are essential for managing lists of related data in applications.");
