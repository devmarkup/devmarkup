$(document).ready(() => {
  function setCurrentYear() {
    $('.current-year').text(new Date().getFullYear());
  }

  function slideToggle() {
    $('.links').on('click', function () {
      $(this).siblings('.full-menu__links').toggleClass('active');
      $(this).toggleClass('active');
    });
    $('.contacts').on('click', function () {
      $(this).siblings('.full-menu__contacts').toggleClass('active');
      $(this).toggleClass('active');
    });
  }

  function initMenu() {
    $('.menu').click(function () {
      $('body').addClass('oh');
      $('html').addClass('oh');
      $('.full-menu').addClass('open');
    });

    $('.full-menu__close').click(function () {
      $('body').removeClass('oh');
      $('html').removeClass('oh');
      $('.full-menu').removeClass('open');
    });
  }

  function toggleLang() {
    $('.header__lang').click(function () {
      $('.header__lang').addClass('active');
    });
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.header__lang').length) {
        $('.header__lang').removeClass('active');
      }
    });
  }

  function fixedTopBlock() {
    let topFixedBlock = $('.first-screen__top');
    let fullMenu = $('.full-menu');
    let headTop = $('.details-portfolio__head--top');

    $(window).on('scroll', function () {
      let windowScroll = $(window).scrollTop();
      windowScroll >= 100 ? fullMenu.addClass('fixed-top') : fullMenu.removeClass('fixed-top');
      windowScroll >= 100 ? headTop.addClass('fixed-top') : headTop.removeClass('fixed-top');
      windowScroll >= 100 ? topFixedBlock.addClass('hide-top') : topFixedBlock.removeClass('hide-top');
      windowScroll >= 150 ? topFixedBlock.addClass('fixed-top') : topFixedBlock.removeClass('fixed-top');
    });
  }

  function initModal() {
    $('.get-started-modal').magnificPopup({
      type: 'inline'
    });

    $('.modal__close svg').magnificPopup('close');
  }

  initMenu();
  initModal();
  fixedTopBlock();
  setCurrentYear();
  slideToggle();
  toggleLang();
});
