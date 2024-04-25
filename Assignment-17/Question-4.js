//A program to take 3 variables inside a block scope and print them before and after declaration to demonstrate variable hoisting

printValues()
function printValues() {
    console.log("Before declaration : "+a+' '+b+' '+c); // a-> Throws error, b-> undefined, c-> Throws error
    let a = 10;
    var b = 20;
    const c = 30;
    console.log("After declaration : "+a+' '+b+' '+c); // a-> 10, b-> 20, c-> 30
}