// این درس نشان می‌دهد که ES7 در پردازش داده‌های واقعی، به‌ویژه در Node.js و Front-End، چگونه کاربرد پیدا می‌کند.
// سناریو: پردازش سفارش‌ها، کاربران و محصولات.

const orders = [
  { id: 101, customer: "Muhammad", total: 150, status: "paid" },
  { id: 102, customer: "Ali", total: 220, status: "pending" },
  { id: 103, customer: "Bilal", total: 300, status: "paid" },
  { id: 104, customer: "Ammar", total: 80, status: "cancelled" }
];

const paidOrders = orders.filter((order) => order.status === "paid");
console.log("Paid orders:", paidOrders);

const customerNames = orders.map((order) => order.customer);
console.log("Customer names:", customerNames);

const highValueOrders = orders.filter((order) => order.total > 200).map((order) => order.id);
console.log("High value order IDs:", highValueOrders);

const validCustomers = ["Muhammad", "Ali", "Umar", "Aisha", "Hafsa"];
const eligibleOrders = orders.filter((order) => validCustomers.includes(order.customer));
console.log("Eligible orders:", eligibleOrders);

const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
console.log("Total revenue:", totalRevenue);

const revenuePower = orders.map((order) => order.total ** 2);
console.log("Squared revenue values:", revenuePower);

const statuses = ["paid", "pending", "paid", "cancelled"];
console.log("Status check:", statuses.includes("pending"));

// این بخش نشان می‌دهد که جمع‌آوری و تحلیل داده‌ها در ES7 به‌راحتی انجام می‌شود.
const activeUsers = ["Muhammad", "Ali", "Bilal", "Khadijah"];
const recentOrders = orders.filter((order) => activeUsers.includes(order.customer));
console.log("Recent active user orders:", recentOrders);
