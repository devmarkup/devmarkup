// fancybox
$(document).ready(function() {
    $(".fancybox").fancybox({
        'autoResize':true,
        'padding': 0,
        'scrolling': 'yes'
    });
});
$(document).ready(function() {
    $(".fancybox_bg").fancybox({
        'autoResize':true,
        'padding': 0,
        'scrolling': 'yes',
        // opacity background
        helpers : { 
        overlay: {
        opacity: 0.91, // or the opacity you want 
        css: {'background': 'rgba(0,0,0,.9)'} // or your preferred hex color value
        } // overlay 
        } // helpers 
    });
    
    $(document).ready(function() {
    $(".fancybox_video").fancybox({
        'autoResize':true,
        'padding': 0,
        'scrolling': 'yes',
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        }
    });
});
});
$(function () {
	$(document).ready(function () {
		banner();
		firstScreen();
		if ($(window).width() > 1100) {
			//$('body').perfectScrollbar();
		}
		$(window).resize(function () {
			firstScreen();
			if ($(window).width() < 1100) {
				//if ($('body').hasClass('ps-container') && $('body').hasClass('ps-active-y')) {
				//    $('body').perfectScrollbar('destroy');
				//}
			} else {
				//$('body').perfectScrollbar();
			}

			if ($(window).width() < 1024) {
				$("video")[0].pause();
			} else {
				$("video:visible")[0].play();
			}

		});



		function banner() {
			$('#Video-01').vide({
				mp4:    'img/1.mp4',
				poster: 'img_perv_ekran_1.jpg'
			}, {
				loop:       false,
				preload:    'auto',
				autoplay:   false,
				position:   '50% 50%',
				posterType: 'jpg'
			});

			$('#Video-02').vide({
				mp4:    'img/2.mp4',
				poster: 'img_perv_ekran_1.jpg'
			}, {
				loop:       false,
				preload:    'auto',
				autoplay:   false,
				position:   '50% 50%',
				posterType: 'jpg'
			});

			$('#Video-03').vide({
				mp4:    'img/3.mp4',
				poster: 'img_perv_ekran_1.jpg'
			}, {
				loop:       false,
				preload:    'auto',
				autoplay:   false,
				position:   '50% 50%',
				posterType: 'jpg'
			});


			if ($(window).width() < 1024) {
				$("#Video-01").show();
			} else {
				$("#Video-01").show();
				$("#Video-01 video")[0].play();
			}





			$(".banner-button-1").on("click", function () {

				$("#Video-02").fadeOut(400);
				$("#Video-03").fadeOut(400);
				setTimeout(function () {
					$("#Video-02 video")[0].pause();
					$("#Video-03 video")[0].pause();
					$("#Video-02 video")[0].currentTime = 0;
					$("#Video-03 video")[0].currentTime = 0;
				}, 400);

				$("#Video-01").fadeIn(700);
				if ($(window).width() >= 1024) {
					$('#Video-01 video')[0].play();
				}
			});

			$(".banner-button-2").on("click", function () {
				$("#Video-01").fadeOut(400);
				$("#Video-03").fadeOut(400);
				setTimeout(function () {
					$("#Video-01 video")[0].pause();
					$("#Video-03 video")[0].pause();
					$("#Video-01 video")[0].currentTime = 0;
					$("#Video-03 video")[0].currentTime = 0;
				}, 400);

				$("#Video-02").fadeIn(700);
				if ($(window).width() >= 1024) {
					$("#Video-02 video")[0].play();
				}
			});

			$(".banner-button-3").on("click", function () {
				$("#Video-01").fadeOut(400);
				$("#Video-02").fadeOut(400);
				setTimeout(function () {
					$("#Video-01 video")[0].pause();
					$("#Video-02 video")[0].pause();
					$("#Video-01 video")[0].currentTime = 0;
					$("#Video-02 video")[0].currentTime = 0;
				}, 400);
				$("#Video-03").fadeIn(700);
				if ($(window).width() >= 1024) {
					$("#Video-03 video")[0].play();
				}
			});

			$(".banner-button").on("click", function () {
				$(this).addClass("Active").siblings().removeClass("Active");
			});

			$('video').on('ended', function () {
				if ($('.banner-button-1').hasClass('Active')) {
					$("#Video-01").fadeOut(400);
					$("#Video-03").fadeOut(400);
					setTimeout(function () {
						$("#Video-01 video")[0].pause();
						$("#Video-03 video")[0].pause();
						$("#Video-01 video")[0].currentTime = 0;
						$("#Video-03 video")[0].currentTime = 0;
					}, 400);
					$("#Video-02").fadeIn(700);
					if ($(window).width() >= 1024) {
						$("#Video-02 video")[0].play();
					}
					$('.banner-button-2').addClass("Active").siblings().removeClass("Active");
				} else if ($('.banner-button-2').hasClass('Active')) {
					$("#Video-01").fadeOut(400);
					$("#Video-02").fadeOut(400);
					setTimeout(function () {
						$("#Video-01 video")[0].pause();
						$("#Video-02 video")[0].pause();
						$("#Video-01 video")[0].currentTime = 0;
						$("#Video-02 video")[0].currentTime = 0;
					}, 400);
					$("#Video-03").fadeIn(700);
					if ($(window).width() >= 1024) {
						$("#Video-03 video")[0].play();
					}
					$('.banner-button-3').addClass("Active").siblings().removeClass("Active");
				} else {
					$("#Video-02").fadeOut(400);
					$("#Video-03").fadeOut(400);
					setTimeout(function () {
						$("#Video-02 video")[0].pause();
						$("#Video-03 video")[0].pause();
						$("#Video-02 video")[0].currentTime = 0;
						$("#Video-03 video")[0].currentTime = 0;
					}, 400);
					$("#Video-01").fadeIn(700);
					if ($(window).width() >= 1024) {
						$('#Video-01 video')[0].play();
					}
					$('.banner-button-1').addClass("Active").siblings().removeClass("Active");
				}
			});

		}
	});
});

