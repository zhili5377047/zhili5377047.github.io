//数量
$("#up").on('click',function(){
	var i = $(this).siblings("input").val();
	i++;
	$(this).siblings("input").val(i);
})
$("#down").on('click',function(){
	var i = $(this).siblings("input").val();
	i--;
	if(i){
		$(this).siblings("input").val(i);
	}else{
		i = 1;
	}
})

//弹窗
$(".mask").on('click',function(){
	$(this).hide();
})
$(".mask .upgrade").on('click',function(e){
	e.stopPropagation();
})
$("#buy").on('click',function(){
	$(".mask").show();
})


//规格
$(".main .leftside .right .size span").on('click',function(){
	$(this).addClass("active").siblings().removeClass("active");
})

//产品详情用户评价
$(".main .leftside .left-bottom .title p").on('click',function(){
	var index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	var a = (!index)?".detail":".comment";
	$(this).parents(".title").siblings("div").hide();
	$(this).parents(".title").siblings(a).show();
})

//分页器
var index = 1;
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