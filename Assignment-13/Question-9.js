// A function that takes a username string as input and checks if it contains only unique characters

let count = 1
let i

function uniqueCharacterCheck(userName) {
    for(i = 0; i < userName.length; i++) {  
        for(let j = i+1; j < userName.length; j++) {  
            if(userName[i] == userName[j] && userName[i] != ' ') {  
            count++;  
            }  
        }  
    }
    // A character is considered as duplicate if count is greater than 1  
    if(count > 1 && userName[i] != ' ')  
    console.log(`The input string contains duplicates`);
    else
    console.log(`The input string contains unique characters`);
}

uniqueCharacterCheck("mithun")
uniqueCharacterCheck("anurag")


