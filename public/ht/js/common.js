//判断管理员是否登录
$.ajax({
	url:"/employee/checkRootLogin",
	type:"get",
	async:false,
	success: function (res) {
		if(!res.success){
			location.href = "login.html";
		}
	}
})
$(function(){

	var navLi = $('.navs li')
	navLi.on('click',function(){
		$(this).find('ul').slideToggle();
	});

	//注销功能
	$(".login_out_bot").on("click", function () {
		$.ajax({
			url:"/employee/employeeLogout",
			type:"get",
			success: function (res) {
				if(res.success){
					location.href="login.html";
				}
			}
		})
	})
});