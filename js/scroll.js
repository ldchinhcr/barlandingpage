$(document).ready(function() {
    $(".scroller").click(function() {
        $('html, body').animate({
            scrollTop: $(".hung-about-us").offset().top
        }, 700);
    });
});

$(document).ready(function() {
    $(".scroller-menu").click(function() {
        $('html, body').animate({
            scrollTop: $(".nhan-menu-title").offset().top
        }, 700);
    });
});
