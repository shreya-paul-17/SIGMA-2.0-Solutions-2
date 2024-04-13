// WAP that utilizes a Map to store user information and allows adding, updating and deleting user records

let userMap = new Map([
    ["name", "Seema"],
    ["age", 20],
    ["e-mail", "seema12@gmail.com"]
])

// Adding of new user records to the existing information
console.log("Before adding:");
console.log(userMap);
console.log("After adding:");
userMap.set("salary", 50000)
console.log(userMap);

// Updating user records in the existing information
console.log("Old value for age before updation : "+userMap.get('age'));
userMap.set('age',30)
console.log("New value for age after updation : "+userMap.get('age'));

// Deleting user records from the existing information
console.log("Before deleting:");
console.log(userMap);
userMap.delete('salary')
console.log("After deleting:");
console.log(userMap);