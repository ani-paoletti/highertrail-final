$(document).ready(function() {

	var w = window.innerWidth - 200;
	var h = window.innerHeight - 200;

	function shuffle(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	//$('#mitten').css({'top' : shuffle(0,h), 'left' : shuffle(0,w)});

	$('#mitten').each(function(){
		$(this).css({'top' : shuffle(0,h), 'left' : shuffle(0,w),'-webkit-transform' : 'rotate(' + shuffle(0,w) + 'deg)' });
	});

	$('#mitten').mouseenter(function(){
		$(this).css({'top' : shuffle(0,h), 'left' : shuffle(0,w) ,'-webkit-transform' : 'rotate(' + shuffle(0,w) + 'deg)','-webkit-transition' : 'all 0.5s' });
	});

});