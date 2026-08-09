// این درس درباره‌ی بهبود JSON.stringify در ES10 است
// تمرکز روی JSON ایمن و well-formed برای داده‌های یونیکد است

function createPayload() {
  return {
    user: "Muhammad",
    note: "A lonely surrogate character: \uD800",
    report: "Sample report"
  };
}

function serializePayload(payload) {
  return JSON.stringify(payload);
}

function parsePayload(text) {
  return JSON.parse(text);
}

function safeSerialize(payload) {
  return JSON.stringify(payload, null, 2);
}

function main() {
  const payload = createPayload();
  const serialized = serializePayload(payload);
  const parsed = parsePayload(serialized);

  console.log("Serialized payload:", serialized);
  console.log("Parsed payload:", parsed);
  console.log("Safe serialized payload:", safeSerialize(payload));
}

main();
