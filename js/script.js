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

	$(window).scroll(function() {
		if($(document).scrollTop() > 50) {
			$('.nav-span').css({
				'display': 'none'
			}),
			$('#nav-small').load("pages/nav/nav.html .nav-span-small"),
			$('#nav-small').css({
				'display':'inline',
				'position': 'fixed',
				'z-index':'3',
				'width':'100vw'
			});
		} else {
			$('.nav-span').css({
				'display':'inline',
				'position':'relative',
				'width' : '100vw'
			}),
			$('#nav-small').css({
				'display':'inline'
			});
		}
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
