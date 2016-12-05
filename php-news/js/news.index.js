//后台管理系统
$(function() {
	$(".table-responsive").load("../php/maintainnews.php");
	// 返回顶部
	$(document).ready(function() {
		if ($(this).scrollTop() == 0) {
			$(".float").hide();
		}
		$(window).scroll(function(event) {
			if ($(this).scrollTop() == 0) {
				$(".float").hide();
			}
			if ($(this).scrollTop() != 0) {
				$(".float").show();
			}
		});
		// 鼠标点击回到顶部
		$(".top").click(function(event) {
			$("html,body").animate({
				scrollTop: "0px"
			})
		});
	});
})