// سؤالات مصاحبه‌ای و معماری سیستم‌ها با ES8
// این مثال نشان می‌دهد چطور کد را درست معماری‌گذاری کنیم و سؤالات مصاحبه‌ای را حل کنیم

// ===== مثال غلط برای نشان‌دادن مشکل =====

// کد بد: تمام مسئولیت‌های در یک تابع
// async function badUserReportBad() {
//   try {
//     const users = await fetch("/api/users").then(r => r.json());
//     const transactions = await fetch("/api/transactions").then(r => r.json());
//     const combined = {};
//     for (let user of users) {
//       combined[user.id] = {
//         name: user.name,
//         trans: transactions.filter(t => t.userId === user.id).length,
//         total: transactions.filter(t => t.userId === user.id).reduce((s, t) => s + t.amount, 0)
//       };
//     }
//     return combined;
//   } catch (e) {
//     console.log("error");
//   }
// }

// ===== کد درست با معماری صحیح =====

function simulateLoadUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Muhammad", role: "admin" },
        { id: 2, name: "Ali", role: "user" },
        { id: 3, name: "Uthman", role: "user" }
      ]);
    }, 180);
  });
}

function simulateLoadTransactions() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, userId: 1, amount: 500 },
        { id: 102, userId: 2, amount: 300 },
        { id: 103, userId: 1, amount: 200 },
        { id: 104, userId: 3, amount: 150 }
      ]);
    }, 150);
  });
}

async function loadAllData() {
  try {
    const [users, transactions] = await Promise.all([
      simulateLoadUsers(),
      simulateLoadTransactions()
    ]);
    return { users, transactions };
  } catch (error) {
    throw new Error(`Data loading failed: ${error.message}`);
  }
}

function getUserTransactionSummary(userId, transactions) {
  const userTransactions = transactions.filter((t) => t.userId === userId);
  return {
    count: userTransactions.length,
    total: userTransactions.reduce((sum, t) => sum + t.amount, 0),
    transactions: userTransactions
  };
}

function buildUserReport(users, transactions) {
  return Object.fromEntries(
    users.map((user) => [
      user.name,
      {
        id: user.id,
        role: user.role,
        summary: getUserTransactionSummary(user.id, transactions)
      }
    ])
  );
}

async function generateInterviewReport() {
  try {
    const data = await loadAllData();
    const report = buildUserReport(data.users, data.transactions);

    const descriptors = Object.getOwnPropertyDescriptors(report);
    const entries = Object.entries(report);

    return {
      userCount: data.users.length,
      transactionCount: data.transactions.length,
      report: entries.map(([name, info]) => ({
        name: name.padEnd(12, "."),
        role: info.role.padStart(8, "."),
        transactions: String(info.summary.count).padStart(2, "0"),
        total: String(info.summary.total).padStart(6, "0")
      })),
      metadata: {
        reportKeys: Object.keys(report).length,
        generatedAt: new Date().toISOString()
      }
    };
  } catch (error) {
    return {
      status: "error",
      message: error.message
    };
  }
}

async function main() {
  const report = await generateInterviewReport();
  console.log("Interview Architecture Report:", JSON.stringify(report, null, 2));
}

main();
