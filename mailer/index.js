const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const myPw = process.env.PASSWORD;
const cron = require("node-cron");

// email message options

const mailOptions = {
  from: "gothon7092@gmail.com",
  to: "gothone@naver.com",
  subject: "Email from Node_App",
  text: "test for nodemailer",
};

// email transport configuration

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gothone7092@gmail.com",
    pass: myPw,
  },
});

// send Email
cron.schedule(" * * * * * * ", () => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`E-mail SENDED ~ ${info.response}`);
    }
  });
});
