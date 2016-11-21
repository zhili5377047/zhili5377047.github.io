$(".section .aside li").on('click',function(){
	var index = $(this).index();
	$(this).find("a").addClass("change_color");
	$(this).siblings().find("a").removeClass("change_color");
	$(this).parents("ul").siblings("div").find(".circle").removeClass("change_bg");
	$(this).parents("ul").siblings("div").find(".circle").eq(index).addClass("change_bg");
	$(".section .main").hide();
	$(".section .main").eq(index).show();
})