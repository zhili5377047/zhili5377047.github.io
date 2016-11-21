$(".mask").on('click',function(){
	$(this).hide();
})
$(".mask .addNewAddress").on('click',function(e){
	e.stopPropagation();
})
$(".part .addAddress a").on('click',function(){
	$(".mask").show();
})
$(".part .address").on('click',function(){
	$(this).addClass("active").siblings().removeClass("active");
})

//购物车选取
var i = 0;
function select(){
	$(".table li .imgList").on('click',function(){
		$(this).toggleClass("active");
		if($(this).hasClass("active")){
			i++;
		}else{
			i--;
		}
		console.log(i);
		if(i == 3){
			$(".table .title span").addClass("active");
		}else{
			$(".table .title span").removeClass("active");
		}
	})

	$(".table .title span").on('click',function(){
		$(this).toggleClass("active");
		if($(this).hasClass("active")){
			$(".table li .imgList").each(function(){
				$(this).addClass("active");
				i = 2;
			})
		}else{
			$(".table li .imgList").each(function(){
				$(this).removeClass("active");
				i = 0;
			})
		}	
	})
}
select();

//数量
var $quantity = $(".table li .quantity");
$quantity.find(".reduce").on('click',function(){
	var num = $(this).siblings("input").val();
	num--;
	if(num){
		$(this).siblings("input").val(num);
	}
})
$quantity.find(".add").on('click',function(){
	var num = $(this).siblings("input").val();
	num++;	
	$(this).siblings("input").val(num);
})
