particlesJS('particles-js', {
    particles: {
        color: '#fff',
        shape: 'circle', // "circle", "edge" or "triangle"
        opacity: 0.6,
        size: 4,
        size_random: true,
        nb: 110,
        line_linked: {
            enable_auto: true,
            distance: 100,
            color: '#fff',
            opacity: 0.7,
            width: 1,
            condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        },
        anim: {
            enable: true,
            speed: 1
        }
    },
    interactivity: {
        enable: true,
        mouse: {
            distance: 250
        },
        detect_on: 'canvas', // "canvas" or "window"
        mode: 'grab',
        line_linked: {
            opacity: .5
        },
        events: {
            onclick: {
                enable: true,
                mode: 'push', // "push" or "remove" (particles)
                nb: 4
            }
        }
    },
    retina_detect: true
});
/////////////////////
new WOW().init();
// Nav
$(document).ready(function () {
    $("a.ancLinks").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate({scrollTop: destination}, 1000);
        return false;
    });
});
$('#menu-toggle').click(function () {
    $(this).toggleClass('open');
});


$('.toggle-icon').click(function() {
    $('#nav-container').toggleClass('pushed');
});