// این درس نشان می‌دهد که چگونه می‌توان با ویژگی‌های ES7 و منطق JavaScript، الگوهای کسب‌وکار کاربردی ساخت.
// سناریوها شامل قیمت، تخفیف، امتیاز، مجوزها و قوانین محصولات هستند.

function calculateDiscount(price, rate) {
  return price * (1 - rate);
}

function calculateScore(baseScore, multiplier) {
  return baseScore * (multiplier ** 2);
}

function canAccess(userPermissions, requiredPermission) {
  return userPermissions.includes(requiredPermission);
}

function applyRule(product, userRole) {
  const allowedRoles = ["admin", "editor"];
  if (product.isFeatured && allowedRoles.includes(userRole)) {
    return "approved";
  }
  return "pending";
}

const priceList = [
  { product: "Laptop", price: 1200, discountRate: 0.1 },
  { product: "Phone", price: 800, discountRate: 0.15 },
  { product: "Tablet", price: 600, discountRate: 0.08 }
];

for (const item of priceList) {
  const finalPrice = calculateDiscount(item.price, item.discountRate);
  console.log(item.product + " final price:", finalPrice.toFixed(2));
}

const userPermissions = ["read", "write", "delete"];
console.log("Delete access:", canAccess(userPermissions, "delete"));
console.log("Export access:", canAccess(userPermissions, "export"));

const productRules = [
  { name: "Laptop", isFeatured: true },
  { name: "Notebook", isFeatured: false },
  { name: "Tablet", isFeatured: true }
];

const userRole = "admin";
for (const product of productRules) {
  console.log(product.name + " rule:", applyRule(product, userRole));
}

const muhammadScore = calculateScore(80, 1.2);
const aliScore = calculateScore(90, 1.1);
console.log("Muhammad score:", muhammadScore.toFixed(2));
console.log("Ali score:", aliScore.toFixed(2));

const validRoles = ["admin", "editor", "viewer"];
console.log("Editor role valid:", validRoles.includes("editor"));
console.log("Support role valid:", validRoles.includes("support"));

let totalPrice = 2;
totalPrice **= 4;
console.log("Total price power:", totalPrice);
