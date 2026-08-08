// این پروژه عملی ES8 داده‌ها را با async/await، Object.values، Object.entries و padStart/padEnd پردازش می‌کند
// هدف این درس نشان دادن استفاده از ES8 در سناریوی واقعی گزارش‌گیری و مدیریت داده‌ها است

function loadUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Muhammad: { role: "admin", sales: 4200, status: "active" },
        Ali: { role: "editor", sales: 3100, status: "active" },
        Bilal: { role: "viewer", sales: 1900, status: "inactive" },
        Aisha: { role: "admin", sales: 3600, status: "active" },
        Hamza: { role: "editor", sales: 2800, status: "active" },
        Usamah: { role: "viewer", sales: 2400, status: "active" }
      });
    }, 200);
  });
}

function loadProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Laptop: { price: 1200, stock: 8 },
        Phone: { price: 800, stock: 12 },
        Book: { price: 50, stock: 20 },
        Tablet: { price: 600, stock: 5 }
      });
    }, 180);
  });
}

function formatReportLine(label, value) {
  return `${label.padEnd(18, ".")} ${String(value).padStart(10, " ")}`;
}

async function buildReport() {
  const users = await loadUsers();
  const products = await loadProducts();

  const userSales = Object.values(users).map((user) => user.sales);
  const totalSales = userSales.reduce((sum, sale) => sum + sale, 0);
  const averageSales = totalSales / userSales.length;

  const activeUsers = Object.entries(users)
    .filter(([, user]) => user.status === "active")
    .map(([name, user]) => ({ name, role: user.role, sales: user.sales }));

  const inventoryValue = Object.values(products).reduce(
    (sum, product) => sum + product.price * product.stock,
    0
  );

  const productRows = Object.entries(products).map(([name, product]) => ({
    name,
    price: product.price,
    stock: product.stock,
    totalValue: product.price * product.stock
  }));

  console.log("Sales report");
  console.log(formatReportLine("Total sales", totalSales));
  console.log(formatReportLine("Average sales", averageSales.toFixed(2)));
  console.log(formatReportLine("Inventory value", inventoryValue));
  console.log("Active users:", activeUsers.map((user) => user.name).join(", "));
  console.log("Product report:");

  for (const row of productRows) {
    console.log(
      `${row.name.padEnd(12, " ")} price=${String(row.price).padStart(5, " ")} stock=${String(row.stock).padStart(2, " ")} total=${String(row.totalValue).padStart(6, " ")}`
    );
  }

  return {
    totalSales,
    averageSales,
    inventoryValue,
    activeUsers,
    productRows
  };
}

async function main() {
  try {
    console.log("Loading data...");
    const report = await buildReport();
    console.log("Report ready for review.");
    console.log("Top sales user:", report.activeUsers.sort((a, b) => b.sales - a.sales)[0].name);
  } catch (error) {
    console.log("Report error:", error.message);
  }
}

main();
