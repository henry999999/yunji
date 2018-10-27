/**
 * Created by Administrator on 2018/10/21 0021.
 */
$(function(){
    //左侧,右侧上下滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    //初始化左侧分类数据
    $.ajax({
        url:"/category/queryTopCategory",
        type:"get",
        success:function(response){
            //获取数据,渲染到一级分类
            var html=template("template-first",{result:response.rows});
            $(".a-links").html(html);
            $(".a-links a:first-of-type").addClass("active");
            $(".a-links a:first-of-type").trigger('tap');
        }
    })

    //给一级分类下的a绑定点击事件
    $(".a-links").on("tap","a",function(){
        $(this).addClass("active").siblings("a").removeClass("active");
        //获取一级分类id
        var id=$(this).data("categoryid");
        $.ajax({
            url:"/category/querySecondCategory?id="+id,
            type:"get",
            success:function(response){
                var html=template("template-second",{result:response.rows});
                $(".brand-links").html(html);
            }
        })
    });


})