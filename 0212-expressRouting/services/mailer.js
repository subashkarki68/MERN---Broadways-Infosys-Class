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
  const info = await transporter.sendMail({
    from: '"Subash Karki👻" <subashkarki68@gmail.com>', // sender address
    to,
    subject,
    html: `<b>${message}</b>`, // html body
  });
  return info.messageId;
}
module.exports = mail;
