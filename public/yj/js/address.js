/**
 * Created by Administrator on 2018/10/26 0026.
 */
$(function(){
    $.ajax({
        url:"/address/queryAddress",
        type:"get",
        success:function(res){
            console.log(res);
            if(res){
                var html = template("addressTmp",{res:res});
                $("#addressBox").html(html);
            }
        }
    });

    //给编辑按钮绑定事件
    $("#addressBox").on("tap",'.editBtn',function(){
        var id = $(this).data("id");
        location.href="edit.html?id="+id;
    });
    //给删除按钮绑定事件
    $("#addressBox").on("tap",".delBtn",function(){
        var id = $(this).data("id");
        var li=this.parentNode.parentNode;
       mui.confirm("确认要删除吗?",function(mes){
           //判断是否确认删除
            if(mes.index==1){
                //发送删除请求
                $.ajax({
                    url:"/address/deleteAddress",
                    type:"post",
                    data:{
                        id:id
                    },
                    success:function(res){
                        location.reload();
                    }
                })
            }else if(mes.index==0){
                mui.swipeoutClose(li);
            }
       });
    })
})