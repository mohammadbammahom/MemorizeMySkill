// این پروژه‌ی نهایی نشان می‌دهد که چگونه ES9 را در یک سامانه‌ی کسب‌وکار کوچک به‌صورت عملی به کار ببریم
// تمرکز روی داده، validation، transformation، گزارش و cleanup است

function createAsyncDataSource() {
  const users = [
    { id: 1, name: "Muhammad", role: "admin", active: true, permissions: ["read", "write", "manage"] },
    { id: 2, name: "AbuBakr", role: "seller", active: true, permissions: ["read", "write"] },
    { id: 3, name: "Umar", role: "buyer", active: false, permissions: ["read"] }
  ];

  const products = [
    { id: 10, name: "Book", price: 20 },
    { id: 11, name: "Pen", price: 5 }
  ];

  let index = 0;

  return {
    [Symbol.asyncIterator]() {
      return this;
    },
    async next() {
      if (index < users.length) {
        await new Promise((resolve) => setTimeout(resolve, 80));
        return { value: { user: users[index], product: products[index % products.length] }, done: false };
      }
      return { done: true };
    }
  };
}

function validateUser(user) {
  return Boolean(user && user.name && user.active);
}

function classifyUser(user) {
  const role = user.role === "admin" ? "manager" : user.role === "seller" ? "sales" : "customer";
  return { ...user, role };
}

function transformForReport(user, product) {
  const { permissions, ...rest } = user;
  return {
    ...rest,
    product: product.name,
    price: product.price,
    permissionCount: permissions.length
  };
}

function generateStats(records) {
  return {
    total: records.length,
    activeUsers: records.filter((record) => record.active).length,
    revenue: records.reduce((sum, record) => sum + record.price, 0)
  };
}

function parseLog(value) {
  const pattern = /(?<level>info|warning|error)\s+(?<message>.+)/;
  const match = value.match(pattern);
  return match && match.groups ? match.groups : null;
}

function parseMultiline(value) {
  const pattern = /start[\s\S]*?end/s;
  return value.match(pattern) ? value.match(pattern)[0] : null;
}

async function runEnterpriseProject() {
  const records = [];
  const logs = [];

  try {
    for await (const item of createAsyncDataSource()) {
      if (!validateUser(item.user)) {
        continue;
      }

      const processedUser = classifyUser(item.user);
      const transformedRecord = transformForReport(processedUser, item.product);
      records.push(transformedRecord);
      logs.push(`info user:${processedUser.name}`);
    }

    const stats = generateStats(records);
    const report = {
      records,
      stats,
      sampleLog: parseLog(logs[0]),
      multilineLog: parseMultiline("start\nline one\nline two\nend")
    };

    return report;
  } catch (error) {
    return { status: "failed", message: error.message };
  } finally {
    console.log("Enterprise project cleanup complete");
  }
}

async function main() {
  const result = await runEnterpriseProject();
  console.table(result.records);
  console.log("Project stats:", result.stats);
  console.log("Sample log:", result.sampleLog);
  console.log("Multiline log:", result.multilineLog);
}

main();
