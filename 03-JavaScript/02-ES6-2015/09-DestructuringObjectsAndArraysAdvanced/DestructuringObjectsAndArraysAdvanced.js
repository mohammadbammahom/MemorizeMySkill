// انتزاع پیشرفته اشیا و آرایه‌ها
// این درس روی destructuring پیشرفته برای استخراج مقادیر پیچیده تمرکز دارد.

const response = {
  data: {
    user: {
      name: "Aisha",
      email: "aisha@example.com"
    },
    roles: ["admin", "editor"]
  },
  status: 200
};

const {
  data: {
    user: { name: userName, email },
    roles: [firstRole, secondRole]
  },
  status
} = response;

console.log("=== Example 1: nested object destructuring ===");
console.log("Name:", userName);
console.log("Email:", email);
console.log("Status:", status);
console.log("Roles:", firstRole, secondRole);

const point = [100, 200, 300, 400];
const [x, , z, ...restPoints] = point;
console.log("\n=== Example 2: skip values and rest in array ===");
console.log("x:", x);
console.log("z:", z);
console.log("rest:", restPoints);

const settings = {
  theme: "dark",
  layout: "list",
  notifications: {
    email: true,
    sms: false
  }
};

const {
  notifications: { email: emailNotification }
} = settings;
console.log("\n=== Example 3: rename extracted property ===");
console.log("Email notification:", emailNotification);

console.log("\n=== Summary ===");
console.log("Advanced destructuring simplifies working with nested data.");