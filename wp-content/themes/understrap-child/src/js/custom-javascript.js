console.log('Put custom JS in this file: understrap-child/src/js/custom-javascript.js!');

// preloader JavaScript
// Wait for window load
jQuery(window).load(function() {
	// Animate loader off screen
	jQuery(".se-pre-con").fadeOut("slow");
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

	// using ScrollReveal
	ScrollReveal().reveal('.card', { interval: 200 });

    // script to scroll to each section by id using https://github.com/cferdinandi/smooth-scroll
    // var scroll = new SmoothScroll('a[href*="#"]');



});
