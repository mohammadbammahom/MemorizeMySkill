// کلاس‌ها در ES6
// این درس نشان می‌دهد چگونه با کلاس‌ها اشیا و رفتار آنها را تعریف کنیم.

class Account {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return "Insufficient funds";
    }
    this.balance -= amount;
    return this.balance;
  }
}

console.log("=== Example 1: create class instance ===");
const account = new Account("Aisha", 400);
console.log(account);

console.log("\n=== Example 2: use class methods ===");
console.log("Deposit:", account.deposit(100));
console.log("Withdraw:", account.withdraw(200));
console.log("Withdraw too much:", account.withdraw(500));

class User {
  constructor(name, role = "member") {
    this.name = name;
    this.role = role;
  }

  getInfo() {
    return `${this.name} is ${this.role}`;
  }
}

console.log("\n=== Example 3: default parameter in class ===");
const user = new User("Umar");
console.log(user.getInfo());

console.log("\n=== Summary ===");
console.log("Classes offer a modern syntax for object-oriented JavaScript.");