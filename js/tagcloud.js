//require <jquery.packed.js>
//require-css <tagcloud/tagcloud.css>
(function(){
	var $ = jQuery;
	
	$(document).ready(function() {
	
		$('.xf-tagcloud li').each(function(){
		
			var freq = parseInt($(this).attr('data-xf-frequency'));
			$(this).children().css('font-size', (freq / 10 < 1) ? freq / 10 + 1 + "em": (freq / 10 > 2) ? "2em" : freq / 10 + "em");
		
		});
		
		
	});
})();