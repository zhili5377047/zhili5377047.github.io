$("main aside li").on('click',function(){
	var index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$("main .center ul").hide().eq(index).show();
})
//分页器
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