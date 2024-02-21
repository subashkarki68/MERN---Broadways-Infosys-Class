const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.NODE_MAILER_HOST,
  port: process.env.NODE_MAILER_PORT,
  secure: true,
  auth: {
    user: process.env.NODE_MAILER_USER,
    pass: process.env.NODE_MAILER_PASS,
  },
});

async function mail(to, subject, message) {
  const info = await transporter.sendMail({
    from: '"Subash Karki 👻" subashkarki68@gmail.com',
    to,
    subject,
    html: `<b>${message}</b>`,
  });
  return info.messageId;
}

module.exports = mail;
