// انتزاع آرایه و شیء در ES6
// این درس نشان می‌دهد چگونه با destructuring مقادیر را راحت‌تر استخراج کنیم.

const user = {
  name: "Khadijah",
  role: "manager",
  department: "development"
};

const { name, role } = user;
console.log("=== Example 1: object destructuring ===");
console.log("Name:", name);
console.log("Role:", role);

const point = [10, 20, 30];
const [x, y] = point;
console.log("\n=== Example 2: array destructuring ===");
console.log("x:", x);
console.log("y:", y);

const createConfig = ({ host = "localhost", port = 3000 }) => {
  return `Host: ${host}, Port: ${port}`;
};

console.log("\n=== Example 3: destructuring in function parameter ===");
console.log(createConfig({ port: 8080 }));

const product = { id: 1, name: "Notebook", price: 120 };
const { price: productPrice } = product;
console.log("\n=== Example 4: rename extracted property ===");
console.log("Product price:", productPrice);

console.log("\n=== Summary ===");
console.log("Destructuring makes extracting values from objects and arrays simpler.");