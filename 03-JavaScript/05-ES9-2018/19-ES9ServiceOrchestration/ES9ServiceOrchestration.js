// این درس نشان می‌دهد که چگونه چند service مستقل را در یک برنامه‌ی ES9 به‌صورت منظم هماهنگ کنیم
// تمرکز روی separation of concerns، validation، transformation و cleanup است

function createValidationService() {
  return function validateRequest(request) {
    const pattern = /^(user|order|report)$/;
    return {
      valid: pattern.test(request.type),
      field: "type",
      reason: pattern.test(request.type) ? "valid" : "invalid request type"
    };
  };
}

function createUserService() {
  return async function loadUser(userId) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return { id: userId, name: "Hafsa", role: "admin" };
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
    await new Promise((resolve) => setTimeout(resolve, 80));
    return { id: productId, name: "Tablet", price: 120 };
  };
}

function createOrderService() {
  return async function createOrder(user, product) {
    await new Promise((resolve) => setTimeout(resolve, 70));
    return { userId: user.id, productId: product.id, total: product.price };
  };
}

function createReportService() {
  return async function createReport(user, permissions, order) {
    await new Promise((resolve) => setTimeout(resolve, 60));
    return {
      user: user.name,
      permissions: permissions.permissions,
      total: order.total
    };
  };
}

async function runOrchestration(request) {
  const validationService = createValidationService();
  const userService = createUserService();
  const permissionService = createPermissionService();
  const productService = createProductService();
  const orderService = createOrderService();
  const reportService = createReportService();

  const validation = validationService(request);
  if (!validation.valid) {
    return { status: "failed", validation };
  }

  try {
    const user = await userService(request.userId);
    const permissions = await permissionService(user);
    const product = await productService(request.productId);
    const order = await orderService(user, product);
    const report = await reportService(user, permissions, order);

    return { status: "success", report };
  } catch (error) {
    return { status: "failed", error: error.message };
  } finally {
    console.log("Orchestration cleanup complete");
  }
}

async function main() {
  const result = await runOrchestration({ type: "order", userId: 7, productId: 42 });
  console.log("Orchestration result:", result);
}

main();
