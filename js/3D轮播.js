$(function () {
    var current = 2;
    fn();
    function fn() {
        $("a img").eq(current - 4).css({ "transform": "rotateY(-45deg) translateX(80px) translateZ(-186px)", "zIndex": 4 });
        $("a img").eq(current - 3).css({ "transform": "rotateY(-20deg) translateX(300px) translateZ(-186px)", "zIndex": 2 });
        $("a img").eq(current - 2).css({ "transform": "rotateY(20deg) translateX(-300px) translateZ(-186px)", "zIndex": 1 });
        $("a img").eq(current - 1).css({ "transform": "rotateY(45deg) translateX(-80px) translateZ(-186px)", "zIndex": 3 });
        $("a img").eq(current).css({ "transform": "translateZ(130px)", "zIndex": 5 });
        $("a img").eq(current + 1).css({ "transform": "rotateY(-45deg) translateX(80px) translateZ(-186px)", "zIndex": 4 });
        $("a img").eq(current + 2).css({ "transform": "rotateY(-20deg) translateX(300px) translateZ(-186px)", "zIndex": 2 });
        $("a img").eq(current + 3).css({ "transform": "rotateY(20deg) translateX(-300px) translateZ(-186px)", "zIndex": 1 });
        $("a img").eq(current + 4).css({ "transform": "rotateY(45deg) translateX(-80px) translateZ(-186px)", "zIndex": 3 });
    }
    var timer = setInterval(function () {
        current++;
        if (current > 4) {
            current = 0;
        }
        fn();
    }, 1500);
});