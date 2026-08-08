// این مثال برای بررسی عمیق‌تر ساختار object‌ها با Object.getOwnPropertyDescriptors نوشته شده است
// این تکنیک در پروژه‌های Node.js برای دیباگ، اعتبارسنجی تنظیمات و بررسی رفتار داده‌ها کاربرد دارد

function createUserProfile(name, role, isActive) {
  const profile = {
    name,
    role,
    isActive
  };

  Object.defineProperty(profile, "accountId", {
    value: `ACC-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
    enumerable: false,
    writable: false,
    configurable: false
  });

  return profile;
}

const userProfile = createUserProfile("Muhammad", "admin", true);
console.log("User profile:", userProfile);
console.log("Object.keys:", Object.keys(userProfile));
console.log("Object.values:", Object.values(userProfile));
console.log("Object.entries:", Object.entries(userProfile));
console.log("Single descriptor:", Object.getOwnPropertyDescriptor(userProfile, "name"));
console.log("All descriptors:", Object.getOwnPropertyDescriptors(userProfile));

const product = {
  name: "Laptop",
  price: 1200,
  category: "electronics"
};

Object.defineProperty(product, "sku", {
  value: "LT-2040",
  enumerable: true,
  writable: false,
  configurable: true
});

console.log("Product descriptor:", Object.getOwnPropertyDescriptor(product, "sku"));

const settings = {
  theme: "dark",
  language: "en",
  retryCount: 3,
  devMode: false
};

console.log("Settings descriptor summary:", Object.getOwnPropertyDescriptors(settings));

const protectedSettings = Object.getOwnPropertyDescriptors(settings);
console.log("Protected settings keys:", Object.keys(protectedSettings));

const isWritable = Object.getOwnPropertyDescriptor(userProfile, "name").writable;
console.log("Name writable:", isWritable);

const protectedAccountId = Object.getOwnPropertyDescriptor(userProfile, "accountId");
console.log("Account ID descriptor:", protectedAccountId);
