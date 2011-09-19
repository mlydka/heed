(function( $ ) {
  $.fn.simpleSlider = function(settings) {

    settings = $.extend({
      interval: 5000
    }, settings);

    return this.each(function() {
      var slider = $(this);

      function getActive() {
        var active = slider.find('img.active');
	return active.length == 0 ? slider.find('img:last') : active;
      };

      function getNext() {
	var active = getActive();
        var next = active.next();
	return next.length == 0 ? slider.find('img:first') : next;
      };

      function autoSlide() {
	var active = getActive();
	var next   = getNext();

        active.addClass('last-active');
	next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 1000, function() {
	  active.removeClass('active last-active');
	});
	setTimeout(autoSlide, settings.interval);
      };

      slider.ready(function() {
        setTimeout(autoSlide, settings.interval);
      });

    });

  };
})( jQuery );
