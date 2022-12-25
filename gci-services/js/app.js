$(document).ready(() => {
  function smoothScrollLink() {
    $('a.smooth-scroll').click(function () {
      const elementClick = $(this).attr('href');
      const destination = $(elementClick).offset().top;
      $('html,body').animate({ scrollTop: destination }, 1000);
      return false;
    });
  }

  smoothScrollLink();
});
