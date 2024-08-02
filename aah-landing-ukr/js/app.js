$(document).ready(() => {
  function initFormTabIndex() {
    $(document).ready(function () {
      const widgetTrigger = $('#widget-trigger');
      const skipLink = $('.skip-text');
      let tabPressCount = 0;
      $(document).on('keydown', function (event) {
        if (event.key === 'Tab') {
          if (tabPressCount < 2) {
            event.preventDefault();
            tabPressCount++;
            if (tabPressCount === 1) {
              skipLink.focus();
            } else if (tabPressCount === 2) {
              widgetTrigger.focus();
            }
          }
        }
        if (event.key === 'Enter' && widgetTrigger.is(':focus')) {
          widgetTrigger.click();
          setTimeout(() => {
            widgetTrigger.blur();
          }, 10);
        }
        if (event.key === 'Enter' && skipLink.is(':focus')) {
          skipLink.click();
          setTimeout(() => {
            skipLink.blur();
          }, 10);
        }
      });
      $(skipLink).on('blur', function () {
        if (tabPressCount === 1) {
          tabPressCount = 2;
        }
      });
      $(widgetTrigger).on('blur', function () {
        if (tabPressCount === 2) {
          tabPressCount = 3;
        }
      });
    });
  }

  function initLearnMore() {
    $('.learn-more').click(function () {
      const termsContainer = $(this).closest('.terms');
      $(this).toggleClass('active');
      termsContainer.find('.load-content').slideToggle();
    });
  }

  function setCurrentYear() {
    $('.current-year').text(new Date().getFullYear());
  }

  function initStickyBlock() {
    $(window).scroll(function () {
      const $stickyPanel = $('.sticky-panel');
      let $stickyButtons = $('.sticky-buttons');
      let $body = $('body');

      const scrollTop = $(window).scrollTop();
      if (scrollTop >= 100) {
        $stickyPanel.addClass('fixed');
      } else {
        $stickyPanel.removeClass('fixed');
      }
      if (scrollTop > 300) {
        $stickyButtons.addClass('visible');
        $body.addClass('with-buttons');
      } else {
        $stickyButtons.removeClass('visible');
        $body.removeClass('with-buttons');
      }
    });
  }

  function initModal() {
    $('.show-modal').click(function () {
      $('#modal').modal({
        showClose: false,
        fadeDuration: 250
      });
    });
  }

  initStickyBlock();
  initModal();
  initFormTabIndex();
  initLearnMore();
  setCurrentYear();
});
