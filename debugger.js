/* (() => {
    function block() {
        setInterval(() => {debugger;}, 50);
    }
    try {
        block();
    } catch (err) {}
})();

let dosome = () => {
    for (let i = 0; i < "123465".length; i++) {
        let aaa = "123";
        //...
    }
};
dosome(); */

/* Function("debugger").call() //这里根据后面带的参数个数、类型来定，如果参数为多个，或者类型为数组时，call需换成apply,或者bind
XXX.constructor("debugger").call("action")
(function(){return !![];})["constructor"]("debugger")["call"]("action")
 */
/* function block(a) {
    if (
        window.outerHeight - window.innerHeight > 200 ||
        window.outerWidth - window.innerWidth > 200
    ) {
        document.body.innerHTML = "检测到非法调试,请关闭后刷新重试!";
    }
    setInterval(() => {
        debugger;
        // eval("Function('debugger')()");
    }, 50);
}
block(0); */
/* (() => {
    function block(a) {
        if (
            window.outerHeight - window.innerHeight > 200 ||
            window.outerWidth - window.innerWidth > 200
        ) {
            // Function("debugger")()
            // eval("Function('debugger')()");
            // block(++a)
            document.body.innerHTML = "检测到非法调试,请关闭后刷新重试!";
        }
        setInterval(() => {
            // debugger;
            Function("debugger")();
        }, 50);
    }
    try {
        block(0);
    } catch (err) {}
})(); */

/* 去除无限debugger */
/* Function.prototype.__constructor_back = Function.prototype.constructor;
Function.prototype.constructor = function () {
    if (arguments && typeof arguments[0] === "string") {
        //alert("new function: "+ arguments[0]);
        if ("debugger" === arguments[0]) {
            //arguments[0]="console.log(\"anti debugger\");";
            //arguments[0]=";";
            return;
        }
    }
    return Function.prototype.__constructor_back.apply(this, arguments);
}; */
