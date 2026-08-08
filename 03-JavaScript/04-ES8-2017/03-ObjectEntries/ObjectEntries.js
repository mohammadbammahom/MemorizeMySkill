// این درس به تبدیل ویژگی‌های object به جفت‌های key/value با Object.entries می‌پردازد
// این روش برای تحلیل داده‌ها، تولید گزارش و پردازش تنظیمات در Node.js بسیار کاربردی است

const permissions = {
  Muhammad: ["read", "write", "delete"],
  Ali: ["read", "write"],
  Bilal: ["read"],
  Aisha: ["read", "write", "update"],
  Hamza: ["read", "update"]
};

const entries = Object.entries(permissions);
console.log("Permission entries:", entries);

const usersWithDeleteAccess = Object.entries(permissions)
  .filter(([, permissionsList]) => permissionsList.includes("delete"))
  .map(([userName]) => userName);

console.log("Users with delete access:", usersWithDeleteAccess);

const summary = Object.entries(permissions)
  .map(([userName, permissionsList]) => ({
    userName,
    permissionCount: permissionsList.length,
    hasWrite: permissionsList.includes("write")
  }));

console.log("Permission summary:", summary);

const config = {
  appName: "Memorize",
  version: "1.0.0",
  mode: "production",
  retries: 3,
  timeout: 1500
};

const configEntries = Object.entries(config);
console.log("Config entries:", configEntries);

const enabledConfig = Object.entries(config)
  .filter(([, value]) => value !== "")
  .map(([key, value]) => `${key}: ${value}`);

console.log("Enabled config:", enabledConfig);

console.log("Object.keys example:", Object.keys(config));
console.log("Object.values example:", Object.values(config));
console.log("Object.entries example:", Object.entries(config));
