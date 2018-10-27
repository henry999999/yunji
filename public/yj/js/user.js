/**
 * Created by Administrator on 2018/10/26 0026.
 */
//声明一个变量,存储用户信息
var userInfo=null;
//判断用户是否已经登录
$.ajax({
    url:"/user/queryUserMessage",
    type:"get",
    async:false,
    success:function(res){
        console.log(res);
        if(res.error&&res.error==400){
            location.href="login.html";
        }
        userInfo= res;
    }
})

$(function(){
    //退出登录
    $(".outtLogin").on("tap",function(){
        $.ajax({
            url:"/user/logout",
            type:"get",
            success:function(res){
                if(res.success){
                    mui.toast("退出登录成功");
                    setTimeout(function(){
                        location.href="index.html";
                    },2000)
                }
            }
        })

    })

    var html = template("usertmp",userInfo)
    $("#userBox").html(html);

})