function colorxbox() {
	$(".js-foto").colorbox({
		rel:       'js-foto',
		className: "foto-opacity"
	});
}

/* bx-slider */
$(document).ready(function(){
    $('.slider').bxSlider({
        adaptiveHeight: true,
        responsive: true,
        controls: true
    });
});
/*** Slider ***/
function Slider() {
	$('#Infobox-Slide-1 .Slider-Button.Right').click(function () {
		$('#Infobox-Slide-1').animate({'left': '-' + $(window).width() + 'px', 'opacity': 0}, 400);
		$('#Infobox-Slide-2').css({'left': $(window).width() + 'px'}, 400);
		$('#Infobox-Slide-2').animate({'left': 0, 'opacity': 1}, 400);

	});

	$('#Infobox-Slide-2 .Slider-Button.Left').click(function () {
		$('#Infobox-Slide-2').animate({'left': 2 * $(window).width() + 'px', 'opacity': 0}, 400);
		$('#Infobox-Slide-1').css({'left': '-' + $(window).width() + 'px'}, 400);
		$('#Infobox-Slide-1').animate({'left': 0, 'opacity': 1}, 400);
	});

	$('#Infobox-Slide-2 .Slider-Button.Right').click(function () {
		$('#Infobox-Slide-2').animate({'left': '-' + $(window).width() + 'px', 'opacity': 0}, 400);
		$('#Infobox-Slide-3').css({'left': $(window).width() + 'px'}, 400);
		$('#Infobox-Slide-3').animate({'left': 0, 'opacity': 1}, 400);
	});

	$('#Infobox-Slide-3 .Slider-Button.Left').click(function () {
		$('#Infobox-Slide-3').animate({'left': 2 * $(window).width() + 'px', 'opacity': 0}, 400);
		$('#Infobox-Slide-2').css({'left': '-' + $(window).width() + 'px'}, 400);
		$('#Infobox-Slide-2').animate({'left': 0, 'opacity': 1}, 400);
	});

	$('div#Infobox-Slide-1 img').load(function () {
		$('.Slider-Wrapper').css('height', $('div#Infobox-Slide-1 img').height() + 'px');
	});

	$('.Slider-Wrapper').css('height', $('div#Infobox-Slide-1 img').height() + 'px');

	$(window).resize(function () {
		$('.Slider-Wrapper').css('height', $('div#Infobox-Slide-1 img').height() + 'px');
	});

	$('.Slider-Tab').click(function () {
		$(this).addClass('Active').siblings().removeClass('Active');
		$('.infobox.slider').removeClass('Visible');
		$('#Infobox-Slide-' + ($(this).index() + 1)).addClass('Visible');
	});


	// Gallery
	$('.Gallery .Tab').click(function () {
		$(this).addClass('Active').siblings().removeClass('Active');
		$('.Gallery-Image').removeClass('Active');
		$('#Gallery-Image-' + ($(this).index() + 1)).addClass('Active');
	});
}


