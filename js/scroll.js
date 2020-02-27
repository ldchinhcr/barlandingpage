$(document).ready(function() {
    $(".scroller").click(function() {
        $('html, body').animate({
            scrollTop: $(".hung-about-us").offset().top
        }, 700);
    });
});