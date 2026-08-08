// این مثال برای مدیریت خطاهای ناهمزمان و بازگشت نتیجه‌ای امن در async/await نوشته شده است
// در Node.js، این الگو برای سرویس‌ها و APIها بسیار کاربردی است

function loadUser(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        Muhammad: { id: 1, role: "admin" },
        Ali: { id: 2, role: "editor" },
        Aisha: { id: 3, role: "admin" }
      };

      if (users[userName]) {
        resolve(users[userName]);
      } else {
        reject(new Error("User not found."));
      }
    }, 150);
  });
}

function loadPermissions(userRole) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const roles = {
        admin: ["read", "write", "delete"],
        editor: ["read", "write"],
        viewer: ["read"]
      };

      resolve(roles[userRole] || ["read"]);
    }, 120);
  });
}

async function getUserAccess(userName) {
  try {
    const user = await loadUser(userName);
    const permissions = await loadPermissions(user.role);

    return {
      userName,
      role: user.role,
      permissions,
      status: "ok"
    };
  } catch (error) {
    return {
      userName,
      status: "error",
      message: error.message
    };
  }
}

async function main() {
  const resultA = await getUserAccess("Muhammad");
  const resultB = await getUserAccess("Bilal");

  console.log("Result A:", resultA);
  console.log("Result B:", resultB);
}

main();
