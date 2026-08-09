// این درس یک سیستم عملی برای تبدیل داده‌های تودرتو و آلوده به متن را نشان می‌دهد
// تمرکز روی flat()، flatMap()، trimStart()، trimEnd() و Object.entries() است

function createDataSet() {
  return [
    { id: 1, name: "  Muhammad  ", categories: [["sales"], ["vip"]], permissions: { read: true, write: true } },
    { id: 2, name: "AbuBakr", categories: [["support"]], permissions: { read: true, write: false } },
    { id: 3, name: "  Uthman  ", categories: [["sales", "support"]], permissions: { read: false, write: true } }
  ];
}

function cleanRecord(record) {
  return {
    id: record.id,
    name: record.name.trimStart().trimEnd(),
    categories: record.categories.flat(),
    permissions: Object.entries(record.permissions)
      .filter((entry) => entry[1])
      .map((entry) => entry[0])
  };
}

function buildReport(records) {
  const allCategories = records.flatMap((record) => record.categories);
  const totalPermissions = records.reduce((sum, record) => sum + record.permissions.length, 0);
  return {
    totalRecords: records.length,
    totalCategories: allCategories.length,
    totalPermissions: totalPermissions,
    categories: Array.from(new Set(allCategories))
  };
}

function main() {
  const data = createDataSet();
  const cleanedRecords = data.map(cleanRecord);
  const report = buildReport(cleanedRecords);

  console.log("Cleaned records:", cleanedRecords);
  console.log("Report:", report);
}

main();
