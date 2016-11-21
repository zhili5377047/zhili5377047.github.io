var index = 1;
$(".search_result li").on('click',function(){
	var index = $(this).index();
	if(!index) return;
	$(this).addClass("active").siblings().removeClass("active");
})
$(".filter a").on('click',function(){
	$(this).addClass("active").siblings().removeClass("active");
})
$(".pagination .page").on('click',function(){
	index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
})
$(".pagination .adjust").on('click',function(){
	var len = $(".pagination li").length - 1;
	var a = $(this).index();
	if(a == 0){//上一张
		index--;
		if(index < 1){
			index = 1;
		}
	}else if(a == len){
		index++;
		if(index > len - 1){
			index = len - 1;
		}
	}
	console.log(index);
	$(".pagination li").eq(index).addClass("active").siblings().removeClass("active");
})

// 弹窗
$(".mask").on('click',function(){
	$(this).hide();
})
$(".mask .bar").on('click',function(e){
	e.stopPropagation();
})
$(".mask .bar p span").on('click',function(){
	$(this).parents(".mask").hide();
})
$(".nothing .text button").on('click',function(){
	$(".mask").show();
})
