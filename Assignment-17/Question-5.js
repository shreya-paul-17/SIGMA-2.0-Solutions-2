// A program to demonstrate temporal dead zone

printValue()
function printValue() {
    let num;
    console.log("Before assigning value : "+num); // num-> undefined
    num = 10
    console.log("After assigning value : "+num); // num-> 10
}