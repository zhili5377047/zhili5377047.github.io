//登录部分
		var oInput = document.querySelectorAll(".input");
		var oA = document.querySelectorAll(".input a");
		for(var i=0;i<oA.length;i++){
			oInput[i].index = i;
			oInput[i].addEventListener("mouseover",function(){
			oA[this.index].style.backgroundPositionX = "-25px";
			});
			oInput[i].addEventListener("mouseout",function(){
			oA[this.index].style.backgroundPositionX = "20px";
			});
		}
		//注册忘记密码部分
		var lastLogo = document.querySelector(".last_logo");
		function count(n){
			var count = n;
			var timer = setInterval(function(){
				count--;
				if(count<=0){
					clearInterval(timer);
				}
				lastLogo.innerHTML = count +"s可重发";
			},1000)
		}
		lastLogo.onclick = function(){
			count(60);
		}