// این برنامه چند مجموعه داده را به‌صورت مستقل با async/await و Promise.all() بارگذاری می‌کند
// این سناریو نشان می‌دهد که چه وقت باید کارها به‌صورت هم‌زمان و چه وقت به‌صورت ترتیبی اجرا شوند

function loadUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Muhammad: { role: "admin", sales: 5000 },
        Ali: { role: "editor", sales: 3200 },
        Bilal: { role: "viewer", sales: 2000 },
        Aisha: { role: "admin", sales: 4100 }
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
        Tablet: { price: 600, stock: 6 }
      });
    }, 200);
  });
}

function loadOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        order101: { customer: "Muhammad", total: 1500 },
        order102: { customer: "Ali", total: 900 },
        order103: { customer: "Aisha", total: 2100 }
      });
    }, 130);
  });
}

async function loadSequential() {
  const users = await loadUsers();
  const products = await loadProducts();
  const orders = await loadOrders();

  return { users, products, orders };
}

async function loadConcurrent() {
  const [users, products, orders] = await Promise.all([
    loadUsers(),
    loadProducts(),
    loadOrders()
  ]);

  return { users, products, orders };
}

async function createReport() {
  const sequentialData = await loadSequential();
  const concurrentData = await loadConcurrent();

  const sequentialSales = Object.values(sequentialData.users).reduce((sum, user) => sum + user.sales, 0);
  const concurrentInventory = Object.values(concurrentData.products).reduce(
    (sum, product) => sum + product.price * product.stock,
    0
  );

  console.log("Sequential sales total:", sequentialSales);
  console.log("Concurrent inventory value:", concurrentInventory);
  console.log("Order entries:", Object.entries(concurrentData.orders));

  return {
    sequentialSales,
    concurrentInventory,
    orderCount: Object.keys(concurrentData.orders).length
  };
}

async function main() {
  try {
    console.log("Starting data processing...");
    const result = await createReport();
    console.log("Report summary:", result);
  } catch (error) {
    console.log("Data processing error:", error.message);
  }
}

main();
