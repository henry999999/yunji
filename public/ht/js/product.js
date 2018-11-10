/**
 * Created by Administrator on 2018/11/10 0010.
 */
var page = 1;
var pageSize = 5;
var pageTotal = 0;

$(function () {
    //查询产品
    getProduct();

    //改变状态,上架下架
    $("#productBox").on("click","#statuBtn", function () {
       $.ajax({
           url:""
       })
    })

    //下一页
    $("#nextBtn").on("click", function () {
        $("#preBtn").removeAttr("disabled")
        page+=1;
        if(page>Math.ceil(pageTotal/pageSize)){
            page = Math.ceil(pageTotal/pageSize);
            $(this).attr("disabled",true);
            return;
        }else {
            $(this).removeAttr("disabled");
        }
        getProduct();

    })
    //上一页
    $("#preBtn").on("click", function () {
        $("#nextBtn").removeAttr("disabled");
        page-=1;
        if(page<1){
            page=1;
            $(this).attr("disabled",true);
            return;
        }else{
            $(this).removeAttr("disabled");
        }
        getProduct();
    })
})

//查询产品函数
function getProduct(){
    $.ajax({
        url:"/product/queryProductDetailList",
        type:"get",
        data:{
            page:page,
            pageSize:pageSize
        },
        success: function (res) {
            console.log(res);
            var html = template("productTmp",res);
            $("#productBox").html(html);
            pageTotal = res.total;
        }
    })
}