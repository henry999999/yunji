/**
 * Created by Administrator on 2018/10/28 0028.
 */
//判断 用户是否登录
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
var totalPrice = 0
$(function(){
    //查询购物车
    $.ajax({
        url:"/cart/queryCart",
         type:"get",
        success:function(res){
            console.log(res);
            var html = template("cartTmp",{res:res});
            $("#addressBox").html(html);
        }
    });
    //给编辑按钮绑定事件
    $("#addressBox").on("tap",'#editBtn',function(){
        var id = $(this).data("id");
        //location.href="edit.html?id="+id;
        mui('.bottomPopover').popover('toggle');//show hide toggle
    });
    //给删除按钮绑定事件
    $("#addressBox").on("tap","#delBtn",function(){
        var id = $(this).data("id");
        var li=this.parentNode.parentNode;
        mui.confirm("确认要删除吗?",function(mes){
            //判断是否确认删除
            if(mes.index==1){
                //发送删除请求
                $.ajax({
                    url:"/cart/deleteCart",
                    type:"get",
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

    //点击复选框动态改变总价格
    $("#addressBox").on('change','#isclick',function(){
        var s = parseInt($(this).next().text());
        var flag =$(this).is(':checked');
        if(flag){
            totalPrice+=parseFloat($(this).next().text());
        }else{
            totalPrice-=parseFloat($(this).next().text());
        }
        $("#totalPrice").text(parseFloat(totalPrice).toFixed(2));
    })
    $("#totalPrice").text(parseFloat(totalPrice).toFixed(2));

})

