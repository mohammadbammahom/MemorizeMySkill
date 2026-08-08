// این درس نشان می‌دهد که عملگر توان در ES7 چگونه در سناریوهای واقعی کاربرد دارد.
// در برنامه‌های مالی، داده‌محور و مهندسی، محاسبه توان یک الگوی رایج و بسیار مهم است.

const transferRate = 1.08;
const years = 5;
const initialBalance = 2500;

const futureBalance = initialBalance * (transferRate ** years);
console.log("Future balance:", futureBalance.toFixed(2));

const userGrowth = 1.15;
const monthlyBoost = 2;
const totalImpact = (userGrowth ** monthlyBoost) * 100;
console.log("User growth impact:", totalImpact.toFixed(2));

const baseArea = 12;
const scaleFactor = 3;
const scaledArea = baseArea ** scaleFactor;
console.log("Scaled area:", scaledArea);

const securityKey = 2;
const keyStrength = securityKey ** 16;
console.log("Key strength:", keyStrength);

const demand = 10;
const demandMultiplier = 2;
const forecast = demand * (demandMultiplier ** 3);
console.log("Forecast demand:", forecast);

// این بخش نشان می‌دهد که توان‌گیری برای محاسبه‌های تکراری و مقیاس‌گذاری بسیار مناسب است.
const price = 90;
const discountFactor = 1.2;
const futurePrice = price * (discountFactor ** 2);
console.log("Future price:", futurePrice.toFixed(2));
