/**
 * Created by Administrator on 2018/10/26 0026.
 */
var keyword= getParamsByUrl(location.href,"keyword");
var page=1;
var price=1;
var num=1;
$(function(){
    mui.init({
        pullRefresh : {
            container:"#refreshContainer",//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
            up : {
                height:50,//可选.默认50.触发上拉加载拖动距离
                auto:true,//可选,默认false.自动上拉加载一次
                contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
                contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
                callback : getData //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
            }
        }
    });
    //按价格排序
    $("#price").on("tap",function(){
       price = price==1 ? 2:1;
        //alert(price);
        page=1;
        $("#tmpBox").html("");
        mui('#refreshContainer').pullRefresh().refresh(true);
        getData();

    })
    //按销量排序
    $("#sales").on("tap",function(){
        num = num == 1 ? 2:1;
        page=1;
        $("#tmpBox").html("");
        mui('#refreshContainer').pullRefresh().refresh(true);
        getData();
    })

    //点击立即购买按钮
    $("#tmpBox").on("tap",".busy-now",function(){
        var buyId=$(this).data("id");
        location.href="details.html?id="+buyId;
    })
})

function getData(){
    var This=this;
    $.ajax({
        url:"/product/queryProduct",
        type:"get",
        data:{
            proName:keyword,
            price:price,
            num:num,
            page:page++,
            pageSize:3

        },
        success:function(res){
            console.log(res.data);
            if(res.data.length>0){
                var html = template("productTmp",{data:res.data});
                //console.log(html);
                //$("#tmpBox").html(html);
                $("#tmpBox").append(html);
                This.endPullupToRefresh(false);
            }else{
                This.endPullupToRefresh(true);
            }

        }
    })
}