/**
 * Created by Administrator on 2018/10/28 0028.
 */
$(function(){
    var id= getParamsByUrl(location.href,"id");
    $.ajax({
        url:"/product/queryProductDetail",
        type:"get",
        async:false,
        data:{
            id:id
        },
        success:function(res){
            console.log(res);
            var html = template("detailTmp",res);
            $("#detailBox").html(html);
        }
    });
    mui($(".numBox")).numbox();
    //选择尺码
    $(".size").on("tap","span",function(){
        $(this).addClass("current").siblings().removeClass("current");
    });


    //获得slider插件对象
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
    });

    //添加到购物车
    $(".addCart").on("tap",function(){
        var id=$(this).data("id");
        var productSize= $(".current").text();
        var num=$(".productNum").val();
        $.ajax({
            url:"/cart/addCart",
            type:"post",
            data:{
                productId:id,
                num:num,
                size:productSize
            },
            success:function(res){
                console.log(res);
                if(res.success){
                    mui.toast("已经添加到购物车");
                   setTimeout(function(){
                       location.href="cart.html";
                   },2000)
                }
            }
        })
    })
})