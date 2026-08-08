// سیستم گزارش‌گیری ناهمزمان با ES8
// این مثال یک سیستم کاملی برای تولید گزارش‌های مدیریتی است

function fetchAdminUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Muhammad: { department: "Finance", salary: 5500 },
        AbuBakr: { department: "IT", salary: 5200 },
        Umar: { department: "HR", salary: 4800 }
      });
    }, 180);
  });
}

function fetchEmployeeCount() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Finance: 12,
        IT: 18,
        HR: 8,
        Operations: 15
      });
    }, 150);
  });
}

function fetchTransactionData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { type: "sales", amount: 2500 },
        { type: "expense", amount: -850 },
        { type: "sales", amount: 3200 },
        { type: "expense", amount: -1200 },
        { type: "sales", amount: 1800 }
      ]);
    }, 200);
  });
}

function generateAdminReport(admins) {
  const entries = Object.entries(admins);
  const report = entries.map(([name, info]) => {
    return {
      name: name.padEnd(15, "."),
      department: info.department.padEnd(12, "."),
      salary: String(info.salary).padStart(6, "0")
    };
  });
  return report;
}

function generateDepartmentReport(departments) {
  const values = Object.values(departments);
  const totalEmployees = values.reduce((sum, count) => sum + count, 0);
  
  const report = Object.entries(departments).map(([dept, count]) => {
    const percentage = Math.round((count / totalEmployees) * 100);
    return {
      department: dept.padEnd(13, "."),
      count: String(count).padStart(3, "0"),
      percentage: String(percentage).padStart(2, "0") + "%"
    };
  });
  
  return { report, total: totalEmployees };
}

function generateFinancialReport(transactions) {
  const sales = transactions
    .filter((t) => t.type === "sales")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const net = sales + expenses;

  return {
    sales: String(sales).padStart(8, "0"),
    expenses: String(Math.abs(expenses)).padStart(8, "0"),
    net: String(net).padStart(8, "0"),
    transactionCount: transactions.length
  };
}

async function buildAsyncReportingSystem() {
  try {
    const [admins, departments, transactions] = await Promise.all([
      fetchAdminUsers(),
      fetchEmployeeCount(),
      fetchTransactionData()
    ]);

    const adminReport = generateAdminReport(admins);
    const deptReport = generateDepartmentReport(departments);
    const financialReport = generateFinancialReport(transactions);

    const fullReport = {
      timestamp: new Date().toISOString(),
      adminManagement: {
        count: adminReport.length,
        details: adminReport
      },
      departmentOverview: {
        totalDepartments: deptReport.report.length,
        totalEmployees: deptReport.total,
        byDepartment: deptReport.report
      },
      financialSummary: financialReport,
      completedAt: new Date().toLocaleTimeString()
    };

    return fullReport;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
      timestamp: new Date().toISOString()
    };
  }
}

async function main() {
  const report = await buildAsyncReportingSystem();
  console.log("Management Report System:", JSON.stringify(report, null, 2));
}

main();
