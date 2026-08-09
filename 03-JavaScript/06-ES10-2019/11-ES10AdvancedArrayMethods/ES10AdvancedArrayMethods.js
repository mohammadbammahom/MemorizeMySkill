// این درس یک سناریوی عملی برای پردازش آرایه‌های تودرتو و داده‌های API ارائه می‌دهد
// تمرکز روی flat()، flatMap() و تفاوت آن‌ها با map() و reduce() است

function createUsers() {
  return [
    { id: 1, name: "Muhammad", roles: ["admin", "seller"] },
    { id: 2, name: "AbuBakr", roles: ["buyer"] },
    { id: 3, name: "Uthman", roles: ["seller", "manager"] }
  ];
}

function createOrders() {
  return [
    { id: 100, items: [["book"], ["pen", "notebook"]] },
    { id: 101, items: [["bag"]] }
  ];
}

function flattenPermissions(users) {
  return users.flatMap((user) => user.roles);
}

function flattenOrderItems(orders) {
  return orders.flatMap((order) => order.items).flat();
}

function buildRoleReport(users) {
  const roles = flattenPermissions(users);
  return {
    totalRoles: roles.length,
    uniqueRoles: Array.from(new Set(roles))
  };
}

function main() {
  const users = createUsers();
  const orders = createOrders();
  const roleReport = buildRoleReport(users);
  const orderItems = flattenOrderItems(orders);

  console.log("Role report:", roleReport);
  console.log("Order items:", orderItems);
}

main();
