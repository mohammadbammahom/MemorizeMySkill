// ES9 RegExp Improvements
// dotAll flag، named capture groups، lookbehind، Unicode properties

// 1. dotAll flag (s) - . matches newline
console.log("=== 1. dotAll flag (s) ===");

const textWithNewline = "Hello\nWorld";

// بدون dotAll - . newline را match نمی‌کند
const regexWithoutS = /Hello.World/;
console.log("Without s flag:", regexWithoutS.test(textWithNewline));

// با dotAll - . newline را match می‌کند
const regexWithS = /Hello.World/s;
console.log("With s flag:", regexWithS.test(textWithNewline));

// مثال عملی - Matching blocks of text
const docText = `Line 1
Line 2
Line 3`;

const blockPattern = /Line 1.*Line 3/s;
console.log("Block pattern match:", blockPattern.test(docText));

// 2. Named Capture Groups
console.log("\n=== 2. Named Capture Groups ===");

// Group names برای خوانایی بهتر
const datePattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const dateString = "2026-08-08";
const dateMatch = dateString.match(datePattern);

if (dateMatch) {
  console.log("Date parts:");
  console.log("Year:", dateMatch.groups.year);
  console.log("Month:", dateMatch.groups.month);
  console.log("Day:", dateMatch.groups.day);
}

// User data extraction
const userPattern = /User: (?<name>\w+), Email: (?<email>[\w.-]+@[\w.-]+\.\w+)/;
const userData = "User: Muhammad, Email: muhammad@example.com";
const userMatch = userData.match(userPattern);

if (userMatch) {
  console.log("\nUser data:");
  console.log("Name:", userMatch.groups.name);
  console.log("Email:", userMatch.groups.email);
}

// Product code extraction
const productPattern = /(?<category>[A-Z]+)-(?<number>\d+)-(?<color>\w+)/;
const productCode = "ELEC-42-black";
const productMatch = productCode.match(productPattern);

if (productMatch) {
  console.log("\nProduct information:");
  console.log("Category:", productMatch.groups.category);
  console.log("Number:", productMatch.groups.number);
  console.log("Color:", productMatch.groups.color);
}

// 3. Lookbehind Assertions
console.log("\n=== 3. Lookbehind Assertions ===");

// Positive lookbehind (?<=...) - must be preceded by
const priceLine = "Price: $100, $200, €50";

// Match prices that are preceded by $ (positive lookbehind)
const dollarPrices = /(?<=\$)\d+/g;
const prices = priceLine.match(dollarPrices);
console.log("Dollar prices:", prices);

// Negative lookbehind (?<!...) - must NOT be preceded by
const emailPattern = /(?<!@)\w+@\w+\.\w+/;
const validEmail = "user@example.com";
const invalidEmail = "@@invalid@example.com";

console.log("Valid email match:", validEmail.match(emailPattern));
console.log("Invalid email match:", invalidEmail.match(emailPattern));

// User mentions
const textWithMentions = "Hello @Muhammad, @Ali replied, and @@spam mentioned something";
const validMentions = /@(?!@)(\w+)/g;
const mentions = textWithMentions.match(validMentions);
console.log("\nValid mentions:", mentions);

// Currency amounts with lookbehind
const text = "$100 costs $50 extra, total €150";
const currencyPattern = /(?<=\$)\d+/g;
const amounts = text.match(currencyPattern);
console.log("Currency amounts (after $):", amounts);

// 4. Unicode Property Escapes (with u flag)
console.log("\n=== 4. Unicode Property Escapes ===");

// Arabic characters
const arabicText = "مرحبا hello السلام";
const arabicPattern = /\p{Script=Arabic}/u;
console.log("Contains Arabic:", arabicPattern.test(arabicText));

// Extract Arabic words
const arabicWords = arabicText.match(/\p{Script=Arabic}+/gu);
console.log("Arabic words:", arabicWords);

// Unicode letter categories
const mixedText = "Hello123مرحبا!@#";
const lettersPattern = /\p{L}+/gu;
const letters = mixedText.match(lettersPattern);
console.log("All letters (including non-ASCII):", letters);

// Numbers across scripts
const numbersPattern = /\p{N}+/gu;
const numbers = mixedText.match(numbersPattern);
console.log("All numbers:", numbers);

// Emoji support
const emojiText = "Hello 😊 World 🌍";
const emojiPattern = /\p{Emoji}/gu;
const emojis = emojiText.match(emojiPattern);
console.log("Emojis found:", emojis);

// 5. Combining features
console.log("\n=== 5. Combining Features ===");

// Combined: Named groups + lookbehind + dotAll
const logPattern = /\[(?<level>\w+)\].*?(?<=: )(?<message>.+)/s;
const logEntry = "[ERROR]\nDetails: Database connection failed";
const logMatch = logEntry.match(logPattern);

if (logMatch) {
  console.log("Log level:", logMatch.groups?.level);
  console.log("Message:", logMatch.groups?.message);
}

// Realistic example: Processing multiple data types
const dataLine = "User: Uthman, Prize: €500, Status: Active";
const dataPattern = /User: (?<user>\w+), Prize: (?<=\$|€)(?<amount>\d+), Status: (?<status>\w+)/;
const dataMatch = dataLine.match(dataPattern);

if (dataMatch) {
  console.log("\nExtracted data:");
  console.log("User:", dataMatch.groups.user);
  console.log("Prize amount:", dataMatch.groups.amount);
  console.log("Status:", dataMatch.groups.status);
}

console.log("\n=== ES9 RegExp Examples Complete ===");
