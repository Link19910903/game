// 淡入淡出轮播图
$(function (){
	var num = 0;
	$('#index>li').click(function(){
		var index = $(this).index()
		num = index;
		$(this).siblings().removeClass('on')
		$(this).addClass('on')
		$('#img>li').removeClass('opa-on')
		$('#img>li:eq('+index+')').addClass('opa-on')

	})
	setInterval(function(){
		$('#index>li:eq('+num+')').click()
		num++
		if (num == 5) {
			num = 0
		}
	},3000)
})