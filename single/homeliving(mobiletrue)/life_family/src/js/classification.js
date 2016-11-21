/*生活食品*/
$("#lifeFood").click(function() {
	$(".c-info").toggle();
})
$(".c-info a").click(function() {
	$(this).addClass("selected").siblings().removeClass("selected");
})