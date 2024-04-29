// Random Number Generator with Delay and Progress indication

const generateNumber = () => {
    let randomNumber = Math.floor(Math.random() * 1000) 
    console.log(`Random number generated is: ${randomNumber}`);
}

const generateMessage = () => {
   let timer = 3
   const countdownInterval = setInterval ( function () {
    console.log(`${timer} seconds are left`)
    timer--

    if (timer === 0) {
        clearInterval(countdownInterval)
        generateNumber()
    }
   },1000)
}

generateMessage()