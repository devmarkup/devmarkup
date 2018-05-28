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
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    midClick: true
  });
});
$(window).on('load', function () {
  $('.logo').delay(600).addClass('animation');
});

jQuery(document).ready(function ($) {
  var contentSections = $('.cd-section'),
      navigationItems = $('#cd-vertical-nav a');

  updateNavigation();
  $(window).on('scroll', function () {
    updateNavigation();
  });

  navigationItems.on('click', function (event) {
    event.preventDefault();
    smoothScroll($(this.hash));
  });

  $('.cd-scroll-down').on('click', function (event) {
    event.preventDefault();
    smoothScroll($(this.hash));
  });

  //open-close navigation on touch devices
  $('.touch .cd-nav-trigger').on('click', function () {
    $('.touch #cd-vertical-nav').toggleClass('open');

  });
  //close navigation on touch devices when selectin an elemnt from the list
  $('.touch #cd-vertical-nav a').on('click', function () {
    $('.touch #cd-vertical-nav').removeClass('open');
  });

  function updateNavigation() {
    contentSections.each(function () {
      $this = $(this);
      var activeSection = $('#cd-vertical-nav a[href="#' + $this.attr('id') + '"]').data('number') - 1;
      if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
        navigationItems.eq(activeSection).addClass('is-selected');
      } else {
        navigationItems.eq(activeSection).removeClass('is-selected');
      }
    });
  }

  function smoothScroll(target) {
    $('body,html').animate(
        {'scrollTop': target.offset().top},
        600
    );
  }
  $(window).on('load', function () {
    $('.head-toggle').on('click', function () {
      $(this).siblings('.cont-toggle').slideToggle(150);
      $(this).toggleClass('active');
    });
  });
  $('.diploma-sl').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    adaptiveHeight: true
  })
});