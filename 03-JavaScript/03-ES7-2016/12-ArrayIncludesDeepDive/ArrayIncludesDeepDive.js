// این درس عمق کاربردی Array.includes را در سناریوهای واقعی نشان می‌دهد.
// این تکنیک برای بررسی عضویت در آرایه‌ها در برنامه‌های واقعی بسیار رایج است.

const students = ["Muhammad", "Ali", "Hafsa", "Bilal", "Ammar"];
console.log("Student found:", students.includes("Ali"));
console.log("Student found:", students.includes("Khadijah"));

const roles = ["admin", "editor", "viewer", "owner"];
console.log("Role allowed:", roles.includes("editor"));
console.log("Role allowed:", roles.includes("support"));

const productCatalog = ["Laptop", "Phone", "Tablet", "Monitor"];
console.log("Product available:", productCatalog.includes("Phone"));
console.log("Product available:", productCatalog.includes("Camera"));

const invoiceNumbers = [1001, 1005, 1010, 1020];
console.log("Invoice exists:", invoiceNumbers.includes(1010));
console.log("Invoice exists:", invoiceNumbers.includes(1009));

const permissions = ["read", "write", "delete"];
const userPermission = "write";
console.log("Permission granted:", permissions.includes(userPermission));

const searchTerms = ["sale", "offer", "discount", "bundle"];
console.log("Search active:", searchTerms.includes("discount"));

const users = ["Umar", "Usamah", "AbuBakr", "ZaydBinThabit"];
console.log("User found:", users.includes("Umar"));

const numbers = [5, 10, 15, 20, 25];
console.log("Number found:", numbers.includes(20));
console.log("Number found:", numbers.includes(18));

const statusList = ["active", "inactive", "pending", "archived"];
console.log("Status check:", statusList.includes("pending"));

// includes به‌خاطر خوانایی بالا، در بررسی‌های عضویت بسیار محبوب است.
const adminUsers = ["Muhammad", "Ali", "Hamza"];
console.log("Admin check:", adminUsers.includes("Hamza"));
console.log("Admin check:", adminUsers.includes("AbdullahBinUmar"));
