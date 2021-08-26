"use strict";

const nodemailer = require("nodemailer");
const { axios } = require("./request");
//发送请求
async function send() {
    let movieInfo = await axios.get(
        `https://vip.bljiex.com/api.php?out=jsonp&wd=${encodeURI("扫黑")}`
        // `https://vip.bljiex.com/api.php?out=jsonp&wd=%E6%89%AB%E9%BB%91&cb=jQuery1820530795540517544_1629970804930&_=1629970804954`
    );
    /* movieInfo.info.forEach((item) => {
        console.log(item);
    }); */
    console.log(Object.prototype.toString.call(movieInfo));
    console.log(movieInfo.length);
    let movieList = JSON.parse(movieInfo.substring(1, movieInfo.length - 2));
    movieList.info.forEach((item) => {
        item.title = decodeURI(item.title);
        item.href = `https://vip.bljiex.com/?index${item.id}-${item.flag}-1.htm`;
    });
    console.log(movieList);
}
send();
