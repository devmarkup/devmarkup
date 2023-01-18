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

  function customSelect(selectId) {
    let selectHead = $(`${selectId} .select__head`);
    let selectDrop = $(`${selectId} .select__drop`);
    selectHead.on('click', function () {
      selectHead.toggleClass('open');
      $(this).siblings('.select__drop').toggleClass('open');
    });
    let selectDropItems = $(`${selectId} .select__drop .item`);
    selectDropItems.on('click', function () {
      selectDropItems.removeClass('active');
      $(this).addClass('active');
      console.log($(this).text());
      let rep_text = $(this).text();
      $(`${selectId} .inner-text.inner-text`).text(rep_text);
      selectHead.toggleClass('open');
      selectDrop.toggleClass('open');
    });
    $(document).mouseup(function () {
      let div = $(selectId);
      if ($(event.target).closest(div).length) return;
      selectHead.removeClass('open');
      selectDrop.removeClass('open');
    });
  }

  function toggleMobileMenu() {
    const body = $('body');
    const burger = $('.header__burger');
    const headerNav = $('.header__nav');
    const closeMenu = $('.close-menu');
    burger.click(function () {
      body.addClass('oh');
      headerNav.addClass('active');
    });
    closeMenu.click(function () {
      body.removeClass('oh');
      headerNav.removeClass('active');
    });
    $('.header__nav-item svg').click(function () {
      $(this).parent().siblings('.header__menu').toggleClass('active');
      $(this).parent().toggleClass('active');
    });
    $('.menu-item__category').click(function () {
      $(this).toggleClass('active');
      $(this).siblings('.menu-item__links').toggleClass('active');
    });
  }

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
    if (window.innerWidth <= 1024) {
      $('.head-toggle').removeClass('active');
    }
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

  customSelect('#client-select');
  customSelect('#caregiver-select');
  customSelect('#caregiver-select-modal');
  customSelect('#client-select-modal');
  toggleMobileMenu();
  stickyHeader();
  toggleEl();
  initPhoneMask();
  setCurrentYear();
  scrollTop();
});
