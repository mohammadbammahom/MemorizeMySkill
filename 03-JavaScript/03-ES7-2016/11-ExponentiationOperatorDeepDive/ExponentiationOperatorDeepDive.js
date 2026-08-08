// این درس عمق کاربردی عملگر توان در ES7 را نشان می‌دهد.
// با استفاده از این عملگر می‌توان محاسبات عددی تمیزتر، کوتاه‌تر و خواناتر انجام داد.

const baseValue = 3;
const exponentValue = 4;
const directPower = baseValue ** exponentValue;
console.log("Direct power:", directPower);

const areaA = 5;
const areaB = 2;
const roomVolume = areaA ** areaB;
console.log("Room volume:", roomVolume);

const capital = 1500;
const growthRate = 1.08;
const totalCapital = capital * (growthRate ** 3);
console.log("Total capital:", totalCapital.toFixed(2));

function calculateGrowth(initialAmount, yearlyRate, years) {
  return initialAmount * (yearlyRate ** years);
}

const muhammadSavings = calculateGrowth(2000, 1.12, 4);
const aliSavings = calculateGrowth(2500, 1.09, 3);
console.log("Muhammad savings:", muhammadSavings.toFixed(2));
console.log("Ali savings:", aliSavings.toFixed(2));

const expressionValue = ((2 + 3) ** 2) * 4;
console.log("Expression value:", expressionValue);

const comparisonValue = Math.pow(4, 3);
console.log("Math.pow result:", comparisonValue);
console.log("Exponentiation result:", 4 ** 3);

// این مثال نشان می‌دهد که ** در بعضی محاسبات نسبت به Math.pow خوانایی بهتری دارد.
const userScore = 7;
const scorePower = userScore ** 2 + 10;
console.log("Score power:", scorePower);

const estimation = 9 ** 2;
console.log("Estimation:", estimation);

const formulaResult = (5 + 2) ** 3;
console.log("Formula result:", formulaResult);
