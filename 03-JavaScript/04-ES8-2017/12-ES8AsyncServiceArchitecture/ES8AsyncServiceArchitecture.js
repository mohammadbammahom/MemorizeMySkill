// این مثال برای ساختاردهی سرویس‌های ناهمزمان با async/await و Promise.all نوشته شده است
// تمرکز اصلی روی طراحی سرویس‌های مجزا و ساختار منطقی برنامه است، نه روی ویژگی‌های ES8 جدید به‌تنهایی

function createUserService() {
  async function loadUser(userName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = {
          Muhammad: { id: 1, role: "admin" },
          Ali: { id: 2, role: "editor" },
          Bilal: { id: 3, role: "viewer" },
          Aisha: { id: 4, role: "admin" }
        };

        if (users[userName]) {
          resolve(users[userName]);
        } else {
          reject(new Error("User not found."));
        }
      }, 120);
    });
  }

  async function loadRoles() {
    return ["admin", "editor", "viewer"];
  }

  return {
    loadUser,
    loadRoles
  };
}

function createProductService() {
  async function loadProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          Laptop: { price: 1200, category: "electronics" },
          Phone: { price: 900, category: "electronics" },
          Book: { price: 45, category: "education" }
        });
      }, 140);
    });
  }

  return {
    loadProducts
  };
}

function createReportService() {
  async function buildSummary(user, products) {
    const productValues = Object.values(products);
    const totalProducts = productValues.reduce((sum, product) => sum + product.price, 0);

    return {
      userName: user.role,
      totalProducts,
      productCount: productValues.length
    };
  }

  return {
    buildSummary
  };
}

async function main() {
  try {
    const userService = createUserService();
    const productService = createProductService();
    const reportService = createReportService();

    const userPromise = userService.loadUser("Muhammad");
    const rolesPromise = userService.loadRoles();
    const productsPromise = productService.loadProducts();

    const [user, roles, products] = await Promise.all([
      userPromise,
      rolesPromise,
      productsPromise
    ]);

    const summary = await reportService.buildSummary(user, products);

    console.log("User:", user);
    console.log("Roles:", roles);
    console.log("Products:", products);
    console.log("Summary:", summary);
  } catch (error) {
    console.log("Service error:", error.message);
  }
}

main();
