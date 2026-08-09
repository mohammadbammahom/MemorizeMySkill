// این مثال نشان می‌دهد که چگونه چرخه‌ی عمر Promise را در ES9 مدیریت کنیم
// از Promise.prototype.finally() برای cleanup و loading state استفاده می‌کنیم

function loadUserProfile(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "AbuBakr", role: "manager" });
      } else {
        reject(new Error("Invalid user id"));
      }
    }, 300);
  });
}

function loadOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, total: 120 }, { id: 2, total: 80 }]);
    }, 250);
  });
}

function buildLoadingState() {
  return {
    loading: true,
    message: "Loading profile"
  };
}

async function loadDashboard(userId) {
  const loadingState = buildLoadingState();
  console.log("Loading state:", loadingState);

  try {
    const [profile, orders] = await Promise.all([
      loadUserProfile(userId),
      loadOrders()
    ]);

    return {
      profile,
      orders,
      status: "success"
    };
  } catch (error) {
    return {
      status: "error",
      message: error.message
    };
  } finally {
    console.log("Cleanup complete: loading state removed");
  }
}

async function main() {
  const result = await loadDashboard(5);
  console.log("Dashboard result:", result);
}

main();
