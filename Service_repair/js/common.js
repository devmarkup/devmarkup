$(function () {
    $('img').on('dragstart', function (event) {
        event.preventDefault();
    });
});

$(document).ready(function () {
    var touch = $('#touch_menu');
    var menu = $('.nav');

    $(touch).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function () {
        var wid = $(window).width();
        if (wid > 600 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
// owl-carousel
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoHeight: true,
        center: true,
        mouseDrag: false,
        autoplay: false,
        nav: true,
        autoplayTimeout: 6000
    });
});
// <![CDATA[
$(document).ready(function () {
    $(".hider").click(function () {
        $("#hidden").slideToggle("slow");
        return false;
    });
});// ]]>

$('#touch_menu').click(function () {
    $(this).toggleClass('active');
});


