// این مثال نشان می‌دهد که چگونه الگوهای پیشرفته‌ی RegExp در ES9 به‌کار می‌روند
// از dotAll، named capture groups، lookbehind و Unicode property escapes استفاده می‌کنیم

const text = "first\nsecond\nthird";
const message = "user-1234 logged in at 2024-09-01";
const email = "support@company.com";
const emojiText = "😀 hello world";

function demoDotAll() {
  const regex = /first.*third/s;
  console.log("DotAll result:", regex.test(text));
}

function demoNamedGroups() {
  const regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
  const match = message.match(regex);
  console.log("Named groups:", match.groups);
}

function demoLookbehind() {
  const regex = /(?<=user-)\d+/;
  console.log("Lookbehind result:", message.match(regex)[0]);
}

function demoUnicodeProperties() {
  const regex = /\p{L}+/u;
  console.log("Unicode property result:", emojiText.match(regex));
}

function demoEmailPattern() {
  const regex = /(?<=@)[\p{L}.-]+/u;
  console.log("Email domain:", email.match(regex)[0]);
}

function main() {
  demoDotAll();
  demoNamedGroups();
  demoLookbehind();
  demoUnicodeProperties();
  demoEmailPattern();
}

main();
