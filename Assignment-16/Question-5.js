// WAP using RegEx that matches valid URLs.

const RegEx = /^(https?:\/\/)[A-Z a-z 0-9 -._~:/?#[\]@!$&'()*+,;=%]+[.][a-z A-Z]+\/?$/

function urlValidation (url) {
   if ( RegEx.test(url) === true) {
        console.log(`${url} is a valid URL`);
   } else {
        console.log(`${url} is not a valid URL`);
   }
}

urlValidation("https://google.com/")