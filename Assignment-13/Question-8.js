// A function that calculates the number of days between the current date and the event's start date

function calculateRemainingDays (eventDate){
    let current_Date = new Date ()
    let event_date = new Date (eventDate)
    let oneDay = 24*60*60*1000; // To calculate the number of milliseconds in one day
    let difference = Math.abs(event_date-current_Date) // To calculate the difference between the 2 dates in milliseconds
    let remainingDays = Math.round (difference/oneDay) // To convert it back in days
    return remainingDays
}

const eventDate = '2024-08-31'
console.log(calculateRemainingDays(eventDate));
