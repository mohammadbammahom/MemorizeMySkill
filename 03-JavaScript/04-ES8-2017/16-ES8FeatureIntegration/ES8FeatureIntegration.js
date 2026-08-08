// این مثال برای ترکیب چند قابلیت ES8 در یک برنامه عملی نوشته شده است
// هدف این درس نشان دادن اینکه چه‌طور async/await، Object.values، Object.entries و padStart/padEnd در کنار هم کار می‌کنند

function loadUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Muhammad: { role: "admin", sales: 5200, active: true },
        Ali: { role: "editor", sales: 3400, active: true },
        Bilal: { role: "viewer", sales: 1900, active: false },
        Aisha: { role: "admin", sales: 4800, active: true },
        Hamza: { role: "editor", sales: 3000, active: true }
      });
    }, 150);
  });
}

function loadProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Laptop: { price: 1200, stock: 8 },
        Phone: { price: 900, stock: 12 },
        Book: { price: 45, stock: 18 },
        Tablet: { price: 600, stock: 7 }
      });
    }, 170);
  });
}

function formatRow(label, value, width) {
  return `${label.padEnd(18, ".")} ${String(value).padStart(width, " ")}`;
}

async function buildIntegratedReport() {
  const [users, products] = await Promise.all([loadUsers(), loadProducts()]);

  const totalSales = Object.values(users).reduce((sum, user) => sum + user.sales, 0);
  const activeUsers = Object.entries(users)
    .filter(([, user]) => user.active)
    .map(([name]) => name);

  const inventoryValue = Object.values(products).reduce(
    (sum, product) => sum + product.price * product.stock,
    0
  );

  const descriptors = Object.getOwnPropertyDescriptors(products);
  const productRows = Object.entries(products).map(([name, product]) => ({
    name,
    totalValue: product.price * product.stock
  }));

  console.log("Integrated ES8 report");
  console.log(formatRow("Total sales", totalSales, 10));
  console.log(formatRow("Active users", activeUsers.length, 10));
  console.log(formatRow("Inventory value", inventoryValue, 10));
  console.log("Active users:", activeUsers.join(", "));
  console.log("Report rows:", productRows);
  console.log("Product descriptors:", Object.keys(descriptors));

  return {
    totalSales,
    activeUsers,
    inventoryValue,
    productRows
  };
}

async function main() {
  try {
    console.log("Loading application data...");
    const report = await buildIntegratedReport();
    console.log("Report ready:", report);
  } catch (error) {
    console.log("Report error:", error.message);
  }
}

main();
