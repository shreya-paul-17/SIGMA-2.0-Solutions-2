// Manipulating a string using callback

const manipulateString = (input, callback) => {
    var newString = input.toUpperCase(); //Converting the string into Uppercase
    callback(newString)
}

const logString = (newString) => {
    console.log(`The manipulated string is: ${newString}`);
}

manipulateString("hello, world!", logString)