function callback() {
	$(".top .js-callBack").on("click", function () {
		$(".callback").fadeOut(400);
		$(".callback-top").fadeIn(400);
		return false;
	});

	$("footer .js-callBack").on("click", function () {
		$(".callback").fadeOut(400);
		$(".callback-bottom").fadeIn(400);
		return false;
	});

	$("body, .Callback-Hide").on("click", function () {
		$(".callback").fadeOut(400);
	});

	$(".callback-top").on("click", function () {
		return false;
	});
	$(".callback-bottom").on("click", function () {
		return false;
	});
}

function mask() {
	$(".mask").mask("+7 (999) 999-9999");
}

function firstScreen() {
	// if ($(window).height() > 640 && $(window).width() > 1024) {
	$('.top').css('height', $(window).height() + 'px');
	/* } else {
	 $('.top').css('height', '');
	 }*/
}

/*** Change Images ***/
function ChangeSize(This, Folder) {
	var ImgParts = $(This).attr('src').split('/');
	var Name = ImgParts[ImgParts.length - 1];
	$(This).attr('src', './images/' + Folder + Name);
}

function ChangeImages() {
	var Width = $(window).width();
	$('img.animate.zoomIn').each(function () {
		if (Width < 400) {
			ChangeSize(this, 'mobile/');
		} else if (Width < 800) {
			ChangeSize(this, 'mobile_middle/');
			//   } else if (Width < 1200) {
			//   ChangeSize(this, 'tablet/');
		} else {
			ChangeSize(this, '');
		}
	});


}


