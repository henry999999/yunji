/**
 * Created by Administrator on 2018/11/6 0006.
 */
//验证是否登录
$.ajax({
    url:"/employee/checkRootLogin",
    type:"get",
    async:false,
    success: function (res) {
        if(res.success){
            location.href = "user.html";
        }
    }
})

$(function () {
    //点击登录
    $("#btnLogin").on("click", function (e) {
        e.preventDefault();
        var username = $("[name='username']").val();
        var password = $("[name='password']").val();
        $.ajax({
            url:"/employee/employeeLogin",
            type:"post",
            data:{
                username:username,
                password:password
            },
            success: function (res) {
                if(res.success){
                    location.href = "user.html";
                }
            }
        })
    })
})