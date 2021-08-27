(() => {
    function block() {
        if (
            window.outerHeight - window.innerHeight > 200 ||
            window.outerWidth - window.innerWidth > 200
        ) {
            document.body.innerHTML = "检测到恶意调试,请关闭后刷新重试!";
        }
        setInterval(() => {
            (function () {
                return false;
            }
                ["constructor"]("debugger")
                ["call"]());
        }, 50);
    }
    try {
        block();
    } catch (err) {}
})();
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
