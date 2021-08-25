"use strict";

const nodemailer = require("nodemailer");

async function main() {
    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        // sendmail: true,
        // newline: "windows",
        // logger: false,
        // host: 'smtp.ethereal.email',
        service: "163", // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
        port: 465, // SMTP 端口
        secureConnection: true, // 使用了 SSL
        auth: {
            user: "fedtop@163.com",
            // 不是邮箱密码，是你设置的smtp授权码
            pass: "",
        },
    });

    // Message object
    let message = {
        from: '"rongding" <fedtop@163.com>', // 发送者 邮件地址
        // 逗号分隔的列表
        to: "Sparrow <wangrongding@qq.com>",
        // bcc: "andris@ethereal.email",

        // Subject of the message
        subject: "Nodemailer is unicode friendly ✔",
        // plaintext body
        text: "Hello to myself!",
        // HTML body
        html: `
        <div
        style="background:url('http://h2.ioliu.cn/bing/StrandbadTiefenbrunnen_ZH-CN0240023450_1920x1080.jpg?imageslim') center no-repeat;background-size: 100%">
            <div
                style="background:rgba(0, 0, 0, 0.5);margin: 0 auto;width: 80%;height: 500px;display: flex;align-items: center;justify-content: center;">
                <p style="text-align: center;font-size: 16px;color: white;">hello</p>
            </div>
        </div>
        `,
        // An array of attachments
        attachments: [
            // String attachment
            {
                filename: "notes.txt",
                content: "Some notes about this e-mail",
                contentType: "text/plain", // optional, would be detected from the filename
            },
            // Binary Buffer attachment
            {
                filename: "image.png",
                content: Buffer.from(
                    "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/" +
                        "//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U" +
                        "g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC",
                    "base64"
                ),
                cid: "note@example.com", // should be as unique as possible
            },
            // File Stream attachment
            {
                filename: "qr.jpg",
                path: __dirname + "/assets/qr.jpg",
                cid: "nyan@example.com", // should be as unique as possible
            },
        ],
    };

    let info = await transporter.sendMail(message);
    console.log("Message sent successfully as %s", info.messageId);
}

main().catch((err) => {
    console.error(err.message, "error!");
    process.exit(1);
});
