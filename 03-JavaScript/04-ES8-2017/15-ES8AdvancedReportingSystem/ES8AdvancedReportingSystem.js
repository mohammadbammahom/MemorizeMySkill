// این برنامه نهایی ES8 یک سیستم گزارش‌گیری پیشرفته ترمینال را با async/await، Object.values، Object.entries، padStart/padEnd و مفاهیم SharedArrayBuffer/Atomics ترکیب می‌کند
// هدف این درس نشان دادن کاربردهای واقعی ES8 در یک برنامه مدیریتی ساده اما حرفه‌ای است

function loadUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Muhammad: { role: "admin", sales: 5200, permissions: ["read", "write", "delete"] },
        Ali: { role: "editor", sales: 3300, permissions: ["read", "write"] },
        Bilal: { role: "viewer", sales: 2100, permissions: ["read"] },
        Aisha: { role: "admin", sales: 4200, permissions: ["read", "write", "update"] },
        Hamza: { role: "editor", sales: 2800, permissions: ["read", "write"] },
        Usamah: { role: "viewer", sales: 2400, permissions: ["read"] }
      });
    }, 160);
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
    }, 170);
  });
}

function loadOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        order101: { customer: "Muhammad", total: 1550 },
        order102: { customer: "Ali", total: 980 },
        order103: { customer: "Aisha", total: 2100 },
        order104: { customer: "Usamah", total: 1400 }
      });
    }, 140);
  });
}

function formatReportLine(label, value, width) {
  return `${label.padEnd(18, ".")} ${String(value).padStart(width, " ")}`;
}

function validateUser(userName, userData) {
  return Boolean(userData && userData.role && userData.permissions && userData.permissions.length > 0 && userName);
}

async function buildAdvancedReport() {
  const [users, products, orders] = await Promise.all([
    loadUsers(),
    loadProducts(),
    loadOrders()
  ]);

  const totalSales = Object.values(users).reduce((sum, user) => sum + user.sales, 0);
  const averageSales = totalSales / Object.keys(users).length;
  const inventoryValue = Object.values(products).reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const adminUsers = Object.entries(users)
    .filter(([, user]) => user.role === "admin")
    .map(([name]) => name);

  const validUsers = Object.entries(users)
    .filter(([name, user]) => validateUser(name, user))
    .map(([name]) => name);

  const sharedMemory = new SharedArrayBuffer(16);
  const sharedView = new Int32Array(sharedMemory);
  sharedView[0] = 7;
  const atomicValue = Atomics.add(sharedView, 0, 3);

  const descriptors = Object.getOwnPropertyDescriptors(users);

  console.log("Advanced reporting system");
  console.log(formatReportLine("Total sales", totalSales, 10));
  console.log(formatReportLine("Average sales", averageSales.toFixed(2), 10));
  console.log(formatReportLine("Inventory value", inventoryValue, 10));
  console.log(formatReportLine("Admin users", adminUsers.length, 10));
  console.log("Admin names:", adminUsers.join(", "));
  console.log("Valid users:", validUsers.join(", "));
  console.log("Order summary:", Object.entries(orders));
  console.log("Shared memory atomic value:", atomicValue);
  console.log("User descriptor keys:", Object.keys(descriptors));

  console.log("\nProduct report:");
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
    atomicValue,
    orders
  };
}

async function main() {
  try {
    console.log("Loading report data...");
    const report = await buildAdvancedReport();
    console.log("Report generated successfully.");
    console.log("Final result:", report);
  } catch (error) {
    console.log("Report error:", error.message);
  }
}

main();
