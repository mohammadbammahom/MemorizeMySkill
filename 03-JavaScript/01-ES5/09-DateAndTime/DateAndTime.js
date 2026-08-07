// تاریخ و زمان
// این درس برای نمایش زمان، مدیریت رویدادها و گزارش‌های برنامه ضروری است.

var currentDate = new Date();
console.log("=== Example 1: Current date and time ===");
console.log(currentDate);

console.log("\n=== Example 2: Get year, month, and day ===");
console.log("Year:", currentDate.getFullYear());
console.log("Month:", currentDate.getMonth() + 1);
console.log("Day:", currentDate.getDate());

console.log("\n=== Example 3: Get hours, minutes, and seconds ===");
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());

console.log("\n=== Example 4: Create a specific date ===");
var eventDate = new Date(2026, 7, 15, 10, 30, 0);
console.log("Event date:", eventDate.toString());

console.log("\n=== Example 5: Compare dates ===");
var today = new Date();
var futureDate = new Date(2030, 0, 1);
console.log("Is future date later than today:", futureDate > today);

console.log("\n=== Example 6: Format a simple date string ===");
console.log("Formatted date:", currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate());

console.log("\n=== Summary ===");
console.log("Date objects help us track time in applications and reports.");
