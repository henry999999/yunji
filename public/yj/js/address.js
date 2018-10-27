/**
 * Created by Administrator on 2018/10/26 0026.
 */
$(function(){
    $.ajax({
        url:"/address/queryAddress",
        type:"get",
        success:function(res){
            if(res){
                var html = template("addressTmp",{res:res});
                $("#addressBox").html(html);
            }

        }
    })
})