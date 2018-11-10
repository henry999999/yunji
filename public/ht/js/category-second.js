/**
 * Created by Administrator on 2018/11/10 0010.
 */
var page = 1;
var pageSize = 5;
var pageTotal = 0;
$(function () {
    //查询二级分类
    getSecondData();
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
        getSecondData();

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
        getSecondData();
    })
})
//查询二级分类
function getSecondData(){
    $.ajax({
        url:"/category/querySecondCategoryPaging",
        type:"get",
        data:{
            page:page,
            pageSize:pageSize
        },
        success: function (res) {
            console.log(res);
            var html = template("secondTmp",res);
            $("#secondBox").html(html);
            pageTotal = res.total;
        }
    })
}