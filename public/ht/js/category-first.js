/**
 * Created by Administrator on 2018/11/10 0010.
 */
var page = 1;
var pageSize =5;
var pageTotal = 0;
$(function () {
    //查询一级分类
    getFirstData();
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
        getFirstData();

    })
    //上一页
    $("#preBtn").on("click", function () {
        $("#nextBtn").removeAttr("disabled")
        page-=1;
        if(page<1){
            page=1;
            $(this).attr("disabled",true);
            return;
        }else{
            $(this).removeAttr("disabled");
        }
        getFirstData();
    })

    //添加分类
    $("#save").on("click", function () {
        var categoryName = $("[name='categoryName']").val();
        alert(categoryName);
        $.ajax({
            url:"/category/addTopCategory",
            type:"post",
            data:{
                categoryName:categoryName
            },
            success:function(res){
                console.log(res);
                if(res.success){
                    location.reload();
                }
            }
        })
    })
})

//查询一级分类函数
function getFirstData(){
    $.ajax({
        url:"/category/queryTopCategoryPaging",
        type:"get",
        data:{
            page:page,
            pageSize:pageSize
        },
        success: function (res) {
            console.log(res);
            var html = template("firstTmp",res);
            $("#firstBox").html(html);
            pageTotal = res.total;
        }
    })
}