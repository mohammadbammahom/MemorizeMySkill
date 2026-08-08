// این مثال برای ترکیب چند عملیات ناهمزمان با async/await نوشته شده است
// نکته مهم این است که Promise و Promise.all قبل از ES8 وجود داشتند، اما ES8 تمرکز اصلی روی async/await است

function loadUserProfile(userName) {
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
        reject(new Error("User profile not found."));
      }
    }, 120);
  });
}

function loadUserOrders(userName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orders = {
        Muhammad: ["Order-101", "Order-102"],
        Ali: ["Order-201"],
        Bilal: ["Order-301", "Order-302"],
        Aisha: ["Order-401"]
      };

      resolve(orders[userName] || []);
    }, 180);
  });
}

function loadUserPermissions(userName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const permissions = {
        Muhammad: ["read", "write", "delete"],
        Ali: ["read", "write"],
        Bilal: ["read"],
        Aisha: ["read", "write", "update"]
      };

      resolve(permissions[userName] || []);
    }, 150);
  });
}

async function loadUserDashboard(userName) {
  const profile = await loadUserProfile(userName);
  const orders = await loadUserOrders(userName);
  const permissions = await loadUserPermissions(userName);

  return {
    userName,
    role: profile.role,
    orderCount: orders.length,
    permissions
  };
}

async function loadMultipleDashboards() {
  const dashboard1 = loadUserDashboard("Muhammad");
  const dashboard2 = loadUserDashboard("Ali");
  const dashboard3 = loadUserDashboard("Aisha");

  const results = await Promise.all([dashboard1, dashboard2, dashboard3]);
  return results;
}

async function main() {
  try {
    console.log("Loading dashboards...");
    const dashboards = await loadMultipleDashboards();
    console.log("Dashboards:", dashboards);
  } catch (error) {
    console.log("Dashboard loading error:", error.message);
  }
}

main();
