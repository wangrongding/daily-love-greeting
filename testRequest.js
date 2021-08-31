"use strict";
const { axios } = require("./request");
//发送请求
async function send() {
    if (!process.argv[2]) {
        console.log("请输入视频名称!");
        return;
    }
    let movieInfo = await axios({
        method: "get",
        url: `https://vip.bljiex.com/api.php?out=jsonp&wd=${encodeURI(
            process.argv[2]
        )}&cb=jQuery1820530795540517544_1629970804930&_=${new Date() - 0}`,
        /* url: `https://vip.bljiex.com/api.php?out=jsonp&wd=${encodeURI(
            process.argv[2]
        )}`, */
        headers: {
            "User-Agent":
                "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
            dnt: "1",
            pragma: "no-cache",
            referer: `https://vip.bljiex.com/so.php?wd=${encodeURI(
                process.argv[2]
            )}`,
            "sec-ch-ua":
                "'Chromium';v='92', ' Not A;Brand';v='99', 'Google Chrome';v='92'",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
        }, //后端要的
    });

    // let movieInfo = await axios.get(
    //     /* `https://vip.bljiex.com/api.php?out=jsonp&wd=${encodeURI(
    //         process.argv[2]
    //     )}` */

    //     `https://vip.bljiex.com/api.php?out=jsonp&wd=${encodeURI(
    //         process.argv[2]
    //     )}cb=jQuery1820530795540517544_1629970804930&_=${new Date() - 0}`,

    // );
    // console.log(movieInfo);
    let movieList = JSON.parse(movieInfo.substring(40, movieInfo.length - 2));
    // let movieList = JSON.parse(movieInfo.substring(1, movieInfo.length - 2));
    if (movieList.code != "404") {
        movieList.info.forEach((item) => {
            item.title = decodeURI(item.title);
            item.href = `https://vip.bljiex.com/?index${item.id}-${item.flag}-1.htm`;
        });
        console.log(movieList);
        // console.log(process.argv);
    } else {
        console.log("暂无资源!");
    }
}
send();
