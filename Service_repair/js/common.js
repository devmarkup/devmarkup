// why slider
var initSlider = function () {
    if ($(window).width() < 716) {
        $('.off-slider').addClass('why-slider').slick({
            autoplay: true
        });
    }
    else {
        $('.off-slider').removeClass('why-slider');
    }
};
$(document).ready(function () {
    // navigation
    var touch = $('#touch_menu');
    var menu = $('.nav');
    touch.on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
        $(this).toggleClass('active');
    });
    initSlider();
    $('.performance-carousel').slick({
        //autoplay: true
    });
    $('.performance-carousel-2').slick({
        //autoplay: true
    });
    // drag start
    $('img').on('dragstart', function (event) {
        event.preventDefault();
    });
});

$(window).resize(function () {
    initSlider();
    var wid = $(window).width();
    var menu = $('.nav');
    if (wid > 765 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});

