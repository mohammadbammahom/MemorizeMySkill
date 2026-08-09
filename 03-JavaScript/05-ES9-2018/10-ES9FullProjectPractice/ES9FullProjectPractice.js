// این مثال یک پروژه‌ی عملی ES9 را نشان می‌دهد که چند feature را با هم ترکیب می‌کند
// Async iteration، Object rest/spread، Promise.finally() و RegExp را در یک سناریوی واقعی استفاده می‌کنیم

function createDataSource() {
  const items = [
    { id: 1, user: "Ali", action: "login", amount: 40 },
    { id: 2, user: "Fatima", action: "purchase", amount: 90 },
    { id: 3, user: "Hassan", action: "login", amount: 70 },
    { id: 4, user: "Zainab", action: "logout", amount: 20 }
  ];

  let index = 0;

  return {
    [Symbol.asyncIterator]() {
      return this;
    },
    async next() {
      if (index < items.length) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        return { value: items[index++], done: false };
      }
      return { done: true };
    }
  };
}

function summarizeData(records) {
  return records.map((record) => {
    const { amount, ...rest } = record;
    return {
      ...rest,
      amount,
      category: amount > 50 ? "high" : "normal"
    };
  });
}

function loadReport() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve({ status: "ok", note: "Report generated" });
      } else {
        reject(new Error("Report generation failed"));
      }
    }, 200);
  });
}

async function processProject() {
  const processed = [];
  const reportPattern = /(?<status>ok|failed)/;

  try {
    for await (const item of createDataSource()) {
      if (item.amount > 30) {
        processed.push(summarizeData([item])[0]);
      }
    }

    const report = await loadReport();
    const match = report.note.match(reportPattern);

    return {
      processed,
      report,
      reportStatus: match?.groups?.status || "unknown"
    };
  } catch (error) {
    return {
      error: error.message
    };
  } finally {
    console.log("Project cleanup complete");
  }
}

async function main() {
  const result = await processProject();
  console.log("Project result:", result);
}

main();
