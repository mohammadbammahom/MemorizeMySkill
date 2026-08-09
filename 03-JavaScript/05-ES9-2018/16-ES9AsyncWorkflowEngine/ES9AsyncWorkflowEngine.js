// این درس نشان می‌دهد که چگونه چند عملیات ناهمزمان را در یک workflow قابل‌اعتماد سازمان‌دهی کنیم
// هدف، جدا کردن مرحله‌های validation، بارگذاری داده، محاسبه و گزارش‌گیری است

function createOrderStream() {
  const orders = [
    { id: 1001, customerId: 1, productId: 10, quantity: 2 },
    { id: 1002, customerId: 2, productId: 11, quantity: 5 },
    { id: 1003, customerId: 3, productId: 12, quantity: 1 }
  ];

  let index = 0;

  return {
    [Symbol.asyncIterator]() {
      return this;
    },
    async next() {
      if (index < orders.length) {
        await new Promise((resolve) => setTimeout(resolve, 80));
        return { value: orders[index++], done: false };
      }
      return { done: true };
    }
  };
}

function validateOrder(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!order || !order.customerId || !order.productId) {
        resolve({ valid: false, reason: "Invalid order" });
        return;
      }
      resolve({ valid: true, order });
    }, 60);
  });
}

function loadCustomer(customerId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const customerMap = { 1: "Muhammad", 2: "AbuBakr", 3: "Umar" };
      resolve({ id: customerId, name: customerMap[customerId] || "Unknown" });
    }, 90);
  });
}

function loadProduct(productId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productMap = { 10: { name: "Book", price: 20 }, 11: { name: "Pen", price: 5 }, 12: { name: "Notebook", price: 15 } };
      resolve(productMap[productId] || { name: "Unknown", price: 0 });
    }, 80);
  });
}

function calculateOrder(order, customer, product) {
  return {
    orderId: order.id,
    customerName: customer.name,
    productName: product.name,
    total: order.quantity * product.price,
    quantity: order.quantity
  };
}

function buildReport(result) {
  return {
    status: result.total > 100 ? "priority" : "standard",
    summary: `${result.customerName} purchased ${result.productName}`
  };
}

async function processOrder(order) {
  const validation = await validateOrder(order);
  if (!validation.valid) {
    return { status: "failed", reason: validation.reason };
  }

  const customer = await loadCustomer(validation.order.customerId);
  const product = await loadProduct(validation.order.productId);
  const result = calculateOrder(validation.order, customer, product);
  const report = buildReport(result);

  return { status: "success", result, report };
}

async function runWorkflow() {
  const outcomes = [];

  try {
    for await (const order of createOrderStream()) {
      const outcome = await processOrder(order);
      outcomes.push(outcome);
      console.log(`Workflow outcome for ${order.id}: ${outcome.status}`);
    }
  } catch (error) {
    console.log(`Workflow error: ${error.message}`);
  } finally {
    console.log("Workflow cleanup complete");
  }

  return outcomes;
}

async function main() {
  const outcomes = await runWorkflow();
  console.log("Workflow results:", outcomes);
}

main();
