$(document).ready(() => {
  function initLearnMoreToggle() {
    $('.learn-more').click(function () {
      $('.toggled-text span').slideToggle();
    });
  }

  function initSmoothScroll() {
    $('a.smooth-scroll').click(function () {
      const elementClick = $(this).attr('href');
      const destination = $(elementClick).offset().top;
      $('html,body').animate({ scrollTop: destination }, 600);
      return false;
    });
  }

  function setCurrentYear() {
    $('.current-year').text(new Date().getFullYear());
  }

  initLearnMoreToggle();
  initSmoothScroll();
  setCurrentYear();
});
