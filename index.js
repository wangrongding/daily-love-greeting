"use strict";

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    // host: 'smtp.ethereal.email',
    service: "163", // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
    port: 465, // SMTP 端口
    secureConnection: true, // 使用了 SSL
    auth: {
        user: "fedtop@163.com",
        // 不是邮箱密码，是你设置的smtp授权码
        pass: "AZIOCYXHWEIELSQI",
    },
});

let mailOptions = {
    from: '"rongding" <fedtop@163.com>', // 发送者 邮件地址
    to: "wangrongding@qq.com", // list of receivers
    subject: "Nodemailer test", // 标题
    // 发送text或者html格式
    // text: 'Hello world?', // plain text body
    html: "<h1>Hello world</h1>", // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log(info);
});
