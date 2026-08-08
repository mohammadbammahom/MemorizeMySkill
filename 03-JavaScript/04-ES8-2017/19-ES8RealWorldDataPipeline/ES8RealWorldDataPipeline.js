// این مثال نمایش یک pipeline داده واقعی با ES8 است
// داده‌ها از چند منبع ناهمزمان می‌آیند و بعد پردازش می‌شوند

function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Muhammad", active: true },
        { id: 2, name: "Ali", active: false },
        { id: 3, name: "Aisha", active: true }
      ]);
    }, 200);
  });
}

function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, name: "Laptop", price: 1500 },
        { id: 102, name: "Mouse", price: 80 },
        { id: 103, name: "Keyboard", price: 120 }
      ]);
    }, 180);
  });
}

function fetchOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 5001, userId: 1, total: 1500 },
        { id: 5002, userId: 2, total: 200 },
        { id: 5003, userId: 3, total: 1600 }
      ]);
    }, 220);
  });
}

async function buildDataPipeline() {
  const [users, products, orders] = await Promise.all([
    fetchUsers(),
    fetchProducts(),
    fetchOrders()
  ]);

  const userSummary = Object.fromEntries(
    users.map((user) => [user.name, { active: user.active }])
  );

  const productSummary = products.map((product) => ({
    name: product.name,
    price: product.price,
    label: product.name.padEnd(12, ".")
  }));

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

  return {
    users,
    products,
    orders,
    userSummary,
    productSummary,
    totalRevenue,
    activeUsers: Object.values(userSummary).filter((user) => user.active).length,
    report: {
      revenueLabel: `Revenue: ${String(totalRevenue).padStart(8, "0")}`,
      productCount: productSummary.length
    }
  };
}

async function main() {
  const pipeline = await buildDataPipeline();
  console.log("Pipeline result:", pipeline);
}

main();
