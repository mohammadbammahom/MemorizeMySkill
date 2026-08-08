// این درس به ترکیب الگوهای ریاضی و آرایه‌ای در ES7 می‌پردازد.
// این ترکیب در Front-End، Node.js و داده‌پردازی کاربرد عملی دارد.

const salaryPlan = [1200, 1400, 1600, 1800, 2000];
const growthFactor = 1.08;
const adjustedSalary = salaryPlan.map((value) => Number((value * growthFactor).toFixed(2)));
console.log("Adjusted salary:", adjustedSalary);

const salesData = [100, 150, 200, 250, 300];
const squareSales = salesData.map((value) => value ** 2);
console.log("Squared sales:", squareSales);

const inventory = [10, 20, 30, 40, 50];
const inventoryScale = inventory.map((value) => value ** 3);
console.log("Scaled inventory:", inventoryScale);

const users = ["Muhammad", "Ali", "Bilal", "Ammar", "Salman"];
const userCheck = users.includes("Ali");
console.log("User stored:", userCheck);

const totalProducts = [5, 6, 7, 8, 9];
const totalValue = totalProducts.reduce((sum, value) => sum + value ** 2, 0);
console.log("Total value:", totalValue);

const threshold = 100;
const filteredHighValue = salesData.filter((value) => value ** 2 > threshold);
console.log("High value sales:", filteredHighValue);

// در این بخش، الگوهای آرایه‌ای و ریاضی در یک کد هماهنگ ترکیب شده‌اند.
const orderValues = [11, 12, 13, 14, 15];
const orderGrowth = orderValues.map((value) => value ** 2 + 10);
console.log("Order growth:", orderGrowth);
