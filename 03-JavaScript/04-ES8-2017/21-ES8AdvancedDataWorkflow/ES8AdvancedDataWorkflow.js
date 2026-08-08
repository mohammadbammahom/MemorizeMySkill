// جریان کار پیشرفته‌ای پردازش داده‌ها با ES8
// این مثال نشان می‌دهد چطور داده‌ها از چند منبع بارگذاری شوند و پردازش شوند

function loadUserActivity() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Muhammad: { loginCount: 45, lastLogin: "2025-08-05" },
        Ali: { loginCount: 28, lastLogin: "2025-08-07" },
        Uthman: { loginCount: 52, lastLogin: "2025-08-08" },
        Aisha: { loginCount: 33, lastLogin: "2025-08-06" }
      });
    }, 250);
  });
}

function loadUserPermissions() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Muhammad: ["read", "write", "delete", "admin"],
        Ali: ["read", "write"],
        Uthman: ["read", "write", "delete"],
        Aisha: ["read"]
      });
    }, 200);
  });
}

function loadUserTransactions() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { user: "Muhammad", amount: 500, status: "completed" },
        { user: "Ali", amount: 320, status: "completed" },
        { user: "Uthman", amount: 1200, status: "pending" },
        { user: "Aisha", amount: 150, status: "completed" },
        { user: "Muhammad", amount: 300, status: "completed" }
      ]);
    }, 220);
  });
}

function validateUser(user) {
  return user && typeof user === "object" && Object.keys(user).length > 0;
}

function processUserActivity(activity, permissions) {
  const entries = Object.entries(activity);
  const processed = entries.map(([name, data]) => {
    const perms = permissions[name] || [];
    return {
      name,
      logins: data.loginCount,
      lastLogin: data.lastLogin,
      permissionCount: perms.length,
      isAdmin: perms.includes("admin")
    };
  });
  return processed;
}

function calculateStatistics(transactions) {
  const values = Object.values(transactions);
  const totalAmount = values.reduce((sum, t) => sum + t.amount, 0);
  const completedCount = values.filter((t) => t.status === "completed").length;
  const pendingCount = values.filter((t) => t.status === "pending").length;

  return {
    totalAmount,
    completedCount,
    pendingCount,
    averageAmount: Math.round(totalAmount / values.length)
  };
}

async function buildAdvancedWorkflow() {
  try {
    const [activity, permissions, transactions] = await Promise.all([
      loadUserActivity(),
      loadUserPermissions(),
      loadUserTransactions()
    ]);

    if (!validateUser(activity) || !Array.isArray(transactions)) {
      throw new Error("Invalid data structure");
    }

    const processed = processUserActivity(activity, permissions);
    const stats = calculateStatistics(transactions);

    const report = {
      users: processed,
      statistics: stats,
      transactionDetails: transactions,
      summary: {
        totalUsers: processed.length,
        admins: processed.filter((u) => u.isAdmin).length,
        totalLogins: processed.reduce((sum, u) => sum + u.logins, 0)
      }
    };

    return report;
  } catch (error) {
    return { status: "error", message: error.message };
  }
}

async function main() {
  const workflow = await buildAdvancedWorkflow();
  console.log("Advanced Workflow Result:", workflow);
}

main();
