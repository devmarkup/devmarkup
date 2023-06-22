$(document).ready(() => {
  function setCurrentYear() {
    $('.current-year').text(new Date().getFullYear());
  }

  function initModal() {
    $('.fill-out-modal-js').click(function () {
      $('#fill-out-modal').modal({
        showClose: false,
        fadeDuration: 150
      });
    });
    setTimeout(() => {
      $('#before-you-go-modal').modal({
        showClose: false,
        fadeDuration: 150
      });
    }, 3000);
    $('.close-popup').click(function () {
      $('.modal-close').click();
    });
  }

  function initSmoothScroll() {
    $('a.smooth-scroll').click(function () {
      const elementClick = $(this).attr('href');
      const destination = $(elementClick).offset().top;
      $('html,body').animate({ scrollTop: destination }, 1000);
      return false;
    });
  }

  setCurrentYear();
  initModal();
  initSmoothScroll();
});
