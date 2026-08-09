// این درس درباره‌ی بهبود Function.prototype.toString در ES10 است
// هدف این است که نمایش منبع تابع را برای دیباگ و ابزارسازی بهتر درک کنیم

function greetUser(name) {
  return "Hello, " + name;
}

function inspectFunction(fn) {
  return fn.toString();
}

function buildMetadata(fn) {
  const source = fn.toString();
  return {
    name: fn.name,
    sourceLength: source.length,
    sourcePreview: source.slice(0, 80)
  };
}

function main() {
  const sample = function withComment() {
    // this comment should be preserved in source inspection
    return true;
  };

  console.log("Greet source:", inspectFunction(greetUser));
  console.log("Sample source:", inspectFunction(sample));
  console.log("Metadata:", buildMetadata(greetUser));
}

main();
