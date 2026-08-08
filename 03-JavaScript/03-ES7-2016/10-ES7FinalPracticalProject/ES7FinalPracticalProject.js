// این پروژه نهایی ES7 نشان می‌دهد چگونه می‌توان یک سناریوی واقعی با توان‌گیری، includes و پردازش داده‌ها ساخت.
// این پروژه برای Node.js و آماده‌سازی Front-End به‌صورت عملی بسیار مناسب است.

const customers = [
  { id: 1, name: "Muhammad", role: "admin", balance: 5000 },
  { id: 2, name: "Ali", role: "user", balance: 2400 },
  { id: 3, name: "Bilal", role: "editor", balance: 3100 },
  { id: 4, name: "Aisha", role: "user", balance: 4800 },
  { id: 5, name: "Hamza", role: "admin", balance: 6700 }
];

const adminNames = ["Muhammad", "Umar", "Uthman", "Ali", "Hamza"];
const activeCustomers = customers.filter((customer) => adminNames.includes(customer.name));
console.log("Active admin customers:", activeCustomers);

const highBalanceCustomers = customers.filter((customer) => customer.balance > 3000);
console.log("High balance customers:", highBalanceCustomers);

const balanceGrowth = highBalanceCustomers.map((customer) => ({
  name: customer.name,
  projectedBalance: customer.balance * (1.08 ** 2)
}));
console.log("Projected balance growth:", balanceGrowth);

const inventory = [120, 140, 160, 180, 200];
const scaledInventory = inventory.map((item) => item ** 2);
console.log("Scaled inventory:", scaledInventory);

const discountCodes = ["WELCOME10", "SAVE20", "VIP50", "NEWUSER"];
console.log("Discount code available:", discountCodes.includes("SAVE20"));
console.log("Discount code available:", discountCodes.includes("SPECIAL30"));

const paidCustomers = customers.filter((customer) => customer.balance >= 3000);
const totalBudget = paidCustomers.reduce((sum, customer) => sum + customer.balance, 0);
console.log("Total budget:", totalBudget);

const reports = [
  { title: "Sales", value: 50 },
  { title: "Marketing", value: 90 },
  { title: "Operations", value: 120 }
];

const reportSummary = reports.map((report) => ({
  title: report.title,
  valuePower: report.value ** 2
}));
console.log("Report summary:", reportSummary);

console.log("Project status: ES7 practical project completed successfully.");
