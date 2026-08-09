// این مثال نشان می‌دهد که چگونه داده‌های object را در ES9 به‌صورت معماری‌شده پردازش کنیم
// از Object Spread و Object Rest برای تبدیل داده و جلوگیری از mutation استفاده می‌کنیم

function createUserProfile() {
  return {
    id: 101,
    name: "Muhammad",
    role: "admin",
    email: "muhammad@example.com",
    password: "secret",
    active: true,
    department: "Finance"
  };
}

function createDefaultConfig() {
  return {
    theme: "dark",
    language: "en",
    notifications: true,
    timeout: 5000
  };
}

function sanitizeUser(user) {
  const { password, ...safeUser } = user;
  return safeUser;
}

function buildPublicUser(user, config) {
  return {
    ...sanitizeUser(user),
    ...config,
    status: user.active ? "active" : "inactive"
  };
}

function buildApiResponse(user, config) {
  const publicUser = buildPublicUser(user, config);
  return {
    success: true,
    data: publicUser,
    meta: {
      generatedAt: new Date().toISOString(),
      source: "ES9 object architecture"
    }
  };
}

function mergeConfig(defaultConfig, userConfig) {
  return {
    ...defaultConfig,
    ...userConfig
  };
}

function main() {
  const user = createUserProfile();
  const defaultConfig = createDefaultConfig();
  const userConfig = {
    timeout: 8000,
    notifications: false
  };

  const mergedConfig = mergeConfig(defaultConfig, userConfig);
  const publicUser = buildPublicUser(user, mergedConfig);
  const response = buildApiResponse(user, mergedConfig);

  console.log("Public user:", publicUser);
  console.log("API response:", response);
}

main();
