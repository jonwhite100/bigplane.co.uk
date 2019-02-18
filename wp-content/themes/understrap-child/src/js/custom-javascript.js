// script to scroll to each section by id
( function( $ ) {
  $(document).on('click', 'a[href*="#"]:not([href="#"])', function(e) {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var hashStr = this.hash.slice(1);
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + hashStr +']');
      if (target.length) {
        $('html, body').animate({ scrollTop: target.offset().top }, 1000);
        window.location.hash = hashStr;
        return false;
        e.preventDefault();
      }
    }
  });
}(jQuery));
