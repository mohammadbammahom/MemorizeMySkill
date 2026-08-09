// این درس نشان می‌دهد که چگونه یک سیستم اعتبارسنجی و parsing با ES9 RegExp ساخته شود
// هدف، جدا کردن validation، parsing، normalization و reporting است

function validateUsername(value) {
  const pattern = /^(?=.{3,20}$)(?=.*[A-Za-z])[A-Za-z0-9_]+$/;
  return {
    valid: pattern.test(value),
    field: "username",
    reason: pattern.test(value) ? "valid" : "invalid username format"
  };
}

function validateTransactionId(value) {
  const pattern = /^(TX|TR)-[A-Z0-9]{4,8}$/;
  return {
    valid: pattern.test(value),
    field: "transactionId",
    reason: pattern.test(value) ? "valid" : "invalid transaction id"
  };
}

function validateLogRecord(value) {
  const pattern = /(?<level>info|warning|error)\s+(?<message>.+)/;
  const match = value.match(pattern);
  return {
    valid: Boolean(match),
    field: "logRecord",
    reason: match ? "valid log record" : "invalid log record",
    details: match && match.groups ? match.groups : null
  };
}

function parseDate(value) {
  const pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
  const match = value.match(pattern);
  return match && match.groups ? match.groups : null;
}

function normalizeIdentifier(value) {
  const pattern = /\p{L}+/u;
  const letters = value.match(pattern) || [];
  return letters.join("");
}

function parseMultilineText(value) {
  const pattern = /start[\s\S]*?end/s;
  return value.match(pattern) ? value.match(pattern)[0] : null;
}

function runValidationSuite() {
  const checks = [
    validateUsername("AbdullahBinUmar"),
    validateTransactionId("TX-1234"),
    validateLogRecord("warning payment failed"),
    { valid: Boolean(parseDate("2024-09-01")), field: "date", reason: "parsed" },
    { valid: Boolean(normalizeIdentifier("Abdullah123")), field: "identifier", reason: "normalized" }
  ];

  return checks;
}

function main() {
  const results = runValidationSuite();
  console.log("Validation results:", results);
  console.log("Parsed date:", parseDate("2024-09-01"));
  console.log("Normalized identifier:", normalizeIdentifier("Abdullah123"));
  console.log("Multiline parse:", parseMultilineText("start\nline one\nline two\nend"));
}

main();
