// اسکوپ و کلوزرها
// این مفاهیم به ما کمک می‌کنند دید متغیرها را مدیریت کنیم و منطق را منظم نگه داریم.

function createOrderProcessor() {
  var taxRate = 0.08;

  function calculateTotal(amount) {
    return amount + (amount * taxRate);
  }

  return calculateTotal;
}

console.log("=== Example 1: Create a closure ===");
var processOrder = createOrderProcessor();
console.log("Order total:", processOrder(250));

console.log("\n=== Example 2: Function scope ===");
function buildProfile() {
  var profileName = "Muhammad";
  console.log("Profile name inside function:", profileName);
}

buildProfile();

console.log("\n=== Example 3: Global and local variables ===");
var globalMessage = "Welcome";
function showMessage() {
  var localMessage = "Hello";
  console.log("Global message:", globalMessage);
  console.log("Local message:", localMessage);
}
showMessage();

console.log("\n=== Example 4: Accessing an outer variable ===");
function createCounter() {
  var count = 0;
  return function () {
    count = count + 1;
    return count;
  };
}

var counter = createCounter();
console.log("Counter 1:", counter());
console.log("Counter 2:", counter());

console.log("\n=== Example 5: Private data with closures ===");
function createAccount() {
  var balance = 1000;

  return {
    deposit: function (amount) {
      balance = balance + amount;
      return balance;
    },
    getBalance: function () {
      return balance;
    }
  };
}

var account = createAccount();
console.log("Balance after deposit:", account.deposit(250));
console.log("Current balance:", account.getBalance());

console.log("\n=== Summary ===");
console.log("Scopes and closures are important for keeping data safe and organizing logic.");
