console.log('Put custom JS in this file: understrap-child/src/js/custom-javascript.js!');

// preloader JavaScript
// Wait for window load
jQuery(window).load(function() {
	// Animate loader off screen
	jQuery(".se-pre-con").fadeOut("slow");
	// Stop carousel from autoplaying
	jQuery('#carousel-testimonials.carousel').carousel('pause');
});

jQuery(document).ready(function($) {
    // script to shrink header
	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			$('.navbar').addClass('shrink');
		}

		else{
			$('.navbar').removeClass('shrink');
		}
	});

	// script to scroll to each section by id using https://github.com/cferdinandi/smooth-scroll
	$('a[href^="#"]').on('click',function (e) {
		// e.preventDefault();
		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top-120
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});

	// using ScrollReveal
	ScrollReveal().reveal('.card', { interval: 200 });

    // script to scroll to each section by id using https://github.com/cferdinandi/smooth-scroll
    // var scroll = new SmoothScroll('a[href*="#"]');



});
