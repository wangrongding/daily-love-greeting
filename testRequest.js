"use strict";

const nodemailer = require("nodemailer");
const { axios } = require("./request");
//发送请求
async function send() {
    console.log(
        `想和你一起看世界:第${parseInt(
            (new Date() - new Date("2020-08-19")) / 1000 / 60 / 60 / 24
        )}期`
    );
    //获取每日Bing壁纸
    let bgInfo = await axios.get(
        "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1"
    );
    console.log(`http://cn.bing.com${bgInfo.images[0].url}`);
    console.log(bgInfo.images[0].copyright);
    console.log(bgInfo.images[0].copyrightlink);
    let weather = await axios.get(
        `http://wthrcdn.etouch.cn/weather_mini?city=${encodeURI("昌平")}`
    );
    let weatherInfo = weather.data;
    console.log(weatherInfo.city);
    console.log(weatherInfo.forecast[0].low);
    console.log(weatherInfo.forecast[0].high);
    console.log(weatherInfo.forecast[0].fengxiang);
    console.log(weatherInfo.forecast[0].fengli);
    console.log(weatherInfo.forecast[0].type);
    console.log(weatherInfo.ganmao);
    console.log(weatherInfo.wendu);
    console.log(new Date().toLocaleDateString());
    console.log(new Date().toLocaleString("default", { weekday: "long" }));
    let sentence = await axios.get(`https://chp.shadiao.app/api.php`);
    console.log(sentence);
}
send();
