// مدیریت خطا
// این درس به ما آموزش می‌دهد که چگونه در برنامه‌های واقعی با خطاها روبه‌رو شویم.

function processPayment(amount, paymentMethod) {
  if (amount <= 0) {
    throw new Error("Amount must be greater than zero.");
  }

  if (paymentMethod !== "card" && paymentMethod !== "cash") {
    throw new Error("Unsupported payment method.");
  }

  return "Payment processed successfully.";
}

console.log("=== Example 1: Successful payment ===");
try {
  console.log(processPayment(250, "card"));
} catch (error) {
  console.log("Error:", error.message);
}

console.log("\n=== Example 2: Invalid amount ===");
try {
  console.log(processPayment(0, "card"));
} catch (error) {
  console.log("Error:", error.message);
}

console.log("\n=== Example 3: Unsupported method ===");
try {
  console.log(processPayment(140, "wallet"));
} catch (error) {
  console.log("Error:", error.message);
}

console.log("\n=== Example 4: Custom validation ===");
function validateUser(user) {
  if (!user || !user.name || !user.email) {
    throw new Error("User information is incomplete.");
  }
  return "User information is valid.";
}

try {
  console.log(validateUser({ name: "AbuBakr", email: "abu@example.com" }));
} catch (error) {
  console.log("Error:", error.message);
}

console.log("\n=== Summary ===");
console.log("Error handling improves reliability and makes debugging easier.");
