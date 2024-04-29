// Reversing a string and printing it's output after a delay of 2s

const reverseString = (input) => {
    setTimeout ( function () {
        let reversedString = input.split('').reverse().join('')
        console.log(reversedString);
    },2000)
}

reverseString("Hello World")