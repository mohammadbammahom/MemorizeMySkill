// این درس درباره‌ی Optional Catch Binding در ES10 است
// هدف این است که متدهای try/catch را با مثال‌های عملی و قابل استفاده نشان دهیم

function loadConfiguration() {
  const config = { host: "api.local", port: 8080 };
  if (!config.host) {
    throw new Error("Host is missing");
  }
  return config;
}

function handleConfiguration() {
  try {
    const config = loadConfiguration();
    return "Configuration ready for " + config.host;
  } catch (error) {
    console.log("Configuration error:", error.message);
    return "Default configuration used";
  }
}

function validateUserInput(data) {
  if (!data.username) {
    throw new Error("Username is required");
  }
  return true;
}

function handleValidation(data) {
  try {
    validateUserInput(data);
    return "Validation passed";
  } catch {
    return "Validation failed";
  }
}

function parseReport(payload) {
  if (payload.length < 2) {
    throw new Error("Payload is too short");
  }
  return payload.toUpperCase();
}

function handleParsing(payload) {
  try {
    return parseReport(payload);
  } catch (error) {
    console.log("Parsing issue:", error.message);
    return "Fallback report";
  }
}

function main() {
  console.log("Configuration result:", handleConfiguration());
  console.log("Validation result:", handleValidation({ username: "Muhammad" }));
  console.log("Validation result:", handleValidation({}));
  console.log("Parsing result:", handleParsing("report"));
  console.log("Parsing result:", handleParsing("a"));
}

main();
