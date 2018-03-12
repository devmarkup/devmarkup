$(function () {
    $('img').on('dragstart', function (event) {
        event.preventDefault();
    });

    $('.toggle-mnu').on('click', function () {
        $(this).toggleClass('on');
        $(this).siblings('.top-nav').slideToggle(150);
    });

    $('.top-nav li a').on('click', function () {
        if ($(window).width() <= 1200) {
            $('.top-nav').toggle();
            $('.toggle').toggleClass('on');
        }
    });


    $('.arrow-down').on('click', 'a', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });

    new WOW().init();

    $('.modal-form').magnificPopup({
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true
    });
});
$(window).on('load', function () {
    $('.logo').delay(600).addClass('animation');
});