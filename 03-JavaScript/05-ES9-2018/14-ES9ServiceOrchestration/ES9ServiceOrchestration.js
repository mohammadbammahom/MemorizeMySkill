// این درس نشان می‌دهد که چگونه چند service در ES9 با هم هماهنگ شوند
// هدف، جداسازی بارگذاری داده، منطق کسب‌وکار، اعتبارسنجی و تبدیل داده است

function createUserService() {
  return async function loadUser(userId) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return { id: userId, name: "KhalidBinWalid", role: "admin" };
  };
}

function createPermissionService() {
  return async function loadPermissions(user) {
    await new Promise((resolve) => setTimeout(resolve, 90));
    return { userId: user.id, permissions: ["read", "write"] };
  };
}

function createProductService() {
  return async function loadProduct(productId) {
    await new Promise((resolve) => setTimeout(resolve, 110));
    return { id: productId, name: "Book", price: 50 };
  };
}

function createOrderService() {
  return async function loadOrder(userId, productId) {
    await new Promise((resolve) => setTimeout(resolve, 80));
    return { userId, productId, quantity: 2 };
  };
}

function createReportService() {
  return async function buildReport(user, permissions, product, order) {
    await new Promise((resolve) => setTimeout(resolve, 60));
    return {
      user: user.name,
      role: user.role,
      permissions: permissions.permissions,
      product: product.name,
      orderTotal: product.price * order.quantity
    };
  };
}

async function orchestrateWorkflow(userId, productId) {
  const userService = createUserService();
  const permissionService = createPermissionService();
  const productService = createProductService();
  const orderService = createOrderService();
  const reportService = createReportService();

  try {
    const user = await userService(userId);
    const permissions = await permissionService(user);
    const product = await productService(productId);
    const order = await orderService(user.id, product.id);
    const report = await reportService(user, permissions, product, order);

    return { status: "success", report };
  } catch (error) {
    return { status: "failed", message: error.message };
  } finally {
    console.log("Service orchestration cleanup complete");
  }
}

async function main() {
  const result = await orchestrateWorkflow(10, 20);
  console.log("Orchestration result:", result);
}

main();
