// A function that takes the prices of all the products in a customer's cart as input parameters and then calculate and return the total sum of all the product prices

function calculateTotalCartValue(){
    let totalCost = 0;
    for (let i = 0; i < arguments.length; i++) {
        totalCost += arguments[i]; 
    }
    console.log(`The total cart value is ${totalCost}`);
}

calculateTotalCartValue(125, 20, 30)