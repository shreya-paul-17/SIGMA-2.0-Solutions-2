// A JS function that takes the first name and last name as input and concatenate into a single string as fullname. It also takes the age in years and convert it into days. However the message should be printed to the console by using callback function

const ageInDays = (callback) => {
    const personDetails = {
            firstName : "Shreya",
            lastName : "Paul",
            ageInYears : 21
        }
    
    let fullName = personDetails['firstName'] +" "+ personDetails['lastName']
    let ageInDay = personDetails['ageInYears'] * 365
    
    callback(fullName, ageInDay)
}

const printDetails = (fullName, ageInDay) => {
    console.log(`The person's name is ${fullName}, and their age in days is ${ageInDay}`);
}

ageInDays(printDetails)