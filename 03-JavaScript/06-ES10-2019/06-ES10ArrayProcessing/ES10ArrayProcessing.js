// این درس نشان می‌دهد که چگونه داده‌های تودرتو را در ES10 به‌صورت عملی پردازش کنیم
// تمرکز روی flat() و flatMap() برای آماده‌سازی داده‌های فروش و سفارش است

function createNestedProductData() {
  return [
    { id: 1, name: "Book", categories: ["education", "history"] },
    { id: 2, name: "Pen", categories: ["office", "study"] },
    { id: 3, name: "Notebook", categories: ["study", "office"] }
  ];
}

function createNestedOrderData() {
  return [
    { id: 100, items: [["Book", "Pen"], ["Notebook"]] },
    { id: 101, items: [["Pen"], ["Book", "Notebook"]] }
  ];
}

function flattenCategories(products) {
  return products.flatMap((product) => product.categories);
}

function flattenOrderItems(orders) {
  return orders.flatMap((order) => order.items).flat();
}

function flattenInfinityExample(data) {
  return data.flat(Infinity);
}

function buildReport(products, orders) {
  const categories = flattenCategories(products);
  const items = flattenOrderItems(orders);
  return {
    categoryCount: categories.length,
    itemCount: items.length,
    uniqueItems: Array.from(new Set(items))
  };
}

function main() {
  const products = createNestedProductData();
  const orders = createNestedOrderData();
  const nestedExample = [["Book", ["Pen", ["Notebook"]]]];
  const flatExample = nestedExample.flat(Infinity);
  const report = buildReport(products, orders);

  console.log("Flattened nested array:", flatExample);
  console.log("Report:", report);
}

main();
