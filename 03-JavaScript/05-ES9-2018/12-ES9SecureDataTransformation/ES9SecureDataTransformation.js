// این درس نشان می‌دهد که چگونه داده‌ی object را در ES9 به‌صورت امن و کنترل‌شده تبدیل کنیم
// تمرکز روی جداسازی داده‌ی عمومی و داده‌ی حساس است

function createUser() {
  return {
    id: 7,
    username: "Ali",
    password: "secret123",
    role: "admin",
    active: true,
    profile: {
      fullName: "Ali ibn Abi Talib",
      city: "Medina"
    },
    permissions: ["read", "write", "delete"]
  };
}

function createConfig() {
  return {
    theme: "dark",
    language: "en",
    notifications: true
  };
}

function sanitizeUser(user) {
  const { password, ...safeUser } = user;
  return safeUser;
}

function prepareApiResponse(user, config) {
  return {
    success: true,
    data: {
      ...sanitizeUser(user),
      config: {
        ...config,
        role: user.role
      }
    }
  };
}

function transformPermissions(user) {
  const { permissions, ...rest } = user;
  return {
    ...rest,
    permissionCount: permissions.length,
    permissions: permissions.slice(0, 2)
  };
}

function showShallowCopyBehavior(user) {
  const copy = { ...user };
  copy.profile.city = "Basra";
  return {
    originalCity: user.profile.city,
    copiedCity: copy.profile.city
  };
}

function compareMergeMethods(target, source) {
  return Object.assign({}, target, source);
}

function main() {
  const user = createUser();
  const config = createConfig();
  const apiResponse = prepareApiResponse(user, config);
  const transformed = transformPermissions(user);
  const shallowCopyResult = showShallowCopyBehavior(user);
  const mergedConfig = compareMergeMethods(config, { notifications: false, language: "ar" });

  console.log("API response:", apiResponse);
  console.log("Transformed user:", transformed);
  console.log("Shallow copy behavior:", shallowCopyResult);
  console.log("Merged config:", mergedConfig);
}

main();
