// Flat example
const numbers = [1, [2, 3], [4, [5]]];
console.log(numbers.flat(2));

// Real-world example
const menu = [['starter', 'main'], ['dessert']];
const allItems = menu.flat();
console.log(allItems);
