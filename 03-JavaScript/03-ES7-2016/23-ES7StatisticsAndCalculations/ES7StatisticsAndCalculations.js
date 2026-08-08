// این درس به محاسبات آماری و تبدیل داده‌ها با ES7 می‌پردازد.
// سناریوها شامل نمره‌ها، رشد، رتبه‌بندی و گزارش‌گیری هستند.

function calculateGrowth(startValue, growthRate, years) {
  return startValue * (growthRate ** years);
}

function calculateAverage(scores) {
  const total = scores.reduce((sum, value) => sum + value, 0);
  return total / scores.length;
}

function rankStudents(scores) {
  return scores
    .map((score, index) => ({ name: ["Muhammad", "Ali", "Bilal", "Aisha", "Hamza"][index], score }))
    .sort((a, b) => b.score - a.score);
}

const scoreList = [80, 92, 70, 88, 95];
const averageScore = calculateAverage(scoreList);
console.log("Average score:", averageScore.toFixed(2));

const growthResult = calculateGrowth(2000, 1.12, 3);
console.log("Growth result:", growthResult.toFixed(2));

const squaredScores = scoreList.map((score) => score ** 2);
console.log("Squared scores:", squaredScores);

const performance = [
  { name: "Muhammad", score: 88 },
  { name: "Ali", score: 95 },
  { name: "Bilal", score: 74 },
  { name: "Aisha", score: 90 }
];

const rankedStudents = rankStudents(performance.map((student) => student.score));
console.log("Ranked students:", rankedStudents);

const numbers = [2, 3, 4, 5];
let powerValue = 2;
powerValue **= 4;
console.log("Power value:", powerValue);

const report = performance.map((student) => ({
  name: student.name,
  score: student.score,
  adjustedScore: student.score ** 2,
  message: student.score >= averageScore ? "above average" : "below average"
}));
console.log("Performance report:", report);
