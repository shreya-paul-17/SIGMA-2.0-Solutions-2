// A function that takes the name as input and returns a promise that resolves with a greeting message

const greet = (input) => {
    const pobj = new Promise((resolve) => {
        resolve(`Hello, ${input}`)
    })
    return pobj //Variable 'pobj' is the promise object 
}
greet("Shreya").then((message) => console.log(message))