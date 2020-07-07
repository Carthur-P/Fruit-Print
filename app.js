$(document).ready(() => {
    $(".homeContent").hide().fadeIn(1100);
    $("nav").hide().fadeIn(1100);
    $(".rightBigFruit").animate({
        left: "60%"
    }, 1000, "linear").css({"transform": "rotate(-90deg)"});
});