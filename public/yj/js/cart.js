/**
 * Created by Administrator on 2018/10/28 0028.
 */
//ÅÐ¶Ï ÓÃ»§ÊÇ·ñµÇÂ¼
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

