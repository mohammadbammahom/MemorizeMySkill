// این درس به استخراج مقدارهای یک object و تحلیل داده‌ها با Object.values می‌پردازد
// این روش در Node.js و Front-End برای پردازش داده‌های ساختارمند بسیار کاربردی است

const salesByUser = {
  Muhammad: 2200,
  Ali: 3100,
  Bilal: 1800,
  Aisha: 2600,
  Hamza: 1450,
  Usamah: 1950
};

const values = Object.values(salesByUser);
console.log("Sales values:", values);

const totalSales = values.reduce((sum, value) => sum + value, 0);
console.log("Total sales:", totalSales);

const highSales = values.filter((value) => value >= 2000);
console.log("High sales:", highSales);

const averageSales = totalSales / values.length;
console.log("Average sales:", averageSales.toFixed(2));

const topCustomers = Object.entries(salesByUser)
  .filter(([, amount]) => amount >= 2500)
  .map(([name]) => name);

console.log("Top customers:", topCustomers);

const valuableUsers = Object.values(salesByUser)
  .map((amount) => ({ amount, isStrong: amount >= 2000 }))
  .filter((entry) => entry.isStrong);

console.log("Valuable users:", valuableUsers);

const target = 3000;
const activeUsers = Object.entries(salesByUser)
  .filter(([, amount]) => amount > target)
  .map(([name]) => name);

console.log("Users above target:", activeUsers);
