$(document).ready(function() {
    function heightDetect() {
        $(".main").css("height", $(window).height());
    }
    heightDetect();
    $(window).resize(function () {
        heightDetect();
    });
    function heightDetect2() {
        $(".bg-main2").css("height", $(window).height());
    }
    heightDetect2();
    $(window).resize(function () {
        heightDetect();
    });
    
});