// پروژه‌ی نهایی جامع ES8
// سیستم تجزیه‌تحلیل فروش و کسب‌و‌کار

function loadCompanyUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Muhammad: { department: "Sales", salary: 5000, hireDate: "2023-01-15" },
        Ali: { department: "Marketing", salary: 4500, hireDate: "2023-02-20" },
        Uthman: { department: "Sales", salary: 4800, hireDate: "2023-03-10" },
        Aisha: { department: "Finance", salary: 5500, hireDate: "2022-12-05" },
        Bilal: { department: "Operations", salary: 4200, hireDate: "2023-05-08" }
      });
    }, 250);
  });
}

function loadProductCatalog() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        laptop: { category: "Electronics", price: 1500, stock: 25 },
        phone: { category: "Electronics", price: 800, stock: 50 },
        tablet: { category: "Electronics", price: 600, stock: 30 },
        keyboard: { category: "Accessories", price: 120, stock: 100 },
        mouse: { category: "Accessories", price: 80, stock: 150 }
      });
    }, 200);
  });
}

function loadSalesTransactions() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { product: "laptop", quantity: 2, amount: 3000, seller: "Muhammad" },
        { product: "phone", quantity: 3, amount: 2400, seller: "Ali" },
        { product: "tablet", quantity: 1, amount: 600, seller: "Uthman" },
        { product: "keyboard", quantity: 5, amount: 600, seller: "Muhammad" },
        { product: "mouse", quantity: 10, amount: 800, seller: "Ali" },
        { product: "laptop", quantity: 1, amount: 1500, seller: "Uthman" }
      ]);
    }, 220);
  });
}

function validateData(users, products, transactions) {
  const validUsers = users && typeof users === "object";
  const validProducts = products && typeof products === "object";
  const validTransactions = Array.isArray(transactions);
  
  if (!validUsers || !validProducts || !validTransactions) {
    throw new Error("Invalid data structure");
  }
  
  return true;
}

function processDepartmentStats(users) {
  const departments = {};
  
  Object.entries(users).forEach(([name, info]) => {
    if (!departments[info.department]) {
      departments[info.department] = {
        count: 0,
        totalSalary: 0,
        members: []
      };
    }
    departments[info.department].count += 1;
    departments[info.department].totalSalary += info.salary;
    departments[info.department].members.push(name);
  });
  
  return departments;
}

function processSalesStats(transactions, products) {
  const stats = {
    totalRevenue: 0,
    totalQuantity: 0,
    byProduct: {},
    bySeller: {}
  };
  
  transactions.forEach((t) => {
    stats.totalRevenue += t.amount;
    stats.totalQuantity += t.quantity;
    
    if (!stats.byProduct[t.product]) {
      stats.byProduct[t.product] = { count: 0, revenue: 0, quantity: 0 };
    }
    stats.byProduct[t.product].count += 1;
    stats.byProduct[t.product].revenue += t.amount;
    stats.byProduct[t.product].quantity += t.quantity;
    
    if (!stats.bySeller[t.seller]) {
      stats.bySeller[t.seller] = { count: 0, revenue: 0 };
    }
    stats.bySeller[t.seller].count += 1;
    stats.bySeller[t.seller].revenue += t.amount;
  });
  
  return stats;
}

function generateDetailedReport(users, products, transactions) {
  const deptStats = processDepartmentStats(users);
  const salesStats = processSalesStats(transactions, products);
  
  const entries = Object.entries(users);
  const userReport = entries.map(([name, info]) => ({
    name: name.padEnd(12, "."),
    dept: info.department.padEnd(12, "."),
    salary: String(info.salary).padStart(6, "0"),
    hired: info.hireDate
  }));
  
  const productEntries = Object.entries(products);
  const productReport = productEntries.map(([name, info]) => ({
    name: name.padEnd(10, "."),
    category: info.category.padEnd(12, "."),
    price: String(info.price).padStart(6, "0"),
    stock: String(info.stock).padStart(3, "0")
  }));
  
  const sellerReport = Object.entries(salesStats.bySeller).map(([name, data]) => ({
    seller: name.padEnd(12, "."),
    sales: String(data.count).padStart(2, "0"),
    revenue: String(data.revenue).padStart(8, "0")
  }));
  
  return {
    userManagement: {
      totalUsers: users.length || Object.keys(users).length,
      byDepartment: deptStats,
      details: userReport
    },
    productCatalog: {
      totalProducts: Object.keys(products).length,
      totalValue: Object.values(products).reduce((sum, p) => sum + (p.stock * p.price), 0),
      details: productReport
    },
    salesAnalysis: {
      totalRevenue: String(salesStats.totalRevenue).padStart(8, "0"),
      totalQuantity: String(salesStats.totalQuantity).padStart(4, "0"),
      transactionCount: transactions.length,
      byProduct: salesStats.byProduct,
      bySeller: sellerReport
    },
    metadata: {
      generatedAt: new Date().toISOString(),
      reportVersion: "1.0",
      userCount: Object.keys(users).length
    }
  };
}

async function buildComprehensiveSystem() {
  try {
    const [users, products, transactions] = await Promise.all([
      loadCompanyUsers(),
      loadProductCatalog(),
      loadSalesTransactions()
    ]);
    
    validateData(users, products, transactions);
    
    const report = generateDetailedReport(users, products, transactions);
    
    return {
      status: "success",
      data: report
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
  const result = await buildComprehensiveSystem();
  console.log("Comprehensive Business Analytics System:");
  console.log(JSON.stringify(result, null, 2));
}

main();
