// این پروژه‌ی عملی ES10 را به یک سناریوی واقعی برای کار با داده، اعتبارسنجی و گزارش‌گیری وصل می‌کند
// تمرکز روی Optional Catch Binding، JSON.stringify، toString() و runtime diagnostics است

function createUsers() {
  return [
    { id: 1, name: "Muhammad", role: "admin", permissions: ["read", "write"] },
    { id: 2, name: "AbuBakr", role: "seller", permissions: ["read"] },
    { id: 3, name: "Uthman", role: "buyer", permissions: [] }
  ];
}

function createProducts() {
  return [
    { id: 10, name: "Book", price: 20 },
    { id: 11, name: "Pen", price: 5 }
  ];
}

function createOrders() {
  return [
    { id: 100, userId: 1, productId: 10 },
    { id: 101, userId: 2, productId: 11 }
  ];
}

function validateOrder(order, users, products) {
  const user = users.find((entry) => entry.id === order.userId);
  const product = products.find((entry) => entry.id === order.productId);

  if (!user) {
    throw new Error("User not found");
  }

  if (!product) {
    throw new Error("Product not found");
  }

  return { user, product };
}

function handleValidation(order, users, products) {
  try {
    const result = validateOrder(order, users, products);
    return "Order accepted for " + result.user.name;
  } catch {
    return "Order rejected";
  }
}

function buildPayload(users, products, orders) {
  return {
    users: users,
    products: products,
    orders: orders
  };
}

function inspectFunctions() {
  const sample = function inspectRuntime() {
    return true;
  };

  return {
    sampleName: sample.name,
    sampleSource: sample.toString()
  };
}

function buildReport(users, products, orders) {
  const payload = buildPayload(users, products, orders);
  const serialized = JSON.stringify(payload);
  const inspected = inspectFunctions();
  return {
    totalUsers: users.length,
    totalProducts: products.length,
    totalOrders: orders.length,
    serializedLength: serialized.length,
    inspected: inspected
  };
}

function main() {
  const users = createUsers();
  const products = createProducts();
  const orders = createOrders();

  console.log("Order check:", handleValidation(orders[0], users, products));
  console.log("Order check:", handleValidation({ id: 999, userId: 50, productId: 999 }, users, products));
  console.log("Report:", buildReport(users, products, orders));
}

main();
