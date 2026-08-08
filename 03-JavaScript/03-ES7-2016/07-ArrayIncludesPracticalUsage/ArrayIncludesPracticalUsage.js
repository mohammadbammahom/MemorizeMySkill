// این درس نشان می‌دهد که Array.includes در سناریوهای واقعی برای بررسی دسترسی و عضویت داده‌ها کاربرد دارد.
// در سیستم‌های فروش، حساب‌ها و داده‌های کاربران، بررسی وجود یک مقدار در آرایه یک الگوی رایج است.

const allowedAdmins = ["Muhammad", "Umar", "Uthman", "Ali", "Hasan"];
console.log("Admin access:", allowedAdmins.includes("Ali"));
console.log("Admin access:", allowedAdmins.includes("AbdulRahman"));

const activeProducts = ["Laptop", "Tablet", "Monitor", "Keyboard"];
console.log("Product in stock:", activeProducts.includes("Tablet"));
console.log("Product in stock:", activeProducts.includes("Camera"));

const customerSupportQueue = ["Bilal", "Salman", "Ammar", "Muadh"];
console.log("Customer waiting:", customerSupportQueue.includes("Ammar"));

const supportedCountries = ["Iraq", "SaudiArabia", "UAE", "Qatar"];
console.log("Country supported:", supportedCountries.includes("Qatar"));

const featureFlags = ["search", "checkout", "recommendation", "wishlist"];
console.log("Feature enabled:", featureFlags.includes("checkout"));

const orderNumbers = [1001, 1005, 1008, 1020];
console.log("Order exists:", orderNumbers.includes(1008));
console.log("Order exists:", orderNumbers.includes(1010));

const productCategory = ["Books", "Electronics", "Stationery", "Accessories"];
console.log("Category found:", productCategory.includes("Electronics"));

// استفاده از includes به ما کمک می‌کند تا با یک خط، وجود عضویت را بررسی کنیم.
const auditLog = ["login", "logout", "createOrder", "updateProfile"];
console.log("Action logged:", auditLog.includes("updateProfile"));
