// چالش نهایی ES8
// سیستم مدیریت حسابات و گزارش‌گیری با ترکیب تمام قابلیت‌های ES8

const accountDatabase = {
  Muhammad: { id: 1, role: "admin", balance: 5000, status: "active" },
  Ali: { id: 2, role: "user", balance: 3200, status: "active" },
  Uthman: { id: 3, role: "user", balance: 1800, status: "inactive" },
  Aisha: { id: 4, role: "admin", balance: 4500, status: "active" },
  Umar: { id: 5, role: "user", balance: 2500, status: "active" }
};

const transactionHistory = [
  { user: "Muhammad", amount: 500, type: "deposit", status: "completed" },
  { user: "Ali", amount: 300, type: "withdrawal", status: "completed" },
  { user: "Uthman", amount: 200, type: "deposit", status: "pending" },
  { user: "Aisha", amount: 1000, type: "withdrawal", status: "completed" },
  { user: "Umar", amount: 400, type: "deposit", status: "completed" }
];

function loadAccountData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(accountDatabase);
    }, 150);
  });
}

function loadTransactions() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(transactionHistory);
    }, 120);
  });
}

function validateAccounts(accounts) {
  const values = Object.values(accounts);

  return values.every((account) => {
    return (
      account.id !== undefined &&
      account.role !== undefined &&
      account.balance !== undefined &&
      account.status !== undefined
    );
  });
}

function processAccountReport(accounts, transactions) {
  const entries = Object.entries(accounts);

  const report = entries.map(([name, account]) => {
    const userTransactions = transactions.filter((t) => t.user === name);
    const transactionCount = userTransactions.length;

    const totalAmount = userTransactions.reduce(
      (sum, t) => sum + t.amount,
      0
    );

    return {
      name: name.padEnd(12, "."),
      role: account.role.padEnd(8, "."),
      balance: String(account.balance).padStart(8, "0"),
      status: account.status,
      transactions: transactionCount,
      total: String(totalAmount).padStart(8, "0")
    };
  });

  return report;
}

function analyzeStatistics(accounts, transactions) {
  const values = Object.values(accounts);

  const totalBalance = values.reduce(
    (sum, account) => sum + account.balance,
    0
  );

  const activeCount = values.filter(
    (account) => account.status === "active"
  ).length;

  const adminCount = values.filter(
    (account) => account.role === "admin"
  ).length;

  const transactionStats = {
    total: transactions.length,

    completed: transactions.filter(
      (t) => t.status === "completed"
    ).length,

    pending: transactions.filter(
      (t) => t.status === "pending"
    ).length,

    totalAmount: transactions.reduce(
      (sum, t) => sum + t.amount,
      0
    )
  };

  return {
    accountStats: {
      totalBalance: String(totalBalance).padStart(10, "0"),
      activeAccounts: activeCount,
      adminAccounts: adminCount,
      totalAccounts: values.length
    },

    transactionStats
  };
}

async function buildFinalChallenge() {
  try {
    const [accounts, transactions] = await Promise.all([
      loadAccountData(),
      loadTransactions()
    ]);

    if (!validateAccounts(accounts)) {
      throw new Error("Invalid account data structure");
    }

    const report = processAccountReport(
      accounts,
      transactions
    );

    const stats = analyzeStatistics(
      accounts,
      transactions
    );

    const descriptors =
      Object.getOwnPropertyDescriptors(accounts);

    const totalDescriptors =
      Object.keys(descriptors).length;

    return {
      status: "success",

      accountReport: report,

      statistics: stats,

      metadata: {
        accountProperties: totalDescriptors,
        generatedAt: new Date().toISOString(),
        reportVersion: "1.0"
      }
    };

  } catch (error) {

    return {
      status: "error",
      message: error.message,
      timestamp: new Date().toISOString()
    };

  }
}

async function main() {
  const result = await buildFinalChallenge();

  console.log(
    "ES8 Final Challenge Result:",
    JSON.stringify(result, null, 2)
  );
}

main();