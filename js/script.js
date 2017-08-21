$(document).ready(function() {

	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top}, 500);
	    return false;
	});

	$('.menu-toggle').click(function() {
		$('.menu-toggle').toggleClass('menu-open-close'),
		$('.nav-links-fac').toggleClass('menu-show-hide');
	});

	$(".toggle").click(function() {
		$("#x-alu").toggle('500');
	});

	$(".toggle").click(function() {
		$("#x-3d").toggle('500');
	});

	$("#program-button").click(function(){
		$(".prog-links-f").slideToggle('500')
	});

});
