// این درس نشان می‌دهد که چگونه گردش‌کاری ناهمزمان را در ES9 به‌صورت عملی طراحی کنیم
// در این مثال، داده‌ی کاربر از مرحله‌ی اعتبارسنجی تا تولید گزارش پردازش می‌شود

function createUserStream() {
  const users = [
    { id: 1, name: "Muhammad", role: "admin", active: true },
    { id: 2, name: "AbuBakr", role: "viewer", active: true },
    { id: 3, name: "Umar", role: "editor", active: false }
  ];

  let index = 0;

  return {
    [Symbol.asyncIterator]() {
      return this;
    },
    async next() {
      if (index < users.length) {
        await new Promise((resolve) => setTimeout(resolve, 120));
        return { value: users[index++], done: false };
      }
      return { done: true };
    }
  };
}

function validateUser(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!user || !user.name || !user.role) {
        resolve({ valid: false, reason: "Invalid user" });
        return;
      }
      resolve({ valid: true, user });
    }, 80);
  });
}

function checkPermission(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allowed = user.role === "admin" || user.role === "editor";
      resolve({ allowed, permission: allowed ? "write" : "read" });
    }, 70);
  });
}

function loadOrders(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (user.role === "admin") {
        resolve([{ id: 10, total: 300 }, { id: 11, total: 150 }]);
      } else {
        resolve([{ id: 12, total: 80 }]);
      }
    }, 90);
  });
}

function transformOrders(orders) {
  return orders.map((order) => ({
    id: order.id,
    total: order.total,
    status: order.total > 200 ? "high" : "normal"
  }));
}

function createReport(user, orders) {
  const total = orders.reduce((sum, order) => sum + order.total, 0);
  return {
    user: user.name,
    role: user.role,
    orderCount: orders.length,
    totalAmount: total
  };
}

async function runWorkflow(user) {
  const validation = await validateUser(user);
  if (!validation.valid) {
    return { stage: "validation", status: "failed", reason: validation.reason };
  }

  const permission = await checkPermission(validation.user);
  if (!permission.allowed) {
    return { stage: "permission", status: "failed", reason: "Permission denied" };
  }

  const orders = await loadOrders(validation.user);
  const transformedOrders = transformOrders(orders);
  const report = createReport(validation.user, transformedOrders);

  return { stage: "report", status: "success", report };
}

async function processWorkflowBatch() {
  const reports = [];

  try {
    for await (const user of createUserStream()) {
      const result = await runWorkflow(user);
      reports.push(result);
      console.log(`Workflow result for ${user.name}: ${result.status}`);
    }
  } catch (error) {
    console.log(`Workflow error: ${error.message}`);
  }

  return reports;
}

async function main() {
  const reports = await processWorkflowBatch();
  console.log("Workflow summary:", reports);
}

main();
