// Array includes example
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana'));
console.log(fruits.includes('grape'));

// Real-world example
const allowedRoles = ['admin', 'editor'];
function canAccess(role) {
  return allowedRoles.includes(role);
}

console.log(canAccess('admin'));
console.log(canAccess('viewer'));
