// این پروژه‌ی عملی آخرین درس است و یک جریان کامل پردازش داده را نشان می‌دهد
// تمرکز روی clean، validate، normalize، statistics و report است

function createRawData() {
  return [
    { id: 1, name: "  Muhammad  ", role: "admin", permissions: [["read"], ["write"]], category: "sales" },
    { id: 2, name: "AbuBakr", role: "seller", permissions: [["read"]], category: "support" },
    { id: 3, name: "  Uthman  ", role: "manager", permissions: [["read"], ["write"], ["manage"]], category: "sales" }
  ];
}

function cleanRecords(records) {
  return records.map((record) => ({
    id: record.id,
    name: record.name.trimStart().trimEnd(),
    role: record.role.trimStart().trimEnd(),
    permissions: record.permissions.flat(),
    category: record.category.trimStart().trimEnd()
  }));
}

function validateRecords(records) {
  return records.filter((record) => record.name && record.role && record.category);
}

function normalizeRecords(records) {
  return Object.fromEntries(
    records.map((record) => [record.name, {
      role: record.role,
      category: record.category,
      permissions: record.permissions
    }])
  );
}

function buildStatistics(normalizedRecords) {
  const entries = Object.entries(normalizedRecords);
  const categories = entries.map((entry) => entry[1].category);
  return {
    totalRecords: entries.length,
    uniqueCategories: Array.from(new Set(categories)),
    roles: entries.map((entry) => entry[1].role)
  };
}

function buildReport(records, normalizedRecords) {
  const stats = buildStatistics(normalizedRecords);
  return {
    records: records.length,
    statistics: stats
  };
}

function main() {
  const rawData = createRawData();
  const cleaned = cleanRecords(rawData);
  const valid = validateRecords(cleaned);
  const normalized = normalizeRecords(valid);
  const report = buildReport(valid, normalized);

  console.log("Cleaned records:", cleaned);
  console.log("Normalized records:", normalized);
  console.log("Report:", report);
}

main();
