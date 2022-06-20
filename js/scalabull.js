(function($) {

  function mobileToggle() {
    var $btn = $('.mobile-btn'),
        $all = $('.mobile-btn, header.main-header'),
        $body = $('body'),
        $header = $('.main-header'),
        $headerOpen = $('.main-header.open'),
        open = 'open',
        close = 'close',
        freeze = 'is-frozen';

    var $headerClose = $('.main-header .close');
    var $offsetTop = $('.main-header.close').offset().top;

    $btn.click(function() {
      $all.toggleClass(open);
      $body.toggleClass(freeze);

      // Prevent iOS background from scrolling:
      // - set body to FIXED position
      // - Remain position after nav is closed.
      if ( $header.hasClass(open) ) {
        $offsetTop = $header.offset().top;
        $header.removeClass(close);
        //$body.css('position', 'fixed');
      } else {
        $header.addClass(close);
        $body.css('position', '');
        $("html, body").scrollTop($offsetTop);
      }
    });

    $(window).resize(function() {
      if ( window.outerWidth >= 768 ) {
        $all.removeClass(open);
        $body.removeClass(freeze);
      }
    });
  }

  mobileToggle();
}(jQuery));