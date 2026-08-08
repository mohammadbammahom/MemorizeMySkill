// تکرار ناهمزمان (Async Iteration) در ES9
// Symbol.asyncIterator، async iterators و for await...of

// یک async iterator ساده
function createAsyncUserActivityIterator() {
  const activities = [
    { user: "Muhammad", action: "login" },
    { user: "Ali", action: "purchase" },
    { user: "Uthman", action: "logout" },
    { user: "Aisha", action: "login" }
  ];

  let index = 0;

  return {
    [Symbol.asyncIterator]() {
      return this;
    },
    async next() {
      if (index < activities.length) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        return { value: activities[index++], done: false };
      }
      return { done: true };
    }
  };
}

// مثال استفاده از for await...of
async function processUserActivitiesWithForAwait() {
  console.log("Processing user activities with for await...of:");
  
  for await (const activity of createAsyncUserActivityIterator()) {
    console.log(`- ${activity.user}: ${activity.action}`);
  }
}

// یک async iterable object
function createAsyncPageLoader(totalPages) {
  return {
    [Symbol.asyncIterator]() {
      let currentPage = 1;

      return {
        async next() {
          if (currentPage <= totalPages) {
            await new Promise((resolve) => setTimeout(resolve, 150));
            const pageData = {
              page: currentPage,
              items: [
                `item ${currentPage}-1`,
                `item ${currentPage}-2`,
                `item ${currentPage}-3`
              ]
            };
            currentPage++;
            return { value: pageData, done: false };
          }
          return { done: true };
        }
      };
    }
  };
}

async function loadPagesAsynchronously() {
  console.log("\nLoading pages asynchronously:");
  
  const loader = createAsyncPageLoader(3);
  
  for await (const page of loader) {
    console.log(`Page ${page.page}: ${page.items.join(", ")}`);
  }
}

// مثال error handling
function createAsyncIteratorWithError() {
  const data = ["first", "second", "error", "fourth"];
  let index = 0;

  return {
    [Symbol.asyncIterator]() {
      return this;
    },
    async next() {
      if (index < data.length) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        
        if (data[index] === "error") {
          index++;
          throw new Error("Data processing failed at item 3");
        }
        
        return { value: data[index++], done: false };
      }
      return { done: true };
    }
  };
}

async function processWithErrorHandling() {
  console.log("\nProcessing with error handling:");
  
  try {
    for await (const item of createAsyncIteratorWithError()) {
      console.log(`Processed: ${item}`);
    }
  } catch (error) {
    console.log(`Error caught: ${error.message}`);
  }
}

// مثال stream-like usage
async function simulateAsyncDataStream() {
  console.log("\nSimulating async data stream:");
  
  const stream = {
    [Symbol.asyncIterator]() {
      let counter = 0;
      const max = 5;

      return {
        async next() {
          if (counter < max) {
            await new Promise((resolve) => setTimeout(resolve, 100));
            return { value: `event-${counter++}`, done: false };
          }
          return { done: true };
        }
      };
    }
  };

  for await (const event of stream) {
    console.log(`Event received: ${event}`);
  }
}

// اجرای تمام مثال‌ها
async function main() {
  await processUserActivitiesWithForAwait();
  await loadPagesAsynchronously();
  await processWithErrorHandling();
  await simulateAsyncDataStream();
  
  console.log("\nAll async iterations completed successfully!");
}

main().catch((error) => {
  console.error("Fatal error:", error);
});
