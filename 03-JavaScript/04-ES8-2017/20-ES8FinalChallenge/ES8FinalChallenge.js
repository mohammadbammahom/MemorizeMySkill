// چالش نهایی ES8
// در این مثال، چند قابلیت ES8 به‌صورت ترکیبی در یک پروژه واقعی استفاده می‌شوند

const productCatalog = {
  laptop: { price: 1800, stock: 12 },
  phone: { price: 900, stock: 40 },
  tablet: { price: 600, stock: 24 }
};

function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productCatalog), 180);
  });
}

function getOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, product: "laptop", quantity: 2 },
        { id: 2, product: "phone", quantity: 3 },
        { id: 3, product: "tablet", quantity: 1 }
      ]);
    }, 220);
  });
}

async function buildSalesReport() {
  try {
    const [products, orders] = await Promise.all([
      getProducts(),
      getOrders()
    ]);

    const productList = Object.entries(products);
    const productSummary = productList.map(([name, info]) => ({
      name,
      price: info.price,
      stock: info.stock,
      stockLabel: String(info.stock).padStart(3, "0")
    }));

    const totalOrderCount = orders.length;
    const totalQuantity = orders.reduce((sum, order) => sum + order.quantity, 0);
    const totalRevenue = orders.reduce((sum, order) => {
      const price = products[order.product].price;
      return sum + price * order.quantity;
    }, 0);

    const result = {
      productSummary,
      totalOrderCount,
      totalQuantity,
      totalRevenue,
      report: {
        ordersLabel: `Orders: ${String(totalOrderCount).padStart(4, "0")}`,
        revenueLabel: `Revenue: ${String(totalRevenue).padStart(8, "0")}`
      },
      metadata: Object.getOwnPropertyDescriptors(products)
    };

    return result;
  } catch (error) {
    return {
      status: "error",
      message: error.message
    };
  }
}

async function main() {
  const report = await buildSalesReport();
  console.log("Sales Report:", report);
}

main();
