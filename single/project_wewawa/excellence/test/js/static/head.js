$(function(){

	var head = $('#head');
	var bg = head.find('.bg');

	var img = new Image();
	img.src = bg.attr('src');

	img.onload = function(){
		console.log(bg.height())
		head.height(bg.height());

		$(window).on('resize', function(){
			head.height(bg.height());
		});
	}

});