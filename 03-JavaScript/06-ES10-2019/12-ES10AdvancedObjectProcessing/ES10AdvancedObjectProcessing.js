// این درس روی بازسازی و تبدیل آبجکت‌ها با Object.entries() و Object.fromEntries() تمرکز دارد
// هدف این است که داده‌های آبجکتی را برای API و گزارش‌گیری آماده کنیم

function createPermissions() {
  return {
    read: true,
    write: false,
    manage: true
  };
}

function transformPermissions(permissions) {
  return Object.entries(permissions)
    .filter((entry) => entry[1])
    .map((entry) => [entry[0], entry[1]])
    .reduce((result, entry) => {
      result[entry[0]] = entry[1];
      return result;
    }, {});
}

function renameKeys(config) {
  return Object.entries(config)
    .map(([key, value]) => [key.toUpperCase(), value])
    .reduce((result, [key, value]) => {
      result[key] = value;
      return result;
    }, {});
}

function buildReport(users) {
  return Object.fromEntries(
    users.map((user) => [user.name, user.role])
  );
}

function main() {
  const permissions = createPermissions();
  const activePermissions = transformPermissions(permissions);
  const renamedConfig = renameKeys({ host: "api.local", port: 8080 });
  const report = buildReport([
    { name: "Muhammad", role: "admin" },
    { name: "AbuBakr", role: "seller" }
  ]);

  console.log("Active permissions:", activePermissions);
  console.log("Renamed config:", renamedConfig);
  console.log("Report:", report);
}

main();
