// این مثال نشان می‌دهد که چگونه داده‌های ناهمزمان را در یک pipeline پردازش کنیم
// برای این کار از AsyncIterator، for await...of و error handling استفاده می‌کنیم

function createActivitySource() {
  const records = [
    { id: 1, user: "Muhammad", action: "login", amount: 10 },
    { id: 2, user: "Ali", action: "purchase", amount: 25 },
    { id: 3, user: "Uthman", action: "login", amount: 15 },
    { id: 4, user: "Aisha", action: "logout", amount: 5 }
  ];

  let index = 0;

  return {
    [Symbol.asyncIterator]() {
      return this;
    },
    async next() {
      if (index < records.length) {
        await new Promise((resolve) => setTimeout(resolve, 150));
        return { value: records[index++], done: false };
      }
      return { done: true };
    }
  };
}

function filterHighValue(record) {
  return record.amount >= 15;
}

function transformRecord(record) {
  return {
    id: record.id,
    user: record.user,
    action: record.action,
    amount: record.amount,
    category: record.amount > 20 ? "premium" : "standard"
  };
}

async function processPipeline() {
  const output = [];

  try {
    for await (const record of createActivitySource()) {
      if (!record || typeof record !== "object") {
        continue;
      }

      if (filterHighValue(record)) {
        const transformed = transformRecord(record);
        output.push(transformed);
        console.log(`Processed: ${transformed.user} -> ${transformed.action} (${transformed.amount})`);
      }
    }
  } catch (error) {
    console.log(`Pipeline error: ${error.message}`);
  }

  console.log("Pipeline summary:", output);
}

async function main() {
  await processPipeline();
}

main();
