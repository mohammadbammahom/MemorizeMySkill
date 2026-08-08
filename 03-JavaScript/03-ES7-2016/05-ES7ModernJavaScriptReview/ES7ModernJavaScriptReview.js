// مرور JavaScript مدرن ES7
// این درس شامل بررسی ویژگی‌های اصلی ES7 و نحوه استفاده کاربردی از آن‌ها در کد واقعی است.

console.log("=== ES7 feature 1: Exponentiation ===");
console.log(2 ** 3);
console.log(5 ** 2);

console.log("\n=== ES7 feature 2: Exponentiation assignment ===");
let total = 2;
total **= 3;
console.log(total);

console.log("\n=== ES7 feature 3: Array.includes ===");
const names = ["Ali", "Aisha", "Khadijah"];
console.log(names.includes("Aisha"));
console.log(names.includes("Fatimah"));

console.log("\n=== Understanding async execution context ===");
const library = {
  name: "Memorize",
  showName() {
    return this.name;
  }
};

const showLater = library.showName.bind(library);
setTimeout(function () {
  console.log(showLater());
}, 10);

console.log("\n=== Real-world use case ===");
const products = ["Laptop", "Phone", "Tablet"];
if (products.includes("Phone")) {
  console.log("Phone is available in the catalog.");
}

const power = 4;
const result = power ** 3;
console.log("Calculated result:", result);

console.log("\n=== Summary ===");
console.log("ES7 focused on a few practical improvements: exponentiation, array membership checks, and better understanding of async execution context.");
