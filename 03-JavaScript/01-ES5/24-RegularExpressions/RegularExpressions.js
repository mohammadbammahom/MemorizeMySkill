// Regular Expression
// این درس برای اعتبارسنجی داده‌ها و جست‌وجوی الگو در متن کاربرد دارد.

var email = "student@example.com";
var invalidEmail = "student@";
var phone = "09120001122";
var username = "ali_2024";

var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
var phonePattern = /^09\d{9}$/;
var usernamePattern = /^[a-z][a-z0-9_]{3,15}$/i;

console.log("=== Example 1: Validate email ===");
console.log(emailPattern.test(email));
console.log(emailPattern.test(invalidEmail));

console.log("\n=== Example 2: Validate phone ===");
console.log(phonePattern.test(phone));

console.log("\n=== Example 3: Validate username ===");
console.log(usernamePattern.test(username));

var message = "Visit us at example.com for updates";
var updatedMessage = message.replace(/example\.com/, "learnjs.com");
console.log("\n=== Example 4: Replace a pattern ===");
console.log(updatedMessage);

console.log("\n=== Summary ===");
console.log("Regular expressions help validate and search text efficiently.");
