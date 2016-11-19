//全选
var allFlag = true;
$(".select-all input").on("change",function(e) {
	$(".edit-status input").each(function(index,key) {
		if(!$(key).prop("checked")) {
			allFlag = true;
			return;
		}
	})
	if(allFlag) {
		$(".edit-status input").prop("checked",true);
		$(this).find("input").prop("checked",true)
		allFlag = false;
	}else {
		$(".edit-status input").prop("checked",false);
		$(this).find("input").prop("checked",false)
		allFlag = true;
	}
	e.preventDefault();
})
$(".edit-status input").on("change",function() {
	var sNum = 0;
	$(".edit-status input").each(function(index,key) {
		if($(key).prop("checked")) {
			sNum++;
		}
	})
	if(sNum == $(".edit-status input").length) {
		$(".select-all input").prop("checked",true);
	}else {
		$(".select-all input").prop("checked",false);
	}
})

//删除
$(".del-btn").on("click",function() {
	if($(".edit-status input:checked").get(0)&&window.confirm("确定删除吗？")) {
		$(".edit-status input:checked").parents("li").remove();
	}
	
})