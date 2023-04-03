$(document).ready(() => {
  function initModal() {
    $('.start-here-modal').click(function () {
      $('#start-here-modal').modal({
        showClose: false,
        fadeDuration: 100
      });
    });
  }

  function setCurrentYear() {
    $('.current-year').text(new Date().getFullYear());
  }

  initModal();
  setCurrentYear();
});
