(function($){
	
	$.fn.getDataAttr = function(dataName){
		return this.each(function(){
			var el = $(this);
			alert(el.data(dataName));
		});
	};
	
}(jQuery));

