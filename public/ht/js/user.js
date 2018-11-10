/**
 * Created by Administrator on 2018/11/9 0009.
 */
var page = 1;
var pageSize = 2;
$(function () {
    //查询用户
    getUser();
    //更新用户状态
    $("#userBox").on("click","#statusBtn", function () {
        var id = $(this).data("id");
        var isDelete = $(this).data("isDelete");
        alert(isDelete);
        $.ajax({
            url:"/user/updateUser",
            type:"post",
            data:{
                id:id,
                isDelete:isDelete
            },
            success: function (res) {
                console.log(res);
            }
        })
    })

})
//查询用户
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