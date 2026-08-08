// این درس به قالب‌بندی رشته‌ها با padStart و padEnd می‌پردازد
// این تکنیک برای شناسه‌ها، شماره فاکتور، جدول‌های ترمینال و گزارش‌های متنی کاربردی است

const invoiceId = "42";
const paddedStart = invoiceId.padStart(8, "0");
console.log("Invoice ID padded start:", paddedStart);

const invoiceNumber = "125";
const paddedEnd = invoiceNumber.padEnd(10, "-");
console.log("Invoice ID padded end:", paddedEnd);

const userCode = "7";
console.log("User code:", userCode.padStart(6, "0"));

const productCode = "A12";
console.log("Product code:", productCode.padEnd(8, "X"));

const reportRows = [
  { name: "Muhammad", amount: "1500" },
  { name: "Ali", amount: "900" },
  { name: "Bilal", amount: "2300" },
  { name: "Aisha", amount: "120" }
];

for (const row of reportRows) {
  const name = row.name.padEnd(12, ".");
  const amount = row.amount.padStart(8, "0");
  console.log(`${name} ${amount}`);
}

const domain = "app";
console.log("Domain padded:", domain.padEnd(12, "-") );

const userId = "15";
console.log("User ID:", userId.padStart(5, "0"));

const branchCode = "B";
console.log("Branch code:", branchCode.padEnd(6, "0"));

const tableLine = "OP-9";
console.log("Fixed table value:", tableLine.padStart(10, "0"));
