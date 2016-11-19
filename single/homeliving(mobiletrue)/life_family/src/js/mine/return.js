//显示退货弹窗
$(".return-btn").on("click", function() {
	$(".pop-box").show();
	$(".pop-box").height($(document).height());
})
//关闭弹窗
$(".close-btn").on("click", function() {
	$(".pop-box").hide();
})

//图片上传
$(".upload-btn").click(function() {
	$("#uploadfile").click();
})
$("#uploadfile").on("change",function() {
	for(var i = 0; i < this.files.length; i++) {
		var uploadfiles = this.files[i];//获取用户上传的所有文件
		var url = window.URL || window.webkitURL;
		var image = new Image();
		if(url) {
			var src = url.createObjectURL(uploadfiles);
			image.onload = function() {
				url.revokeObjectURL(src);
			}
			image.src = src;
			$(".show-pic").append(image);
		}else if(window.FileReader) {
			var fr = new FileReader();
			fr.readAsDataURL(uploadfiles);
			fr.onload = function(e) {
				image.src = e.target.result;
			}
			$(".show-pic").append(image);
		}
	}
	
})