/**
 * Created by Administrator on 2018/10/26 0026.
 */
$(function(){
        $("#login_btn").on("tap",function(){
            var username = $('[name="username"]').val().trim();
            var password = $('[name="password"]').val().trim();
            if(!username){
                alert("�������û���");
                return;
            }
            if(!password){
                alert("����������");
                return;
            }
            $.ajax({
                url:"/user/login",
                type:"post",
                data:{
                    username:username,
                    password:password
                },
                success: function (res) {
                    if(res.success==true){
                        mui.toast("��¼�ɹ�");
                        setTimeout(function(){
                            location.href="user.html";
                        },2000)
                    }

                }
            })
        })
})