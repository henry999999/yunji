/**
 * Created by Administrator on 2018/10/28 0028.
 */
//�ж� �û��Ƿ��¼
$.ajax({
    url:"/user/queryUserMessage",
    type:"get",
    async:false,
    success:function(res){
        console.log(res);
        if(res.error&&res.error==400){
            location.href="login.html";
        }
    }
})
$(function(){

})

