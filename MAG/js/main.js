$(document).ready(function(){
    var touch = $('#touch_menu'); //переменная для кнопки меню
    var menu = $('.nav');         //класс с навигацией
    
$ (touch).on('click', function(e){
    e.preventDefault();
    menu.slideToggle();
    });
    
    $(window).resize(function(){
    var wid = $(window).width();
    if(wid >500 && menu.is(':hidden')){ // 760px
    menu.removeAttr('style');
    }
    });
});
$(document).ready(function(){
    $(".hider").click(function(){
        $("#hidden").slideToggle("slow");
        return false;
    });
});
// fancybox
$(document).ready(function() {
    $(".fancybox").fancybox({
        'scrolling': 'no',
        'padding': 0,
        'centerOnScroll': true     
    }).trigger('click');
    
});
// scroll
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
});
// slider
$(document).ready(function(){
    $('.slider').bxSlider({
        adaptiveHeight: true,
        responsive: true,
        controls: false,
        mode: 'horizontal',
        touchEnabled: true,
        swipeThreshold: 100,
        autoHover: true,
        speed: 700
    });
});





