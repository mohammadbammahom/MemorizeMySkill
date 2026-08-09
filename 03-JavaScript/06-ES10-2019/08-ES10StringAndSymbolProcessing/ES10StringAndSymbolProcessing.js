// این درس نشان می‌دهد که چگونه متن و Symbol را در ES10 به‌صورت عملی پردازش کنیم
// تمرکز روی trimStart()، trimEnd() و Symbol.description است

function cleanInput(value) {
  return value.trimStart().trimEnd();
}

function createUserLabel(userName) {
  return `User: ${cleanInput(userName)}`;
}

function createSymbolRecord() {
  const orderSymbol = Symbol("order-101");
  return {
    symbolName: orderSymbol.description,
    value: orderSymbol
  };
}

function buildTerminalMessage(text) {
  return `Processed: ${cleanInput(text)}`;
}

function main() {
  const rawName = "  AbdullahBinUmar  ";
  const rawNote = "  approved  ";
  const symbolRecord = createSymbolRecord();
  const message = buildTerminalMessage(rawNote);

  console.log("Cleaned name:", cleanInput(rawName));
  console.log("User label:", createUserLabel(rawName));
  console.log("Message:", message);
  console.log("Symbol description:", symbolRecord.symbolName);
}

main();
