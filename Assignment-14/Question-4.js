// WAP that accepts an object and a property name and checks if the object has the specified property

const employee = {name: "Seema"}

console.log(Object.hasOwn(employee, 'name')); // Results true
console.log(Object.hasOwn(employee, 'age')); // Results false