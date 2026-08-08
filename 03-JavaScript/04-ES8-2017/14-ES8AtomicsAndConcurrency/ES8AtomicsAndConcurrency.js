// این درس به بررسی Atomics و مسائل هم‌زمانی در SharedArrayBuffer می‌پردازد
// نباید فکر کنیم که آرایه‌های معمولی، thread-safe هستند؛ این مفهوم مربوط به حافظه اشتراکی است

const buffer = new SharedArrayBuffer(16);
const values = new Int32Array(buffer);

values[0] = 10;
values[1] = 20;

console.log("Before:", Array.from(values));

const loadedValue = Atomics.load(values, 0);
console.log("Loaded value:", loadedValue);

const addedValue = Atomics.add(values, 0, 5);
console.log("Add result:", addedValue);
console.log("After add:", Array.from(values));

const subtractedValue = Atomics.sub(values, 1, 3);
console.log("Subtract result:", subtractedValue);
console.log("After subtract:", Array.from(values));

const exchangedValue = Atomics.exchange(values, 0, 100);
console.log("Exchange result:", exchangedValue);
console.log("After exchange:", Array.from(values));

const compared = Atomics.compareExchange(values, 0, 100, 333);
console.log("Compare exchange result:", compared);
console.log("After compare exchange:", Array.from(values));

const bitwiseAnd = Atomics.and(values, 0, 7);
console.log("And result:", bitwiseAnd);
console.log("After and:", Array.from(values));

const bitwiseOr = Atomics.or(values, 0, 8);
console.log("Or result:", bitwiseOr);
console.log("After or:", Array.from(values));

const bitwiseXor = Atomics.xor(values, 0, 3);
console.log("Xor result:", bitwiseXor);
console.log("After xor:", Array.from(values));

console.log("Atomics prevent unsafe read-modify-write sequences in shared memory.");
