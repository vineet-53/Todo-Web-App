const otpGenerator = require('otp-generator')



exports.generate = async(OTP_LENGTH) => { 
    try { 
        const otp = await otpGenerator.generate(OTP_LENGTH, {
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