function bubbles() {
	var Animated = false;
	var Timer = false;
	$('.Circle-Item').mousemove(function () {
		if (!Animated) {
			Animated = true;
			clearTimeout(Timer);

			Width = $(this).width();
			Height = $(this).height();

			$(this).css({
				'width':      Width * 1.3 + 'px',
				'height':     Height * 1.3 + 'px',
				'marginLeft': -0.3 * Width / 2,
				'marginTop':  -0.3 * Height / 2
			});

			if ($(this).parent().attr('id') == 'Info-Circle-1') {
				$('#Info-Circle-2').css('left', $('#Info-Circle-2').css('left').split('px')[0] * 1.05 * (-1) + 'px');
				$('#Info-Circle-4').css('top', $('#Info-Circle-4').css('top').split('px')[0] * 1.11 + 'px');
				$('#Info-Circle-1 h3').css('font-size', $('#Info-Circle-1 h3').css('font-size').split('px')[0] * 1.3 +
				'px');
			} else if ($(this).parent().attr('id') == 'Info-Circle-2') {
				$('#Info-Circle-1').css('left', $('#Info-Circle-1').css('left').split('px')[0] * 0.6 + 'px');
				$('#Info-Circle-3').css('right', $('#Info-Circle-3').css('right').split('px')[0] * 0.6 + 'px');
				$('#Info-Circle-2 h3').css('font-size', $('#Info-Circle-2 h3').css('font-size').split('px')[0] * 1.3 +
				'px');
			} else if ($(this).parent().attr('id') == 'Info-Circle-3') {
				$('#Info-Circle-2').css('left', $('#Info-Circle-2').css('left').split('px')[0] * 3 + 'px');
				$('#Info-Circle-5').css('top', $('#Info-Circle-5').css('top').split('px')[0] * 1.2 + 'px');
				$('#Info-Circle-3 h3').css('font-size', $('#Info-Circle-3 h3').css('font-size').split('px')[0] * 1.3 +
				'px');
			} else if ($(this).parent().attr('id') == 'Info-Circle-4') {
				$('#Info-Circle-1').css('top', $('#Info-Circle-1').css('top').split('px')[0] * 0.6 + 'px');
				$('#Info-Circle-6').css('left', $('#Info-Circle-6').css('left').split('px')[0] * 0.7 + 'px');
				$('#Info-Circle-4 h3').css('font-size', $('#Info-Circle-4 h3').css('font-size').split('px')[0] * 1.3 +
				'px');
			} else if ($(this).parent().attr('id') == 'Info-Circle-5') {
				$('#Info-Circle-3').css('top', $('#Info-Circle-3').css('top').split('px')[0] * 0.7 + 'px');
				$('#Info-Circle-6').css('left', $('#Info-Circle-6').css('left').split('px')[0] * 1.25 + 'px');
				$('#Info-Circle-5 h3').css('font-size', $('#Info-Circle-5 h3').css('font-size').split('px')[0] * 1.3 +
				'px');
			} else if ($(this).parent().attr('id') == 'Info-Circle-6') {
				$('#Info-Circle-4').css('left', $('#Info-Circle-4').css('left').split('px')[0] * 0.6 + 'px');
				$('#Info-Circle-5').css('right', $('#Info-Circle-5').css('right').split('px')[0] * 0.8 + 'px');
				$('#Info-Circle-6 h3').css('font-size', $('#Info-Circle-6 h3').css('font-size').split('px')[0] * 1.3 +
				'px');
			}
		}
	});

	$('.Circle-Item').mouseout(function () {
		$(this).css({'width': '', 'height': '', 'marginLeft': '', 'marginTop': ''});
		if ($(this).parent().attr('id') == 'Info-Circle-1') {
			$('#Info-Circle-2').css('left', '');
			$('#Info-Circle-4').css('top', '');
			$('#Info-Circle-1 h3').css('font-size', '');
		} else if ($(this).parent().attr('id') == 'Info-Circle-2') {
			$('#Info-Circle-1').css('left', '');
			$('#Info-Circle-3').css('right', '');
			$('#Info-Circle-2 h3').css('font-size', '');
		} else if ($(this).parent().attr('id') == 'Info-Circle-3') {
			$('#Info-Circle-2').css('left', '');
			$('#Info-Circle-5').css('top', '');
			$('#Info-Circle-3 h3').css('font-size', '');
		} else if ($(this).parent().attr('id') == 'Info-Circle-4') {
			$('#Info-Circle-1').css('top', '');
			$('#Info-Circle-6').css('left', '');
			$('#Info-Circle-4 h3').css('font-size', '');
		} else if ($(this).parent().attr('id') == 'Info-Circle-5') {
			$('#Info-Circle-3').css('top', '');
			$('#Info-Circle-6').css('left', '');
			$('#Info-Circle-5 h3').css('font-size', '');
		} else if ($(this).parent().attr('id') == 'Info-Circle-6') {
			$('#Info-Circle-4').css('left', '');
			$('#Info-Circle-5').css('right', '');
			$('#Info-Circle-6 h3').css('font-size', '');
		}

		Timer = setTimeout(function () {
			Animated = false;
		}, 300);
	});

}








