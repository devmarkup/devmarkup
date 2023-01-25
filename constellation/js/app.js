$(document).ready(() => {
  function initAnimationsOnScroll() {
    new WOW().init({
      mobile: false
    });
  }

  function initButtonToTop() {
    const btnToTop = $('#btn-to-top');
    if (btnToTop.length) {
      let scrollTrigger = 100,
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
  }

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
    $('.get-started-modal').click(function () {
      $('#get-started-modal').modal({
        showClose: false,
        fadeDuration: 350
      });
    });
  }

  function initIntlTelInput() {
    const phoneContainer = $('.phone-container');
    const phone1 = $('.phone1');
    const phone2 = $('.phone2');

    function initMasking(formatterInput, maskedInput) {
      if (formatterInput && maskedInput) {
        const format = $(formatterInput).attr('placeholder');
        if (format) {
          $(maskedInput).attr('placeholder', format);
          $(maskedInput).mask(format.replace(/[1-9]/g, 0));
        }
      }
    }

    phone1.intlTelInput({
      initialCountry: 'ua',
      autoPlaceholder: 'aggressive',
      preferredCountries: ['ua', 'us', 'gb'],
      geoIpLookup: function (callback) {
        $.get('https://ipinfo.io', function () {}, 'jsonp').always(function (resp) {
          const countryCode = resp && resp.country ? resp.country : '';
          callback(countryCode);
        });
      }
    });
    initMasking('.phone1', '.phone2');
    phone1.on('countrychange', function () {
      $(this).val('');
      phone2.val('');
      initMasking(this, '.phone2');
    });
    phone2.focusin(() => {
      phoneContainer.addClass('focus');
    });
    phone2.focusout(() => {
      phoneContainer.removeClass('focus');
    });
    phoneContainer.on('mouseover', () => {
      phoneContainer.addClass('hover');
    });
    phoneContainer.on('mouseleave', () => {
      phoneContainer.removeClass('hover');
    });
  }

  function fileUpload() {
    const fileUpload = $('#file-upload');
    const uploadFileName = $('.upload__file-name');
    const defaultText = uploadFileName.text();
    if (fileUpload) {
      fileUpload.change(function (e) {
        uploadFileName.text(e.target.files[0].name);
        $('.upload__buttons').addClass('show');
      });
    }
    $('.upload__delete').click(() => {
      $('#file-upload').val(null);
      uploadFileName.text(defaultText);
      $('.upload__buttons').removeClass('show');
    });
  }

  // initAnimationsOnScroll();
  // initButtonToTop();
  initMenu();
  initModal();
  initIntlTelInput();
  fixedTopBlock();
  setCurrentYear();
  slideToggle();
  toggleLang();
  fileUpload();
});
