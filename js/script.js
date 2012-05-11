$(document).ready(function() {

	$("section").each(function() {
		var parent = $(this);
		$(".year", this).each(function() {
			var i = $(this).index();
			var	height = $('article p:eq(' + i + ')', parent).outerHeight(true);

			$(this).height(height);
		});

	});
});