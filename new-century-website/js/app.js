$(document).ready(() => {
  $.fn.tabs = function () {
    if (!this || !this.length) {
      return;
    }
    let $me = this;
    let $active;
    let $content;
    let $links = $me.find('a');

    $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
    $active.addClass('active');
    $links.not($active).each(function () {
      $me.find(this.hash).fadeOut(100).hide();
    });
    $content = $me.find($active[0].hash);

    $me.on('click.tab', 'a', function (e) {
      e.preventDefault();
      if ($(e.target).parent('a')[0] === $active[0]) {
        return;
      }
      $active.removeClass('active');
      $content.hide();
      $active = $me.find(this);
      $content = $me.find(this.hash);
      $active.addClass('active');
      $content.fadeIn(100).show();
    });
    return this;
  };

  function stickyHeader() {
    let header = $('.header');
    let body = $('body');

    $(window).on('scroll', function () {
      let windowScroll = $(window).scrollTop();
      windowScroll >= 350 ? header.addClass('hide-top') : header.removeClass('hide-top');
      windowScroll >= 350 ? body.addClass('sticky') : body.removeClass('sticky');
      windowScroll >= 400 ? header.addClass('sticky') : header.removeClass('sticky');
    });
  }

  function toggleEl() {
    $('.head-toggle svg').on('click', function () {
      $(this).parent().siblings('.cont-toggle').slideToggle(150);
      $(this).parent().toggleClass('active');
    });
  }

  function initPhoneMask() {
    $('#footer-phone').mask('9 (999) 999-9999');
  }

  function setCurrentYear() {
    $('.current-year').text(new Date().getFullYear());
  }

  function scrollTop() {
    $('.scroll-top').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate(
        {
          scrollTop: 0
        },
        400
      );
    });
  }

  stickyHeader();
  toggleEl();
  initPhoneMask();
  setCurrentYear();
  scrollTop();
});
