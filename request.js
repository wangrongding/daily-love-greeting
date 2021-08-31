const axios = require("axios");
// 创建axios实例
const service = axios.create({
    timeout: 20000, // 请求超时时间
});
// request请求拦截器
service.interceptors.request.use(
    (config) => {
        let { data = {}, method } = config;
        // get请求转参数key为params
        if (method === "get") {
            config.params = data;
        }
        if (
            method === "post" &&
            Object.prototype.toString.call(data) === "[object FormData]"
        ) {
            // data.append("fileName", new Date() - 0);
        } else {
            if (
                Object.prototype.toString.call(data) ===
                "[object URLSearchParams]"
            ) {
            } else {
                data = { ...data };
            }
            // get请求转参数key为params
            if (method === "get") {
                config.params = data;
            }
        }
        // console.log(config);
        return Promise.resolve(config);
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 请求成功回调
function successCallback(response) {
    let res = response.data;
    return Promise.resolve(res);
}
// 请求错误回调
function errorCallback(error) {
    console.log(error);
    return Promise.reject(error);
}
// respone返回拦截器
service.interceptors.response.use(successCallback, errorCallback);

exports.axios = service;
