// این پروژه نهایی ES8 داده‌ها را با async/await، Object.values، Object.entries و padStart/padEnd مدیریت می‌کند
// هدف این درس نشان دادن یک برنامه واقعی Node.js برای کاربران، مجوزها، محصولات و گزارش‌های مدیریتی است

function loadUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Muhammad: { role: "admin", sales: 5000, permissions: ["read", "write", "delete"] },
        Ali: { role: "editor", sales: 3200, permissions: ["read", "write"] },
        Bilal: { role: "viewer", sales: 2000, permissions: ["read"] },
        Aisha: { role: "admin", sales: 4100, permissions: ["read", "write", "update"] },
        Hamza: { role: "editor", sales: 2700, permissions: ["read", "write"] },
        Usamah: { role: "viewer", sales: 2400, permissions: ["read"] }
      });
    }, 180);
  });
}

function loadProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Laptop: { category: "electronics", price: 1200, quantity: 8 },
        Phone: { category: "electronics", price: 900, quantity: 12 },
        Book: { category: "education", price: 55, quantity: 25 },
        Tablet: { category: "electronics", price: 600, quantity: 6 }
      });
    }, 220);
  });
}

function loadOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        order101: { customer: "Muhammad", total: 1600 },
        order102: { customer: "Ali", total: 900 },
        order103: { customer: "Aisha", total: 2100 },
        order104: { customer: "Usamah", total: 1400 }
      });
    }, 160);
  });
}

function formatTableRow(label, value, width) {
  return `${label.padEnd(18, ".")} ${String(value).padStart(width, " ")}`;
}

function validateUser(userName, user) {
  return user && user.role && user.permissions && user.permissions.length > 0;
}

async function buildManagementReport() {
  const [users, products, orders] = await Promise.all([
    loadUsers(),
    loadProducts(),
    loadOrders()
  ]);

  const userValues = Object.values(users);
  const totalSales = userValues.reduce((sum, user) => sum + user.sales, 0);
  const averageSales = totalSales / userValues.length;

  const adminUsers = Object.entries(users)
    .filter(([, user]) => user.role === "admin")
    .map(([name]) => name);

  const inventoryValue = Object.values(products).reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const validUsers = Object.entries(users)
    .filter(([name, user]) => validateUser(name, user))
    .map(([name]) => name);

  const descriptors = Object.getOwnPropertyDescriptors(users);

  console.log("Management Report");
  console.log(formatTableRow("Total sales", totalSales, 10));
  console.log(formatTableRow("Average sales", averageSales.toFixed(2), 10));
  console.log(formatTableRow("Inventory value", inventoryValue, 10));
  console.log(formatTableRow("Admin users", adminUsers.length, 10));
  console.log("Admin names:", adminUsers.join(", "));
  console.log("Valid users:", validUsers.join(", "));
  console.log("Orders:", Object.entries(orders));
  console.log("User descriptors keys:", Object.keys(descriptors));

  for (const [name, product] of Object.entries(products)) {
    console.log(
      `${name.padEnd(12, " ")} price=${String(product.price).padStart(5, " ")} stock=${String(product.quantity).padStart(2, " ")}`
    );
  }

  return {
    totalSales,
    averageSales,
    inventoryValue,
    adminUsers,
    validUsers,
    orders
  };
}

async function main() {
  try {
    console.log("Loading management data...");
    const report = await buildManagementReport();
    console.log("Report completed successfully.");
    console.log("Final summary:", report);
  } catch (error) {
    console.log("Management report error:", error.message);
  }
}

main();
