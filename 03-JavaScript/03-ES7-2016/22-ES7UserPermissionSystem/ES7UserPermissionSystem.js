// این درس یک سیستم مجوز کاربر ساده اما واقعی را نشان می‌دهد.
// در برنامه‌های Front-End و Node.js، بررسی مجوزها بخش مهمی از منطق نرم‌افزار است.

function hasAccess(userPermissions, requiredPermission) {
  return userPermissions.includes(requiredPermission);
}

function getAccessMessage(user) {
  const adminPermissions = ["read", "write", "delete", "update", "approve"];
  const editorPermissions = ["read", "write", "update"];
  const viewerPermissions = ["read"];

  if (user.role === "admin") {
    return hasAccess(adminPermissions, user.permission) ? "Admin access granted" : "Admin access denied";
  }

  if (user.role === "editor") {
    return hasAccess(editorPermissions, user.permission) ? "Editor access granted" : "Editor access denied";
  }

  if (user.role === "viewer") {
    return hasAccess(viewerPermissions, user.permission) ? "Viewer access granted" : "Viewer access denied";
  }

  return "Unknown role";
}

const users = [
  { name: "Muhammad", role: "admin", permission: "delete" },
  { name: "Ali", role: "editor", permission: "update" },
  { name: "Bilal", role: "viewer", permission: "read" },
  { name: "Aisha", role: "editor", permission: "approve" },
  { name: "Hamza", role: "admin", permission: "approve" },
  { name: "Usamah", role: "viewer", permission: "write" }
];

for (const user of users) {
  console.log(user.name + " role:", getAccessMessage(user));
}

const adminRole = ["admin", "editor", "viewer"];
console.log("Role check:", adminRole.includes("editor"));
console.log("Role check:", adminRole.includes("support"));

const protectedActions = ["approve", "delete", "export"];
console.log("Protected action allowed:", protectedActions.includes("delete"));
console.log("Protected action allowed:", protectedActions.includes("download"));

const productAccess = ["read", "write"];
console.log("Product access:", hasAccess(productAccess, "write"));
