// A function that checks if a specific username is in that list

let searchItem;

function isUserPresent (searchItem){
    let arr=["Mithun", "Shreya", "Rohan", "Tina"]
    for(let i=0 ; i<arr.length ; i ++){
        if (searchItem == arr[i]) {
            console.log(`Yes, ${searchItem} is a valid user.`);
            break;
        }
        else{
            console.log(`No, ${searchItem} is not a valid user`);
            break;
        }
    }
}

isUserPresent("Mithun")
isUserPresent("Someone")