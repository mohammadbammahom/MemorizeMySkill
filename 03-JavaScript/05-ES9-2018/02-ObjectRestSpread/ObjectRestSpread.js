// Object Rest و Object Spread در ES9
// کپی کردن، ترکیب و تغییر objects به‌صورت ایمن

// Object Spread - کپی کردن properties
const userMuhammad = {
  id: 1,
  name: "Muhammad",
  role: "admin",
  email: "muhammad@example.com"
};

const userAli = {
  id: 2,
  name: "Ali",
  role: "user",
  email: "ali@example.com"
};

console.log("Object Spread Examples:");
console.log("Original user:", userMuhammad);

// ایجاد کپی جدید
const userCopy = { ...userMuhammad };
console.log("Copied user:", userCopy);

// ترکیب دو object
const mergedUsers = { ...userMuhammad, ...userAli };
console.log("Merged users:", mergedUsers);

// Override properties
const updatedUser = { ...userMuhammad, role: "moderator", status: "active" };
console.log("Updated user:", updatedUser);

// Object Rest - استخراج selected properties
console.log("\nObject Rest Examples:");

const userData = {
  name: "Uthman",
  email: "uthman@example.com",
  phone: "123-456-7890",
  address: "123 Main St",
  city: "Cairo"
};

const { name, email, ...rest } = userData;
console.log("Name:", name);
console.log("Email:", email);
console.log("Rest:", rest);

// منطق تفاوت - excluding specific properties
const { phone, ...userWithoutPhone } = userData;
console.log("User without phone:", userWithoutPhone);

// ترکیب Rest و Spread
const original = {
  firstName: "Aisha",
  lastName: "Muhammad",
  department: "Finance",
  salary: 5500,
  status: "active"
};

const { salary, ...safeData } = original;
const publicProfile = { ...safeData, publicStatus: "verified" };
console.log("Public profile (salary excluded):", publicProfile);

// Object Rest در function parameters
function processUserData({ name, email, ...metadata }) {
  console.log("\nFunction with Object Rest:");
  console.log(`Processing: ${name} (${email})`);
  console.log("Additional metadata:", metadata);
}

processUserData({
  name: "Bilal",
  email: "bilal@example.com",
  phone: "555-1234",
  department: "IT",
  experience: 5
});

// Configuration merging
const defaultConfig = {
  timeout: 5000,
  retries: 3,
  logging: false,
  format: "json"
};

const userConfig = {
  timeout: 10000,
  logging: true
};

const finalConfig = { ...defaultConfig, ...userConfig };
console.log("\nConfiguration merging:");
console.log("Default:", defaultConfig);
console.log("User config:", userConfig);
console.log("Final config:", finalConfig);

// Immutable-style object updates
const product = {
  id: 101,
  name: "Laptop",
  price: 1500,
  stock: 10,
  category: "Electronics"
};

console.log("\nImmutable updates:");
console.log("Original product:", product);

// Update without mutating original
const updatedProduct = {
  ...product,
  price: 1400,
  stock: 8
};
console.log("Updated product:", updatedProduct);
console.log("Original unchanged:", product);

// Deep object processing
const userProfiles = {
  user1: { name: "Hamza", status: "active" },
  user2: { name: "Khadijah", status: "inactive" },
  user3: { name: "Fatimah", status: "active" }
};

const { user1, ...otherUsers } = userProfiles;
console.log("\nDeep object processing:");
console.log("First user:", user1);
console.log("Other users:", otherUsers);

// API response handling
const apiResponse = {
  statusCode: 200,
  timestamp: new Date().toISOString(),
  data: {
    userId: 1,
    userName: "Muhammad",
    userEmail: "muhammad@api.example.com"
  }
};

const { statusCode, data, ...metadata } = apiResponse;
console.log("\nAPI response handling:");
console.log("Status:", statusCode);
console.log("Data:", data);
console.log("Metadata:", metadata);
