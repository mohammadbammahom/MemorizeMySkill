// این درس نشان می‌دهد که چگونه داده‌ی خام را به یک ساختار امن و مفید تبدیل کنیم
// تمرکز روی object rest، object spread، shallow copy و تبدیل داده‌ی سرویس است

function createUserRecord() {
  return {
    id: 21,
    name: "Talha",
    email: "talha@example.com",
    passwordHash: "abc123",
    role: "manager",
    permissions: ["read", "write"],
    internalNotes: "sensitive",
    profile: {
      city: "Kufa",
      active: true
    }
  };
}

function createConfig() {
  return {
    theme: "dark",
    language: "en",
    notifications: true
  };
}

function createPublicUser(user) {
  const { passwordHash, internalNotes, ...publicUser } = user;
  return publicUser;
}

function prepareApiResponse(user, config) {
  return {
    success: true,
    data: {
      ...createPublicUser(user),
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
    permissions: permissions.slice(0, 1)
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

function mergeConfig(target, source) {
  return Object.assign({}, target, source);
}

function main() {
  const user = createUserRecord();
  const config = createConfig();
  const apiResponse = prepareApiResponse(user, config);
  const transformed = transformPermissions(user);
  const shallowCopyResult = showShallowCopyBehavior(user);
  const mergedConfig = mergeConfig(config, { notifications: false, language: "ar" });

  console.log("API response:", apiResponse);
  console.log("Transformed user:", transformed);
  console.log("Shallow copy behavior:", shallowCopyResult);
  console.log("Merged config:", mergedConfig);
}

main();
