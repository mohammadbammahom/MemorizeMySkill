// اشیای پیشرفته ES6
// این درس نشان می‌دهد چگونه با shorthand property و method بتوانیم اشیا را کوتاه‌تر بنویسیم.

const name = "Salman";
const role = "developer";

const user = {
  name,
  role,
  active: true,
  greet() {
    return `Hello, ${this.name}`;
  }
};

console.log("=== Example 1: shorthand properties ===");
console.log(user);
console.log("\n=== Example 2: shorthand method ===");
console.log(user.greet());

const dynamicKey = "status";
const profile = {
  [dynamicKey]: "online",
  ["get" + "Info"]() {
    return `${this.name} is ${this.status}`;
  },
  name: "AbdullahBinAbbas"
};

console.log("\n=== Example 3: computed property names ===");
console.log(profile.getInfo());

console.log("\n=== Summary ===");
console.log("Enhanced object literals reduce boilerplate in object definitions.");