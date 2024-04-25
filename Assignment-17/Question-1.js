//A function that takes 2 numbers as arguments and return their sum and demonstrate hoisting

var sum
addNumbers(10, 20)

function addNumbers(num1, num2) {
    sum = num1 + num2;
    return sum;
}

console.log('The sum of the numbers = '+sum);