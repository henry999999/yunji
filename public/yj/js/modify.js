/**
 * Created by Administrator on 2018/10/27 0027.
 */
$(function(){
    //获取验证码
    $(".getVcode").on("tap",function(){
        $.ajax({
            url:"/user/vCodeForUpdatePassword",
            type:"get",
            success:function(res){
                console.log(res.vCode);
            }
        })
    })

    $("#register_btn").on("tap",function(){
        var oldpassword = $('[name="oldpassword"]').val().trim();
        var newpassword = $('[name="newpassword"]').val().trim();
        var nowpassword = $('[name="nowpassword"]').val().trim();
        var vCode = $.trim($('[name="vCode"]').val());
        if(!oldpassword){
            alert("请输入密码!");
        }
        if(newpassword!=nowpassword){
            alert("两次输入的密码不同!");
        }
        $.ajax({
            url:"/user/updatePassword",
            type:"post",
            data:{
                oldPassword:oldpassword,
                newPassword:newpassword,
                vCode:vCode
            },
            success:function(res){
                console.log(res);
              if(res.success){
                 mui.toast("修改密码成功");
                  location.href="login.html";
              }
            }
        })
    });

})