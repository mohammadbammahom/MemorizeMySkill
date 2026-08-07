// رشته‌ها و متدهای رشته
// این درس برای کار با متن، ورود کاربر، و داده‌های متنی در برنامه‌های واقعی ضروری است.

var fullName = "Muhammad ibn Abdullah";
var email = "muhammad@example.com";
var message = "Welcome to the learning platform";

console.log("=== Example 1: Basic string values ===");
console.log("Full name:", fullName);
console.log("Email:", email);
console.log("Message:", message);

console.log("\n=== Example 2: String length ===");
console.log("Length of full name:", fullName.length);

console.log("\n=== Example 3: Uppercase and lowercase ===");
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());

console.log("\n=== Example 4: Find a substring ===");
console.log("Contains ibn:", fullName.indexOf("ibn") !== -1);

console.log("\n=== Example 5: Replace text ===");
console.log("Replaced message:", message.replace("platform", "dashboard"));

console.log("\n=== Example 6: Split text into parts ===");
var words = message.split(" ");
console.log("Words:", words);

console.log("\n=== Example 7: Trim whitespace ===");
var userInput = "   Abdullah   ";
console.log("Trimmed input:", userInput.trim());

console.log("\n=== Example 8: Extract part of a string ===");
console.log("Email domain:", email.substring(email.indexOf("@") + 1));

console.log("\n=== Summary ===");
console.log("String methods help us process text in real applications.");
