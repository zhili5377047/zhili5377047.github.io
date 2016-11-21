//图片上传
$("#uploadBtn").click(function() {
	$("#uploadFile").click();
})
$("#uploadFile").on("change",function() {
	var uploadfiles = this.files[0];//获取用户上传的所有文件
	var url = window.URL || window.webkitURL;
	var image = new Image();
	if(url) {
		var src = url.createObjectURL(uploadfiles);
		image.onload = function() {
			url.revokeObjectURL(src);
		}
		image.src = src;
		$("#uploadBtn").before(image);
	}else if(window.FileReader) {
		var fr = new FileReader();
		fr.readAsDataURL(uploadfiles);
		fr.onload = function(e) {
			image.src = e.target.result;
		}
		$("#uploadBtn").before(image);
	}
})
// file.addEventListener("change",function(){
// 		var uploadfiles = file.files[0];//获取用户上传的所有文件
// 		console.log(uploadfiles);
// 		var url = window.URL || window.webkitURL;
// 		var image = new Image();
// 		if(url) {
// 			var src = url.createObjectURL(uploadfiles);
// 			image.onload = function() {
// 				url.revokeObjectURL(src);
// 			}
// 			image.src = src;
// 			wrap.appendChild(image);
// 		}else if(window.FileReader) {
// 			var fr = new FileReader();
// 			fr.readAsDataURL(uploadfiles);
// 			fr.onload = function(e) {
// 				image.src = e.target.result;
// 			}
// 			wrap.appendChild(image);
// 		}
// 	},false)