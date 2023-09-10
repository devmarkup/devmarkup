$(document).ready(() => {
  new WOW().init({
    mobile: false
  });

  // Check platforms
  let isMac =
    navigator.platform.toUpperCase().indexOf('MAC') !== -1 || navigator.platform.toUpperCase().indexOf('IPHONE') !== -1;
  let isWindows = navigator.platform.toUpperCase().indexOf('WIN') !== -1;
  if (isMac) {
    $('#app-store').addClass('show');
  } else if (isWindows) {
    $('#google-play').addClass('show');
  } else {
    $('#app-store').addClass('show');
    $('#google-play').addClass('show');
  }

  // Button to top
  let btnToTop = $('#to-top');
  if (btnToTop.length) {
    let scrollTrigger = window.innerHeight,
      backToTop = function () {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          btnToTop.addClass('show');
        } else {
          btnToTop.removeClass('show');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    btnToTop.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate(
        {
          scrollTop: 0
        },
        400
      );
    });
  }

  // burger
  $('.burger-nav').click(function () {
    const burgerNav = $('.burger-nav');
    const headerNav = $('.header__nav');
    const body = $('body');
    if (burgerNav.hasClass('active')) {
      burgerNav.removeClass('active');
      headerNav.removeClass('show');
      body.removeClass('fixed');
    } else {
      burgerNav.addClass('active');
      headerNav.addClass('show');
      body.addClass('fixed');
    }
  });
  $(document).mouseup(function (e) {
    let container = $('.header__nav.show');
    const burgerNav = $('.burger-nav');
    if (
      !container.is(e.target) &&
      container.has(e.target).length === 0 &&
      !burgerNav.is(e.target) &&
      burgerNav.has(e.target).length === 0
    ) {
      burgerNav.removeClass('active');
      $('.header__nav').removeClass('show');
      $('body').removeClass('fixed');
    }
  });
  $('.header__nav a').click(function () {
    $('.burger-nav').removeClass('active');
    $('.header__nav').removeClass('show');
    $('body').removeClass('fixed');
  });

  // scrollById
  $('a.scrollTo').click(function () {
    let elementClick = $(this).attr('href');
    let destination = $(elementClick).offset().top;
    $('html,body').animate({ scrollTop: destination }, 1000);
    return false;
  });

  // select-options
  let selectHead = $('#select-lang .select__head');
  let selectDrop = $('#select-lang .select__drop');
  selectHead.on('click', function () {
    $(this).siblings('.select__drop').addClass('open');
    $(this).addClass('open');
  });
  let selectDropItems = $('#select-lang .select__drop .item');
  selectDropItems.on('click', function () {
    selectDropItems.removeClass('active');
    $(this).addClass('active');
    let rep_text = $(this).text();
    $('#select-lang .inner-text.inner-text').text(rep_text);
    selectDrop.removeClass('open');
    selectHead.removeClass('open');
  });
  $(document).mouseup(function () {
    let div = $('#select-lang');
    if ($(event.target).closest(div).length) return;
    selectDrop.removeClass('open');
    selectHead.removeClass('open');
  });
});
