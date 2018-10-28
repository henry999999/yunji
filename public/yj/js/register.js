/**
 * Created by Administrator on 2018/10/26 0026.
 */
$(function () {
    $("#register_btn").on("tap", function () {
        var username = $('[name="username"]').val().trim();
        var mobile = $('[name="mobile"]').val().trim();
        var vCode = $('[name="vCode"]').val();
        var password = $('[name="password"]').val().trim();
        var repassword = $('[name="repassword"]').val().trim();
        if(!username){
            alert("请输入用户名");
            return;
        }
        if(mobile.length<11){
            alert("请输入正确的手机号");
            return;
        }
      if(password!=repassword){
          alert("两次输入的密码不一样");
          return;
      }
        $.ajax({
            url:"/user/register",
            type:"post",
            data:{
                username:username,
                password:password,
                mobile:mobile,
                vCode:vCode
            },
            success:function(res){
                if(res.success==true){
                    mui.toast("注册成功");
                    setTimeout(function(){
                        location.href="login.html";
                    },2000)
                }
            }
        })
    });
    //获取验证码
    $(".getVcode").on("tap",function(){
        $.ajax({
            url:"/user/vCode",
            type:"get",
            success:function(res){
                console.log(res.vCode);
            }
        })
    })
})