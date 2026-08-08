// این درس تمرکز بر محاسبات عددی در ES7 دارد.
// در این سناریوها از توان‌گیری، رشد و تحلیل عددی استفاده می‌شود.

const baseValue = 4;
const squareValue = baseValue ** 2;
console.log("Square value:", squareValue);

const cubeValue = baseValue ** 3;
console.log("Cube value:", cubeValue);

const capital = 5000;
const growthRate = 1.08;
const finalCapital = capital * (growthRate ** 4);
console.log("Final capital:", finalCapital.toFixed(2));

const percentage = 75;
const percentageResult = percentage ** 2 / 100;
console.log("Percentage result:", percentageResult.toFixed(2));

const muhammadScore = 80;
const aliScore = 90;
const average = (muhammadScore + aliScore) / 2;
console.log("Average score:", average);

let powerValue = 2;
powerValue **= 5;
console.log("Power assignment:", powerValue);

const statistics = [12, 18, 20, 16, 24];
const totalStatistics = statistics.reduce((sum, value) => sum + value, 0);
const averageStatistics = totalStatistics / statistics.length;
console.log("Average statistics:", averageStatistics.toFixed(2));

const comparisonOne = Math.pow(3, 4);
const comparisonTwo = 3 ** 4;
console.log("Math.pow result:", comparisonOne);
console.log("Exponentiation result:", comparisonTwo);

// این بخش نشان می‌دهد که ** در محاسبات عددی معمول به‌مراتب خواناتر است.
const budget = 2000;
const multiplier = 1.12;
const projectedBudget = budget * (multiplier ** 3);
console.log("Projected budget:", projectedBudget.toFixed(2));
