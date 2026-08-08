// این مثال برای درک جریان غیرهمزمان و استفاده از async/await نوشته شده است
// کدهای این درس به‌صورت عملی و برای پروژه‌های Node.js و React آماده شده‌اند

function fetchUserProfile(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        101: { id: 101, name: "Muhammad", role: "admin" },
        102: { id: 102, name: "Ali", role: "editor" },
        103: { id: 103, name: "Bilal", role: "viewer" }
      };

      if (users[userId]) {
        resolve(users[userId]);
      } else {
        reject(new Error("User not found."));
      }
    }, 150);
  });
}

function fetchUserOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orders = {
        101: ["Order-101", "Order-102"],
        102: ["Order-201"],
        103: ["Order-301", "Order-302", "Order-303"]
      };

      resolve(orders[userId] || []);
    }, 220);
  });
}

async function loadDashboard(userId) {
  const user = await fetchUserProfile(userId);
  const orders = await fetchUserOrders(user.id);

  return {
    userName: user.name,
    role: user.role,
    orderCount: orders.length,
    orders
  };
}

async function main() {
  try {
    console.log("Loading dashboard...");
    const dashboard = await loadDashboard(101);

    console.log("User:", dashboard.userName);
    console.log("Role:", dashboard.role);
    console.log("Order count:", dashboard.orderCount);
    console.log("Orders:", dashboard.orders.join(", "));
  } catch (error) {
    console.log("Dashboard error:", error.message);
  }
}

main();
