$(document).ready(() => {
  $.fn.tabs = function () {
    if (!this || !this.length) {
      return;
    }
    var $me = this;
    var $active;
    var $content;
    var $links = $me.find('a');

    $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
    $active.addClass('active');
    $links.not($active).each(function () {
      $me.find(this.hash).fadeOut(400).hide();
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
      $content.fadeIn(400).show();
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

  stickyHeader();
});
