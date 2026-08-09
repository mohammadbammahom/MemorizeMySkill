// این درس نشان می‌دهد که چگونه داده‌های object را در ES10 برای پردازش آماده کنیم
// تمرکز روی Object.entries()، Object.values() و Object.keys() است

function createUserStats() {
  return {
    Muhammad: 12,
    AbuBakr: 8,
    Umar: 5,
    Uthman: 9
  };
}

function createPermissionMap() {
  return {
    read: true,
    write: false,
    delete: true,
    manage: false
  };
}

function createProductStats() {
  return {
    Book: 30,
    Pen: 18,
    Notebook: 22
  };
}

function buildUserReport(stats) {
  return Object.entries(stats)
    .filter((entry) => entry[1] >= 8)
    .map((entry) => ({ name: entry[0], score: entry[1] }));
}

function buildPermissionReport(permissionMap) {
  return Object.entries(permissionMap)
    .filter((entry) => entry[1])
    .map((entry) => entry[0]);
}

function buildProductSummary(productStats) {
  const values = Object.values(productStats);
  const total = values.reduce((sum, value) => sum + value, 0);
  return {
    totalSales: total,
    averageSales: total / values.length
  };
}

function main() {
  const userStats = createUserStats();
  const permissionMap = createPermissionMap();
  const productStats = createProductStats();
  const userReport = buildUserReport(userStats);
  const permissionReport = buildPermissionReport(permissionMap);
  const productSummary = buildProductSummary(productStats);

  console.log("User report:", userReport);
  console.log("Permission report:", permissionReport);
  console.log("Product summary:", productSummary);
}

main();
