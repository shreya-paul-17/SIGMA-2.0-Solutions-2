// A function to generate a 4-digit random OTP

function generateOtp() {
    let otp = Math.floor(1000 + Math.random() * 9000);
    return otp;
}

console.log(`Here is your otp: ${generateOtp()}`);


