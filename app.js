$(document).ready(() => {
    $(".homeContent").hide().fadeIn(1100);
    $(".backgroundFruit").animate({
        left: "60%"
    }, 1000, "linear").css({"transform": "rotate(-90deg)"});
});