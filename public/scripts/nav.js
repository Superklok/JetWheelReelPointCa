$(function() {
	$(document).scroll(function() {
		const $nav = $('#jwrNav');
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});