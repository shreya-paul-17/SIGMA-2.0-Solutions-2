// A function that takes a username string as input and checks if it contains only unique characters

function uniqueCharacterCheck(userName) {
    let unique = ""
    for (let i = 0; i < userName.length; i++) {
        if (unique.includes(userName[i]) === true) {
            console.log('The input string contains duplicates');
        } else {
            console.log(`The input string contains unique characters`);
        }
    }
}

// uniqueCharacterCheck("mithun")
uniqueCharacterCheck("anurag")
