// این درس یک ابزار کوچک برای دیباگ و گزارش‌گیری در زمان اجرا می‌سازد
// تمرکز روی بهبودهای ES10 در حوزه‌ی runtime و ابزارسازی است

function createReportContext() {
  return {
    environment: "Node.js",
    timestamp: "2026-08-09"
  };
}

function collectErrors(operations) {
  const errors = [];
  for (const operation of operations) {
    try {
      operation();
    } catch {
      errors.push("Error captured");
    }
  }
  return errors;
}

function inspectFunction(fn) {
  return {
    name: fn.name,
    source: fn.toString()
  };
}

function buildSerializationReport(payload) {
  const text = JSON.stringify(payload);
  return {
    text: text,
    length: text.length
  };
}

function formatRuntimeReport(report) {
  return [
    "Runtime report",
    "Environment: " + report.environment,
    "Timestamp: " + report.timestamp,
    "Error count: " + report.errorCount,
    "Function inspection: " + report.functionInspection.name,
    "Serialization length: " + report.serializationLength
  ].join("\n");
}

function main() {
  const context = createReportContext();
  const operations = [
    () => { throw new Error("Validation failed"); },
    () => { return true; }
  ];
  const errors = collectErrors(operations);
  const functionInfo = inspectFunction(function inspectRuntime() {
    return true;
  });
  const serialization = buildSerializationReport({ user: "Muhammad", role: "admin" });

  const report = {
    environment: context.environment,
    timestamp: context.timestamp,
    errorCount: errors.length,
    functionInspection: functionInfo,
    serializationLength: serialization.length
  };

  console.log(formatRuntimeReport(report));
  console.log("Serialization payload:", serialization.text);
}

main();
