// این مثال برای ترکیب Object.values، Object.entries، Object.getOwnPropertyDescriptors و padStart/padEnd نوشته شده است
// این تکنیک‌ها برای گزارش‌گیری، بررسی object و قالب‌بندی خروجی‌های ترمینال کاربرد دارند

const userRecords = {
  Muhammad: { role: "admin", sales: 5200, status: "active" },
  Ali: { role: "editor", sales: 3400, status: "active" },
  Bilal: { role: "viewer", sales: 1900, status: "inactive" },
  Aisha: { role: "admin", sales: 4800, status: "active" }
};

const userValues = Object.values(userRecords);
console.log("User values:", userValues);

const userEntries = Object.entries(userRecords);
console.log("User entries:", userEntries);

const descriptors = Object.getOwnPropertyDescriptors(userRecords);
console.log("Descriptors:", descriptors);

const salesTotal = userValues.reduce((sum, user) => sum + user.sales, 0);
console.log("Sales total:", salesTotal);

const activeUsers = userEntries
  .filter(([, user]) => user.status === "active")
  .map(([name]) => name);

console.log("Active users:", activeUsers);

const invoiceNumber = "42";
console.log("Invoice number:", invoiceNumber.padStart(8, "0"));
console.log("Invoice number end:", invoiceNumber.padEnd(10, "-") );

const productId = "7";
console.log("Product ID:", productId.padStart(6, "0"));

const reportRows = [
  { name: "Muhammad", value: 1500 },
  { name: "Ali", value: 920 },
  { name: "Aisha", value: 2100 }
];

for (const row of reportRows) {
  const label = row.name.padEnd(12, ".");
  const value = String(row.value).padStart(8, "0");
  console.log(`${label} ${value}`);
}
