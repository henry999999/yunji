/**
 * Created by Administrator on 2018/10/28 0028.
 */
//判断 用户是否登录
$.ajax({
    url:"/user/queryUserMessage",
    type:"get",
    async:false,
    success:function(res){
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
            var html = template("cartTmp",{res:res});
            $("#addressBox").html(html);
        }
    });
    //给编辑按钮绑定事件
    $("#addressBox").on("tap",'#editBtn',function(){
        var id = parseInt($(this).data("id"));
        //location.href="edit.html?id="+id;
        //弹出编辑框隐藏层
        mui('.bottomPopover').popover('toggle');//show hide toggle
        $.ajax({
            url:"/cart/queryCart",
            type:"get",
            async:false,
            success:function(res){
                var data={};
               for(var i=0;i<res.length;i++){
                   if(res[i].id==id){
                       data = res[i];
                   }
               }
                var html = template("editTmp",data);
                $(".editBox").html(html);
            }
        });
        //初始化数量选择器
        mui($(".numBox")).numbox();
    });

    //修改尺码
    $(".editBox").on("tap",".size > span",function(){
        $(this).addClass("current").siblings().removeClass("current");
    });
    //给确定修改按钮添加事件
    $(".editBox").on("click","#editConfirm",function(){
        var id = $(this).data("id");
        var size = $(".current").text();
        var num = $(".productNum").val();
        $.ajax({
            url:"/cart/updateCart",
            type:"post",
            data:{
                id:id,
                size:size,
                num:num
            },
            success:function(res){
                console.log(res);
                if(res.success){
                    //重新加载页面
                    location.reload();
                }
            }
        })
    })
    //给取消修改按钮添加事件
    $(".editBox").on("click","#editCancel",function(){
       $("#popover").hide();
        $(".mui-backdrop").hide();
        //<div class="mui-backdrop mui-active" style=""></div>
        //mui('.bottomPopover').popover('toggle');//show hide toggle
    })

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

