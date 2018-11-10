/**
 * Created by Administrator on 2018/11/9 0009.
 */
var page = 1;
var pageSize = 2;
$(function () {
   //获取用户数据
    getUser();
    //改变用户状态̬
    $("#userBox").on("click","#statusBtn", function () {
        var id = $(this).data("id");
        var isDelete = $(this).data("isdelete");
        $.ajax({
            url:"/user/updateUser",
            type:"post",
            data:{
                id:id,
                isDelete:isDelete ? 0:1
            },
            success: function (res) {
                if(res.success){
                    location.reload();
                }
            }
        })
    })

})
//获取用户数据
function getUser(){
    $.ajax({
        url:"/user/queryUser",
        type:"get",
        data:{
            page:1,
            pageSize:10
        },
        success: function (res) {
            console.log(res);
            var html = template("userTmp",res);
            $("#userBox").html(html);
        }
    })
}