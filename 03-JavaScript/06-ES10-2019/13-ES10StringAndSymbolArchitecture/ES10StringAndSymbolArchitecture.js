// این درس روی پاک‌سازی متن و کار با Symbol.description برای شناسایی داخلی تمرکز دارد
// هدف این است که داده‌ی ورودی و شناسه‌های داخلی را در برنامه‌های واقعی بهتر مدیریت کنیم

function normalizeName(value) {
  return value.trimStart().trimEnd();
}

function normalizeConfigValue(value) {
  return value.trimStart().trimEnd();
}

function createSymbolRegistry() {
  const internalId = Symbol("account-report");
  return {
    description: internalId.description,
    symbol: internalId
  };
}

function buildLogEntry(userName, productName, configValue) {
  return {
    userName: normalizeName(userName),
    productName: normalizeConfigValue(productName),
    configValue: normalizeConfigValue(configValue)
  };
}

function main() {
  const registry = createSymbolRegistry();
  const logEntry = buildLogEntry("  Muhammad  ", "  Book  ", "  api.local  ");

  console.log("Normalized log entry:", logEntry);
  console.log("Symbol description:", registry.description);
}

main();
