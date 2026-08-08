// ماژول‌های ES6 در Node.js و مرورگر
// این درس نشان می‌دهد چگونه مقادیر را صادر و وارد کنیم.

export const appName = "ES6 Module Demo";
export const version = "1.0.0";

export function getAppInfo() {
  return `${appName} v${version}`;
}

const description = `${appName} uses ES6 import/export syntax.`;
console.log("=== Example 1: module exports ===");
console.log(getAppInfo());
console.log(description);

console.log("\n=== Summary ===");
console.log("ES6 modules are the standard way to share code across files.");