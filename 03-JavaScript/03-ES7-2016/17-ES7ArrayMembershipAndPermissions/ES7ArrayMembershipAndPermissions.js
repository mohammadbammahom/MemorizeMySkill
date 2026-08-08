// این درس روی Array.includes و کاربردهای واقعی آن در نقش‌ها و مجوزها تمرکز دارد.
// بررسی عضویت در آرایه در سیستم‌های دسترسی و فیلترها بسیار رایج است.

const allowedAdmins = ["Muhammad", "Ali", "Umar", "Hamza"];
console.log("Admin access:", allowedAdmins.includes("Ali"));
console.log("Admin access:", allowedAdmins.includes("AbdullahBinAbbas"));

const productCategories = ["Laptop", "Phone", "Tablet", "Monitor"];
console.log("Category available:", productCategories.includes("Phone"));
console.log("Category available:", productCategories.includes("Router"));

const availableActions = ["read", "write", "delete", "update"];
console.log("Action allowed:", availableActions.includes("write"));
console.log("Action allowed:", availableActions.includes("export"));

const activeUsers = ["AbuBakr", "Uthman", "Khadijah", "Bilal"];
console.log("User active:", activeUsers.includes("Bilal"));
console.log("User active:", activeUsers.includes("Salman"));

const searchFilters = ["sale", "new", "popular", "featured"];
console.log("Filter active:", searchFilters.includes("new"));
console.log("Filter active:", searchFilters.includes("trend"));

const roles = ["admin", "editor", "viewer"];
console.log("Role check:", roles.includes("editor"));
console.log("Role check:", roles.includes("support"));

const applicantList = [101, 105, 110, 120];
console.log("Applicant found:", applicantList.includes(110));
console.log("Applicant found:", applicantList.includes(115));

const featureFlags = ["search", "checkout", "wishlist", "comments"];
console.log("Feature available:", featureFlags.includes("checkout"));
console.log("Feature available:", featureFlags.includes("reports"));

const indexValue = activeUsers.indexOf("Uthman");
console.log("IndexOf value:", indexValue);
console.log("Includes value:", activeUsers.includes("Uthman"));

// includes برای بررسی مقدار دقیق بسیار خواناست، اما indexOf برای موقعیت index مناسب‌تر است.
const userPermissions = ["read", "write"];
console.log("Permission granted:", userPermissions.includes("read"));
