const otpGenerator = require('otp-generator')



exports.generate = async() => { 
    try { 
        const otp = await otpGenerator.generate(4, {
            digits : true, 
            lowerCaseAlphabets : false ,
            upperCaseAlphabets : false, 
            specialChars : false ,
        });
        return otp;
    }catch(err){ 
        throw new Error("Error Generating OTP!");
    }
}