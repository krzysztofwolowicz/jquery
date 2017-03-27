(function($){
	
	$.fn.makeBorder = function(borderOptions){
		var borderSettings = $.extend({
			bWidth: "1px",
			bStyle: "solid",
			bColor: "#999",
			bRadius: "0"
		},borderOptions);
		
		return this.css({
			"border-width" : borderSettings.bWidth,
			"border-style" : borderSettings.bStyle,
			"border-color" : borderSettings.bColor,
			"border-radius" : borderSettings.bRadius
		});
	};
	
}(jQuery));

