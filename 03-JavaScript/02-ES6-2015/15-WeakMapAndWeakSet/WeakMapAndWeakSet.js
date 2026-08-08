// WeakMap و WeakSet در ES6
// این درس نشان می‌دهد چگونه از مجموعه‌های ضعیف برای مدیریت حافظه استفاده کنیم.

const userCache = new WeakMap();

const userOne = { name: "Salman" };
const userTwo = { name: "Bilal" };

userCache.set(userOne, { lastLogin: "2026-08-01" });
userCache.set(userTwo, { lastLogin: "2026-08-02" });

console.log("=== Example 1: WeakMap store object keys ===");
console.log(userCache.get(userOne));

const permissions = new WeakSet();
permissions.add(userOne);

console.log("\n=== Example 2: WeakSet membership ===");
console.log(permissions.has(userOne));
console.log(permissions.has(userTwo));

console.log("\n=== Example 3: Weak collections are memory-safe for objects ===");
console.log("WeakMap size is not accessible and it does not prevent garbage collection.");

console.log("\n=== Summary ===");
console.log("WeakMap and WeakSet are useful for object-keyed caches and temporary associations.");