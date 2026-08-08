// Promiseها در ES6
// این درس نشان می‌دهد چگونه عملیات غیرهمزمان را با Promise مدیریت کنیم.

const fetchData = () => {
  return new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
      if (success) {
        resolve({ user: "Muhammad", score: 88 });
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 100);
  });
};

console.log("=== Example 1: create and use Promise ===");
fetchData()
  .then(result => {
    console.log("Data received:", result);
    return result.score;
  })
  .then(score => {
    console.log("User score:", score);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

console.log("\n=== Example 2: promise chain ===");
wait(50)
  .then(() => {
    console.log("Step 1 completed");
    return wait(50);
  })
  .then(() => {
    console.log("Step 2 completed");
  });

console.log("\n=== Summary ===");
console.log("Promises help structure asynchronous code without callback nesting.");