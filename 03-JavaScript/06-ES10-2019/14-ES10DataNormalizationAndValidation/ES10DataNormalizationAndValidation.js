// این درس یک pipeline عملی برای پاک‌سازی، اعتبارسنجی و نرمال‌سازی داده‌ها می‌سازد
// تمرکز روی flat()، flatMap()، Object.entries()، Object.fromEntries()، trimStart() و trimEnd() است

function createRawData() {
  return [
    { id: 1, name: "  Muhammad  ", permissions: ["read", "write"], role: "admin" },
    { id: 2, name: "AbuBakr", permissions: ["read"], role: "seller" },
    { id: 3, name: "  Uthman  ", permissions: ["read", "write", "manage"], role: "manager" }
  ];
}

function cleanData(records) {
  return records.map((record) => ({
    ...record,
    name: record.name.trimStart().trimEnd(),
    permissions: record.permissions.flat()
  }));
}

function validateData(records) {
  return records.filter((record) => record.name && record.role);
}

function normalizeData(records) {
  return Object.fromEntries(
    records.map((record) => [record.name, {
      role: record.role,
      permissions: record.permissions
    }])
  );
}

function buildSummary(normalizedData) {
  const entries = Object.entries(normalizedData);
  return entries.map(([name, value]) => ({
    name,
    role: value.role,
    permissionCount: value.permissions.length
  }));
}

function main() {
  const rawData = createRawData();
  const cleaned = cleanData(rawData);
  const valid = validateData(cleaned);
  const normalized = normalizeData(valid);
  const summary = buildSummary(normalized);

  console.log("Cleaned data:", cleaned);
  console.log("Valid records:", valid);
  console.log("Normalized data:", normalized);
  console.log("Summary:", summary);
}

main();
