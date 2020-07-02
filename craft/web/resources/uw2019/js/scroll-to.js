/* Function to scroll to anchor */
var scrollTo = function(id) {
	$('html,body').animate({ scrollTop: $(id).offset().top }, 1000, 'swing', function() {
		// Animation done
		window.location.hash = id;
	});
};

/* Scroll to anchor on page load */
$(window).on('load', function() {
	if (window.location.hash) {
		$('body, html').scrollTop(0);
		scrollTo(window.location.hash);
	}
});

$(document).ready(function() {
	/* Scroll to anchor on home page when click link with anchor */
	$('a').click(function(e) {
		var path = window.location.pathname;
		var hash = $(this).attr('href').split('#')[1];

		if (hash && (path === '/' || path === '/home')) {
			e.preventDefault();
			scrollTo('#' + hash);
		}
	});
});
