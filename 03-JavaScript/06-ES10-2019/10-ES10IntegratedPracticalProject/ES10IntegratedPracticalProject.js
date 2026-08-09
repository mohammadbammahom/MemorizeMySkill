// این پروژه‌ی نهایی نشان می‌دهد که چگونه ES10 را در یک برنامه‌ی کسب‌وکار کوچک به‌صورت عملی استفاده کنیم
// تمرکز روی داده‌های تودرتو، پاک‌سازی متن، پردازش object و ساخت گزارش است

function createUsers() {
  return [
    { id: 1, name: "  Muhammad  ", role: "admin", permissions: ["read", "write", "manage"] },
    { id: 2, name: "AbuBakr", role: "seller", permissions: ["read", "write"] },
    { id: 3, name: "  Uthman  ", role: "buyer", permissions: ["read"] }
  ];
}

function createProducts() {
  return [
    { id: 10, name: "Book", categories: [["education"], ["history"]], price: 20 },
    { id: 11, name: "Pen", categories: [["office"], ["study"]], price: 5 }
  ];
}

function createOrders() {
  return [
    { id: 500, userId: 1, productIds: [10, 11] },
    { id: 501, userId: 2, productIds: [11] }
  ];
}

function cleanUsers(users) {
  return users.map((user) => ({
    id: user.id,
    name: user.name.trimStart().trimEnd(),
    role: user.role,
    permissions: user.permissions
  }));
}

function transformProducts(products) {
  return products.map((product) => ({
    id: product.id,
    name: product.name,
    categories: product.categories.flat(),
    price: product.price
  }));
}

function buildOrderReport(users, products, orders) {
  const orderItems = orders.flatMap((order) => order.productIds);
  const productLookup = new Map(products.map((product) => [product.id, product]));
  const sales = orderItems.map((productId) => productLookup.get(productId));
  const userLookup = new Map(users.map((user) => [user.id, user]));
  const summary = orders.map((order) => ({
    orderId: order.id,
    user: userLookup.get(order.userId).name,
    total: sales.filter((item) => item && item.id === order.productIds[0]).reduce((sum, item) => sum + item.price, 0)
  }));

  return {
    orderCount: orders.length,
    summary,
    categories: Array.from(new Set(products.flatMap((product) => product.categories.flat())))
  };
}

function createSymbolRegistry() {
  const productSymbol = Symbol("product-report");
  return {
    label: productSymbol.description,
    value: productSymbol
  };
}

function main() {
  const users = cleanUsers(createUsers());
  const products = transformProducts(createProducts());
  const orders = createOrders();
  const report = buildOrderReport(users, products, orders);
  const symbolRegistry = createSymbolRegistry();

  console.log("Users:", users);
  console.log("Products:", products);
  console.log("Report:", report);
  console.log("Symbol registry:", symbolRegistry.label);
}

main();
