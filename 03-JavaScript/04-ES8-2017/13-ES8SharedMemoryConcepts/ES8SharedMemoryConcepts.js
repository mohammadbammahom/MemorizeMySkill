// این درس درباره SharedArrayBuffer و اهمیت اشتراک حافظه در محیط‌های هم‌زمان است
// نکته مهم: SharedArrayBuffer یک مفهوم پیشرفته‌تر از آرایه‌های معمولی است و معمولاً در محیط‌های worker دیده می‌شود

const buffer = new SharedArrayBuffer(16);
const view = new Int32Array(buffer);

view[0] = 10;
view[1] = 20;
console.log("Initial values:", Array.from(view));

const sharedValue = Atomics.load(view, 0);
console.log("Loaded value:", sharedValue);

Atomics.add(view, 0, 5);
console.log("After add:", Array.from(view));

Atomics.store(view, 1, 50);
console.log("After store:", Array.from(view));

const replaced = Atomics.compareExchange(view, 0, 15, 999);
console.log("Compare exchange result:", replaced);
console.log("After compare exchange:", Array.from(view));

const byteLength = buffer.byteLength;
console.log("Buffer byte length:", byteLength);

const rawData = new Int32Array(buffer);
console.log("Raw data:", Array.from(rawData));

console.log("SharedArrayBuffer concept is advanced and should be used carefully.");
