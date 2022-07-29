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
      $('body').addClass('fixed');
      $('.full-menu').addClass('open');
    });

    $('.full-menu__close').click(function () {
      $('body').removeClass('fixed');
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

  initMenu();
  setCurrentYear();
  slideToggle();
  toggleLang();
});
