// Object entries example
const user = { name: 'Ada', role: 'admin' };
console.log(Object.entries(user));

// Iterate over object entries
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
