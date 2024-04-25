//A function to return sum which will demonstrate variable hoisting

addNumbers(10, 20)
function addNumbers(num1, num2) {
    var sum
    sum = num1 + num2
    console.log('The sum of the 2 numbers = '+sum);
}