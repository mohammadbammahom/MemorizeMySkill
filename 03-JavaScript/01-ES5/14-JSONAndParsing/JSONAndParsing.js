// JSON و پارس کردن
// این مفاهیم برای کار با APIها و داده‌های پیکربندی ضروری هستند.

var userData = {
  name: "Muhammad",
  email: "muhammad@example.com",
  roles: ["student", "member"],
  active: true
};

var jsonString = JSON.stringify(userData);
console.log("=== Example 1: Convert object to JSON ===");
console.log(jsonString);

console.log("\n=== Example 2: Parse JSON back to an object ===");
var parsedData = JSON.parse(jsonString);
console.log(parsedData);

console.log("\n=== Example 3: Work with a product payload ===");
var productPayload = '{"name":"Book","price":25,"category":"Education"}';
var product = JSON.parse(productPayload);
console.log("Product name:", product.name);
console.log("Product price:", product.price);

console.log("\n=== Example 4: Handle invalid JSON ===");
try {
  JSON.parse('{"name": "Ali"');
} catch (error) {
  console.log("Parse error:", error.message);
}

console.log("\n=== Summary ===");
console.log("JSON is widely used for APIs, storage, and configuration data.");
