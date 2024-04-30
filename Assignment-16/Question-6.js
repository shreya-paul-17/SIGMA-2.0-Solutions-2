// LinkedIn Profile URL Validator using RegEx

const RegEx = /^(https:\/\/www\.linkedin\.com\/in\/)[a-z A-Z 0-9 _ -]{4,29}[a-z A-Z 0-9]\/$/

function urlValidator (url) {
    if (RegEx.test(url) === true) {
        console.log(`${url} is a valid URL`);
    } else {
        console.log(`${url} is not a valid URL`);
    }
}

urlValidator("https://www.linkedin.com/in/shreya-paul17/")