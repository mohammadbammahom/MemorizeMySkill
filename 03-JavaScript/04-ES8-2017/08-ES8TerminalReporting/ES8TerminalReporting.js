// این برنامه گزارش ترمینال برای کاربران، محصولات و فروش‌ها با ES8 می‌سازد
// هدف این درس ترکیب async/await، Object.values، Object.entries و قالب‌بندی متنی است

const userData = {
  Muhammad: { role: "admin", sales: 4200, status: "active" },
  Ali: { role: "editor", sales: 3100, status: "active" },
  Bilal: { role: "viewer", sales: 1900, status: "inactive" },
  Aisha: { role: "admin", sales: 3500, status: "active" },
  Hamza: { role: "editor", sales: 2600, status: "active" },
  Usamah: { role: "viewer", sales: 2200, status: "active" }
};

const productData = {
  Laptop: { category: "electronics", price: 1200, quantity: 8 },
  Phone: { category: "electronics", price: 900, quantity: 12 },
  Book: { category: "education", price: 55, quantity: 20 },
  Tablet: { category: "electronics", price: 600, quantity: 6 }
};

function formatLine(label, value, width) {
  return `${label.padEnd(18, ".")} ${String(value).padStart(width, " ")}`;
}

function buildUserSummary(users) {
  const data = Object.values(users);
  const totalSales = data.reduce((sum, user) => sum + user.sales, 0);
  const activeUsers = Object.entries(users)
    .filter(([, user]) => user.status === "active")
    .map(([name]) => name);

  return {
    totalSales,
    activeUsers,
    averageSales: totalSales / data.length
  };
}

function buildProductSummary(products) {
  const rows = Object.entries(products).map(([name, product]) => ({
    name,
    category: product.category,
    totalValue: product.price * product.quantity
  }));

  const totalValue = rows.reduce((sum, row) => sum + row.totalValue, 0);

  return { rows, totalValue };
}

async function loadReport() {
  const userSummary = buildUserSummary(userData);
  const productSummary = buildProductSummary(productData);

  console.log("User Sales Report");
  console.log(formatLine("Total sales", userSummary.totalSales, 10));
  console.log(formatLine("Average sales", userSummary.averageSales.toFixed(2), 10));
  console.log(formatLine("Active users", userSummary.activeUsers.length, 10));
  console.log("Active user names:", userSummary.activeUsers.join(", "));

  console.log("\nProduct Report");
  console.log(formatLine("Inventory value", productSummary.totalValue, 10));

  for (const row of productSummary.rows) {
    console.log(
      `${row.name.padEnd(12, " ")} ${row.category.padEnd(12, " ")} value=${String(row.totalValue).padStart(6, " ")}`
    );
  }

  return {
    userSummary,
    productSummary
  };
}

async function main() {
  try {
    console.log("Loading report...");
    const report = await loadReport();
    console.log("Report generated successfully.");
    console.log("Summary keys:", Object.keys(report));
  } catch (error) {
    console.log("Report error:", error.message);
  }
}

main();
