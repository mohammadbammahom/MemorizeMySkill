// عملگر rest در ES6
// این درس نشان می‌دهد چگونه بتوانیم تعداد نامشخصی پارامتر را در توابع مدیریت کنیم.

const sumAll = (...numbers) => {
  return numbers.reduce((total, number) => total + number, 0);
};

console.log("=== Example 1: sum with rest operator ===");
console.log(sumAll(10, 20, 30));
console.log(sumAll(5, 15, 25, 35));

const createUser = (name, ...roles) => {
  return {
    name,
    roles,
    status: roles.length > 0 ? "active" : "pending"
  };
};

console.log("\n=== Example 2: rest in function parameters ===");
console.log(createUser("Ali", "admin", "editor"));
console.log(createUser("Aisha"));

const joinStrings = (separator, ...parts) => parts.join(separator);
console.log("\n=== Example 3: rest for string parts ===");
console.log(joinStrings(" - ", "ES6", "modules", "practice"));

console.log("\n=== Summary ===");
console.log("Rest operator helps collect extra arguments into an array.");