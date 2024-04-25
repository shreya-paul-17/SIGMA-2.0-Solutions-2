//A function that takes 2 numbers and returns their product using function expression to demonstrate hoisting

var product
multiplyNumbers(10, 20)

const multiplyNumbers = function(num1, num2) {
    product = num1 * num2
    return product
}

console.log("The product of the 2 numbers = "+product);