const nodemailer = require('nodemailer')
require('dotenv').config({ 
  path : '../../.env'
})
exports.send = async(from , email , subject, html) =>  { 
    try { 
        const transporter = nodemailer.createTransport({
            host:"smtp.gmail.com",
            auth: {
              user: process.env.EMAIL_USER, 
              pass: process.env.EMAIL_PASS,   
            },
        });
        await transporter.sendMail( { 
            from : `${from}`
            ,to : `${email}`
            ,subject: `${subject}`
            ,html : `${html}`
        })
        console.log("***********EMAIL SENT SUCCESSFULLY ***********")
    }catch(err) { 
        console.log("**********Error sending mail to the Client***********")
        console.error(err.message)
    }
}