// این درس نشان می‌دهد که چگونه داده‌ی متنی را با RegExp در ES9 استخراج کنیم
// تمرکز روی استخراج ساختارمند از متن واقعی و محدودیت‌های RegExp است

function extractTransactionId(text) {
  const pattern = /transaction:(?<id>[A-Z0-9-]+)/;
  const match = text.match(pattern);
  return match && match.groups ? match.groups.id : null;
}

function extractUsername(text) {
  const pattern = /user:(?<username>\w+)/;
  const match = text.match(pattern);
  return match && match.groups ? match.groups.username : null;
}

function parseLogEntry(text) {
  const pattern = /(?<=level:)(info|warning|error)/;
  const match = text.match(pattern);
  return match ? match[0] : null;
}

function extractPrices(text) {
  const pattern = /\bprice:(?<price>\d+(?:\.\d{1,2})?)/g;
  const matches = [];
  let match;

  while ((match = pattern.exec(text)) !== null) {
    matches.push(match.groups.price);
  }

  return matches;
}

function detectUnicodeLetters(text) {
  const pattern = /\p{L}+/u;
  return text.match(pattern) || [];
}

function parseMultilineData(text) {
  const pattern = /start[\s\S]*?end/s;
  return text.match(pattern) ? text.match(pattern)[0] : null;
}

function main() {
  const transactionText = "Transaction received transaction:TX-1001";
  const userText = "User update user:AbdullahBinUmar";
  const logText = "level:warning message follows";
  const priceText = "price:15.50 and price:20";
  const unicodeText = "مرحبا Abdullah و 123";
  const multilineText = "start\nitem one\nitem two\nend";

  console.log("Transaction id:", extractTransactionId(transactionText));
  console.log("Username:", extractUsername(userText));
  console.log("Log level:", parseLogEntry(logText));
  console.log("Prices:", extractPrices(priceText));
  console.log("Unicode letters:", detectUnicodeLetters(unicodeText));
  console.log("Multiline block:", parseMultilineData(multilineText));
}

main();
