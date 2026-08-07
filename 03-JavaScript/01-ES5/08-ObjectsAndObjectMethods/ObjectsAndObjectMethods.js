// آبجکت‌ها و متدهای آبجکت
// این درس برای مدل‌سازی داده‌های واقعی در برنامه‌های مدرن ضروری است.

var userProfile = {
  firstName: "Muhammad",
  lastName: "Ibn Abdullah",
  age: 30,
  city: "Riyadh",
  isActive: true,
  roles: ["student", "member"]
};

console.log("=== Example 1: Create a user object ===");
console.log(userProfile);

console.log("\n=== Example 2: Access object properties ===");
console.log("First name:", userProfile.firstName);
console.log("City:", userProfile.city);

console.log("\n=== Example 3: Add a new property ===");
userProfile.email = "muhammad@example.com";
console.log("Updated profile:", userProfile);

console.log("\n=== Example 4: Update an existing property ===");
userProfile.city = "Medina";
console.log("Updated city:", userProfile.city);

console.log("\n=== Example 5: Loop through object properties ===");
for (var key in userProfile) {
  console.log(key + ":", userProfile[key]);
}

console.log("\n=== Example 6: Check if a property exists ===");
console.log("Has email:", userProfile.hasOwnProperty("email"));
console.log("Has phone:", userProfile.hasOwnProperty("phone"));

console.log("\n=== Example 7: Build a product object ===");
var product = {
  name: "Book",
  price: 25,
  category: "Education"
};
console.log("Product:", product);

console.log("\n=== Summary ===");
console.log("Objects help us represent structured data in a readable and practical way.");
