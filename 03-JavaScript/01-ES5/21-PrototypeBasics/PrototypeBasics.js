// اصول prototype
// در JavaScript ES5، اشیا از طریق prototype با یکدیگر ارتباط دارند.

function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

Student.prototype.getSummary = function () {
  return this.name + " has grade " + this.grade;
};

Student.prototype.isPassed = function () {
  return this.grade >= 10;
};

var studentOne = new Student("Muhammad", 14);
var studentTwo = new Student("Aisha", 8);

console.log("=== Example 1: Prototype methods ===");
console.log(studentOne.getSummary());
console.log(studentTwo.getSummary());

console.log("\n=== Example 2: Prototype-based check ===");
console.log(studentOne.isPassed());
console.log(studentTwo.isPassed());

function Teacher(name, subject) {
  this.name = name;
  this.subject = subject;
}

Teacher.prototype.getInfo = function () {
  return this.name + " teaches " + this.subject;
};

var teacher = new Teacher("AbuBakr", "Math");
console.log("\n=== Example 3: Another prototype object ===");
console.log(teacher.getInfo());

console.log("\n=== Summary ===");
console.log("Prototypes let us share behavior between objects.");
