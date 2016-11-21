var i = 0;
var imgW = $(".inner img").width();
var len = $(".inner img").length;
var movebol = false;
var timer = null;
function changePoint(){
	if(i > 4){
		$(".container .pagination_pic span").eq(0).addClass("active").siblings().removeClass("active");
	}
	$(".container .pagination_pic span").eq(i).addClass("active").siblings().removeClass("active");
}
function right(){
	if(movebol) return;
	i++;
	if(i > 5){
		$(".container .inner").css({"left":"0"});
		i = 1;	
	}
	moveFn();
	changePoint();
}	
function left(){
	if(movebol) return;
	i--;
	if(i < 0){
		$(".container .inner").css({"left":-(len-1)*imgW});
		i = 4;
	}
	moveFn();
	changePoint();
}
$(".container #left").on('click',function(e){
	e.stopPropagation();
	left();
})
$(".container #right").on('click',function(e){
	e.stopPropagation();
	right();
})
$(".container .pagination_pic span").on('click',function(e){
	e.stopPropagation();
	if(movebol) return;
	i = $(this).index();
	moveFn();
	changePoint();
})
function moveFn(){
	movebol = true;
	$(".container .inner").animate({"left":(-i*imgW)},1000);
	setTimeout(function(){
		movebol = false;
	},1000)
}
function autoMove(){
	timer = setInterval(function(){
		right();
	},2500)
}
autoMove();