// توابع سازنده و اصول OOP در ES5
// این درس برای ساخت اشیا با الگوی ساختارمند و قابل استفاده مناسب است.

function Account(owner, balance) {
  this.owner = owner;
  this.balance = balance;
}

Account.prototype.deposit = function (amount) {
  this.balance = this.balance + amount;
  return this.balance;
};

Account.prototype.withdraw = function (amount) {
  if (amount <= this.balance) {
    this.balance = this.balance - amount;
    return this.balance;
  }

  return "Insufficient balance";
};

var accountOne = new Account("Umar", 500);
var accountTwo = new Account("Fatimah", 300);

console.log("=== Example 1: Create accounts ===");
console.log(accountOne);
console.log(accountTwo);

console.log("\n=== Example 2: Deposit money ===");
console.log(accountOne.deposit(150));

console.log("\n=== Example 3: Withdraw money ===");
console.log(accountOne.withdraw(100));
console.log(accountOne.withdraw(800));

console.log("\n=== Summary ===");
console.log("Constructor functions help us create structured objects.");
