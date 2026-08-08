// این مثال برای بررسی توصیف‌کننده‌های ویژگی‌ها در object نوشته شده است
// در پروژه‌های واقعی، این مفهوم برای بررسی ساختار داده‌ها و مدیریت تنظیمات کاربرد دارد

const userProfile = {
  name: "Muhammad",
  role: "admin",
  isActive: true
};

const descriptor = Object.getOwnPropertyDescriptor(userProfile, "name");
console.log("Name descriptor:", descriptor);

const descriptors = Object.getOwnPropertyDescriptors(userProfile);
console.log("All descriptors:", descriptors);

const protectedUser = {};
Object.defineProperty(protectedUser, "accountId", {
  value: "ACC-1001",
  enumerable: true,
  writable: false,
  configurable: false
});

console.log("Protected account ID:", protectedUser.accountId);

const config = {
  apiKey: "MEM-123",
  retryCount: 3,
  debugMode: false
};

console.log("Object.keys example:", Object.keys(config));
console.log("Object.values example:", Object.values(config));
console.log("Object.entries example:", Object.entries(config));

const allDescriptors = Object.getOwnPropertyDescriptors(config);
console.log("Config descriptors:", allDescriptors);

const audit = Object.entries(config).map(([key, value]) => ({ key, value }));
console.log("Audit summary:", audit);

console.log("Descriptor for accountId:", Object.getOwnPropertyDescriptor(protectedUser, "accountId"));
