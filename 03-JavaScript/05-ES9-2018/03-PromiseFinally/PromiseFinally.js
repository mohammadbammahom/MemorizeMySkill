// Promise.finally() در ES9
// Cleanup operations و guarantee execution

// مثال ساده - Loading state
function loadUserData(userId) {
  let isLoading = true;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "Muhammad", email: "muhammad@example.com" });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 500);
  })
  .then((data) => {
    console.log("User data loaded:", data);
    return data;
  })
  .catch((error) => {
    console.log("Error loading user:", error.message);
  })
  .finally(() => {
    isLoading = false;
    console.log("Loading complete (finally)");
  });
}

console.log("Example 1: Basic Promise.finally()\n");
loadUserData(1).then(() => console.log(""));

// مثال - Resource cleanup
function acquireResource() {
  const resource = { id: 1, name: "Database Connection" };
  let acquired = true;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      acquired = true;
      console.log("Resource acquired:", resource.name);
      resolve(resource);
    }, 300);
  })
  .then((resource) => {
    console.log("Using resource:", resource.name);
    return resource;
  })
  .catch((error) => {
    console.log("Failed to acquire resource:", error.message);
  })
  .finally(() => {
    console.log("Cleaning up resource (finally)");
    acquired = false;
  });
}

// مثال - API request with finally
async function example1() {
  console.log("Example 2: Resource cleanup\n");
  await acquireResource();
  console.log("");
}

// مثال - Multiple operations
function processTransaction(amount, userId) {
  console.log("Starting transaction processing...");

  return Promise.resolve()
    .then(() => {
      if (amount <= 0) {
        throw new Error("Invalid amount");
      }
      console.log(`Processing ${amount} for user ${userId}`);
      return { transactionId: 1, amount, status: "processed" };
    })
    .then((result) => {
      console.log("Transaction successful:", result);
      return result;
    })
    .catch((error) => {
      console.log("Transaction failed:", error.message);
      return { status: "failed", error: error.message };
    })
    .finally(() => {
      console.log("Transaction processing complete - cleanup done");
    });
}

async function example2() {
  console.log("Example 3: Transaction processing\n");
  
  await processTransaction(100, 1);
  console.log("");
  
  await processTransaction(-50, 2);
  console.log("");
}

// مثال - Chaining with finally
function createAsyncFlow() {
  let stepCount = 0;

  return Promise.resolve()
    .then(() => {
      stepCount++;
      console.log(`Step ${stepCount}: Initialize`);
      return { step: stepCount };
    })
    .then((data) => {
      stepCount++;
      console.log(`Step ${stepCount}: Process data`);
      return { ...data, step: stepCount };
    })
    .then((data) => {
      stepCount++;
      console.log(`Step ${stepCount}: Validate`);
      return { ...data, step: stepCount };
    })
    .catch((error) => {
      console.log("Error in flow:", error.message);
      return { status: "error" };
    })
    .finally(() => {
      console.log(`Finally: Flow completed after ${stepCount} steps\n`);
    });
}

async function example3() {
  console.log("Example 4: Multi-step flow\n");
  await createAsyncFlow();
}

// مثال - Error propagation with finally
function simulateFileOperation() {
  let fileHandle = null;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fileHandle = { name: "data.txt" };
      console.log("File opened:", fileHandle.name);
      reject(new Error("Read error"));
    }, 200);
  })
  .then((data) => {
    console.log("File data:", data);
  })
  .catch((error) => {
    console.log("Caught error:", error.message);
    // Error is still propagated
    throw error;
  })
  .finally(() => {
    console.log("Closing file (finally)");
    fileHandle = null;
  })
  .catch((error) => {
    console.log("Final error handler:", error.message);
  });
}

async function example4() {
  console.log("Example 5: Error propagation\n");
  await simulateFileOperation();
  console.log("");
}

// مثال - Conditional finally
function apiCall(endpoint, shouldFail = false) {
  console.log(`Calling API: ${endpoint}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("API returned 500"));
      } else {
        resolve({ endpoint, data: "success" });
      }
    }, 200);
  })
  .then((response) => {
    console.log("API response received");
    return response;
  })
  .catch((error) => {
    console.log("API error:", error.message);
    return { error: error.message };
  })
  .finally(() => {
    console.log("API call completed (finally) - logging metrics\n");
  });
}

async function example5() {
  console.log("Example 6: API calls\n");
  
  await apiCall("/users", false);
  await apiCall("/products", true);
}

// Main execution
async function main() {
  await example1();
  await example2();
  await example3();
  await example4();
  await example5();
  
  console.log("All Promise.finally() examples completed!");
}

main().catch((error) => {
  console.error("Unexpected error:", error);
});
