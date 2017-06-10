$(document).ready(function(){
    var touch = $('#touch_menu'); //переменная для кнопки меню
    var menu = $('.nav');         //класс с навигацией
    
$ (touch).on('click', function(e){
    e.preventDefault();
    menu.slideToggle();
    });
    
    $(window).resize(function(){
    var wid = $(window).width();
    if(wid > 600 && menu.is(':hidden')){
    menu.removeAttr('style');
    }
    });
//     owl-carousel
    $(".owl-carousel").owlCarousel({
        items : 1,
        loop : true,
        autoHeight : true,
        center: true,
        touсhDrag: true,
        mouseDrag: false,
        autoplay: false,
        nav: true,
        autoplayTimeout: 6000
        
    });
    
    
});

//$(document).ready(function(){
//    $(".nav_center a").click(function){
//        $('.nav_center a').toggleClass('active')
//    });
//});