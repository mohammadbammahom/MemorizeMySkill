// متغیرهای قابل تغییر و ثابت در ES6
// این درس نشان می‌دهد چطور از let و const برای نوشتن کد تمیزتر استفاده کنیم.

const maxStudents = 30;
let currentStudents = 18;

console.log("=== Example 1: const and let ===");
console.log("Max students:", maxStudents);
console.log("Current students:", currentStudents);

currentStudents = currentStudents + 2;
console.log("Updated current students:", currentStudents);

const student = {
  name: "Muhammad",
  course: "JavaScript"
};

console.log("\n=== Example 2: mutate const object ===");
student.course = "ES6";
console.log(student);

let message = "Welcome to the course";
console.log("\n=== Example 3: block scope ===");
if (currentStudents < maxStudents) {
  let availableSeats = maxStudents - currentStudents;
  console.log("Available seats:", availableSeats);
}

console.log("\n=== Summary ===");
console.log("Use const for values that should not change and let for variables that do.");