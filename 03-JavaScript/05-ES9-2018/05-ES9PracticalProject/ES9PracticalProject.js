// پروژه‌ی عملی ES9
// سیستم پردازش فعالیت کاربر و تولید گزارش

// async iterator برای user activity stream
function createUserActivityStream() {
  const activities = [
    { user: "Muhammad", action: "login", timestamp: "2026-08-08T10:00:00" },
    { user: "Ali", action: "purchase", timestamp: "2026-08-08T10:15:00" },
    { user: "Uthman", action: "comment", timestamp: "2026-08-08T10:30:00" },
    { user: "Aisha", action: "logout", timestamp: "2026-08-08T10:45:00" },
    { user: "Bilal", action: "login", timestamp: "2026-08-08T11:00:00" }
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

// Regex patterns with ES9 features
const userPattern = /User: (?<user>\w+), Action: (?<action>\w+)/;
const timestampPattern = /(?<time>\d{2}:\d{2}):\d{2}/;
const actionPattern = /(?<=: )(\w+)(?=,)/;

// Object spread/rest برای processing data
function processActivityData(activity) {
  const { user, action, ...metadata } = activity;
  
  return {
    ...metadata,
    user: user.toUpperCase(),
    action,
    processed: true,
    timestamp: metadata.timestamp
  };
}

// Promise.finally() برای cleanup
function simulateActivityValidation(activity) {
  let isValidating = true;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!activity.user || !activity.action) {
        reject(new Error("Invalid activity data"));
      } else {
        resolve(activity);
      }
    }, 100);
  })
  .then((data) => {
    console.log(`Validated: ${data.user} - ${data.action}`);
    return data;
  })
  .catch((error) => {
    console.log(`Validation error: ${error.message}`);
    return { status: "error", originalActivity: activity };
  })
  .finally(() => {
    isValidating = false;
  });
}

// Data aggregation with object rest/spread
function aggregateActivityStats(activities) {
  const stats = {
    total: 0,
    byAction: {},
    byUser: {},
    timestamps: []
  };

  activities.forEach((activity) => {
    const { user, action, timestamp } = activity;
    
    stats.total++;
    stats.byAction[action] = (stats.byAction[action] || 0) + 1;
    stats.byUser[user] = (stats.byUser[user] || 0) + 1;
    stats.timestamps.push(timestamp);
  });

  return stats;
}

// Generate report with regex validation
function generateActivityReport(activityText, activity) {
  const userMatch = userPattern.exec(activityText);
  
  if (userMatch) {
    const { user, action } = userMatch.groups;
    return {
      reportUser: user,
      reportAction: action,
      status: "generated",
      timestamp: activity.timestamp
    };
  }
  
  return { status: "failed", error: "Could not parse activity" };
}

// Main async workflow
async function runActivityProcessor() {
  console.log("=== ES9 Practical Project: User Activity Processing ===\n");
  
  const allActivities = [];
  const processedActivities = [];
  
  console.log("Step 1: Loading activities asynchronously...\n");
  
  try {
    // for await...of with async iterator
    for await (const activity of createUserActivityStream()) {
      console.log(`Received: ${activity.user} - ${activity.action}`);
      allActivities.push(activity);
    }
  } catch (error) {
    console.log(`Stream error: ${error.message}`);
  }
  
  console.log("\nStep 2: Processing each activity with validation...\n");
  
  // Process all activities with Promise.finally()
  for (const activity of allActivities) {
    const result = await simulateActivityValidation(activity);
    
    if (result.status !== "error") {
      const processed = processActivityData(result);
      processedActivities.push(processed);
    }
  }
  
  console.log("\nStep 3: Aggregating statistics...\n");
  
  const stats = aggregateActivityStats(processedActivities);
  console.log("Activity statistics:", stats);
  
  console.log("\nStep 4: Generating detailed reports...\n");
  
  // Generate reports with ES9 regex features
  processedActivities.forEach((activity) => {
    const activityText = `User: ${activity.user}, Action: ${activity.action}`;
    const report = generateActivityReport(activityText, activity);
    
    if (report.status === "generated") {
      console.log(`Report - User: ${report.reportUser}, Action: ${report.reportAction}`);
    }
  });
  
  console.log("\nStep 5: Creating summary with Object Spread...\n");
  
  // Create summary with spread/rest
  const defaultSummary = {
    status: "complete",
    totalProcessed: processedActivities.length,
    reportDate: new Date().toISOString()
  };
  
  const { byAction, byUser, ...restStats } = stats;
  
  const finalSummary = {
    ...defaultSummary,
    stats: {
      ...restStats,
      actionBreakdown: byAction,
      userBreakdown: byUser
    }
  };
  
  console.log("Final Summary:");
  console.log(JSON.stringify(finalSummary, null, 2));
  
  console.log("\n=== Processing Complete ===");
  
  return finalSummary;
}

// Execute main workflow
runActivityProcessor().catch((error) => {
  console.error("Fatal error in activity processor:", error);
});
