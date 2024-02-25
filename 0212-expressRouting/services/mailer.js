const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function mail(to, subject, message) {
  // send mail with defined transport object
  try {
    const info = await transporter.sendMail({
      from: '"Subash Karki👻" <subashkarki68@gmail.com>', // sender address
      to,
      subject,
      html: `<b>${message}</b>`, // html body
    });
    return info.messageId;
  } catch (error) {
    if (error.errno === -3001)
      return console.log(
        "Cannot send email to registered user because the server failed to connect to the internet."
      );
    console.log("Error occured while sending email to registered user:", error);
  }
}
module.exports = mail;
