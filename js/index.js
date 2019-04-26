window.onload = function () {
    var num = 0;
    var fullpage = document.getElementById('fullpage');
    var page = document.getElementsByClassName('page');
    play(num);
    // 判断屏幕滚动的方向的函数
    function fun(evt) {
        var event = evt || window.event;
        // 判断浏览器兼容
        console.log(event);
        // 滚动事件在不同浏览器下事件对象的上下滚动属性不同
        if (event.wheelDelta) {
            // 测试IE和谷歌浏览器向上和向下滚动wheelDelta输出的属性值是否为120和-120
            if (event.wheelDelta < 0) {//负数向下滚
                num++;
                if (num > 3) {
                    num = 3;
                }
            } else {//正数向上滚
                num--;
                if (num < 0) {
                    num = 0;
                }
            }
        } else {
            // 测试Firefox浏览器向上和向下滚动detail输出的属性值是否为-3和3
            if (event.detail > 0) {//正数向下滚
                num++;
                if (num > 4) {
                    num = 4;
                }
            } else {//负数向上滚
                num--;
                if (num < 0) {
                    num = 0;
                }
            }
        }
        play(num);
        prevent(evt);
    }
    // 清除默认事件
    function prevent(evt) {
        var event = evt || window.event;
        if (event.preventDefault) {//标准浏览器
            event.preventDefault();
        } else if (event.returnValue) {//IE低版本
            event.returnValue = false;
        } else {//以上浏览器皆不是
            return false;
        }
    }
    // 事件监听函数
    function addEvent(ele, event, fun, ft) {
        //标准浏览器会输出undefined
        //判断是否是IE低版本浏览器
        if (ele.attachEvent) {
            ele.attachEvent('on' + event, fun);
        } else {
            ele.addEventListener(event, fun, ft);
        }
    }
    // IE和谷歌浏览器，支持mousewheel事件
    addEvent(fullpage, 'mousewheel', fun, false);
    // Firefox浏览器,只能支持自定义监听“DOMMouseScroll”
    addEvent(fullpage, 'DOMMouseScroll', fun, false);
    // 滚屏时触发的函数
    function play(num) {
        // console.log(1);
        // 屏幕内容跳到对应的高度
        fullpage.style.top = -(num * 100) + '%';
        // console.log(222);
        // 给对应的page添加active样式
        for (var i = 0; i < page.length; i++) {
            if (num == i) {
                page[i].className = "active page";
            } else {
                page[i].className = "page";
            }
        }
    }
    // 雪花飘落
    var timer = null;
    var timer1 = null;
    function Xhpl(id) {
        this.box = document.getElementById(id);
        this.sjcj = function () {
            this.spn = document.createElement("span");
            this.width = document.offsetWidth;
            this.height = 400;
            this.spn.style.position = "absolute";
            this.spn.style.top = 0;
            this.spn.style.left = parseInt(Math.random() * 1910) + "px";
            this.spn.style.fontSize = parseInt(Math.random() * (25 - 10) + 10);
            this.box.appendChild(this.spn);
            this.spn.innerText = "❉";
            this.pl(this.spn);
        }
        this.pl = function (ele) {
            var t = 0;
            var l = ele.offsetLeft;
            var sjt = parseInt(Math.random() * (10 - 3) + 3);
            var sjl = parseInt(Math.random() * (10 - 3) + 3);
            var sj = parseInt(Math.random() * 10);
            timer = setInterval(function () {
                if (t > this.width) {
                    ele.remove();
                    clearInterval(timer);
                } else if (l > this.height) {
                    ele.remove();
                    clearInterval(timer);
                } else {
                    if (sj > 5) {
                        l += sjl;
                    } else {
                        l -= sjl;
                    }
                    t += sjt;
                }
                ele.style.left = l + "px";
                ele.style.top = t + "px";
            }, 50)

        }
        this.xiaxue = function () {
            var that = this;
            timer1 = setInterval(function () {
                that.sjcj();
            }, 100);
        }
    }
    if (num == 0) {
        var box = new Xhpl("page1");
        box.xiaxue();
    } else {
        clearInterval(timer);
        clearInterval(timer1);
    }


}