const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
      pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
    },
  });
  

exports.send = async (from , to , subject , html) => { 
    try { 
        const info = await transporter.sendMail({
            from: `${from}`, // sender address
            to: `${to}`, // list of receivers
            subject: `${subject}`, // Subject line
            html: `${html}`, // html body
          });
        console.log("EMAIL SENDED SUCCESSFULLY TO EMAIL : ")
    }catch(err) { 
        throw new Error("Error Sending Mail");
    }
}