/**
 * Created by Administrator on 2018/10/23 0023.
 */
$(function(){
    //点击搜索按钮
    $(".search-btn").on("tap",function(){
        //location.href
        var keyword=$(".search-text").val();
        if(keyword){
            keyarr.unshift(keyword);
            localStorage.setItem("keyArr",JSON.stringify(keyarr));
            location.href="search-list.html?keyword="+keyword;
            $(".search-text").val("");
        }else{
            alert("请输入搜索关键字");
        }
    })
    var keyarr=[];
    if(localStorage.getItem("keyArr")){
        keyarr=JSON.parse(localStorage.getItem("keyArr"));
    }
    var data=JSON.parse(localStorage.getItem("keyArr"));
    var serhtml=template("history",{data:data});
    $(".history-txt").html(serhtml);

    //点击搜索历史
    $(".history-txt").on("tap","li", function () {
        $(".search-text").val($(this).text());
        $(".search-btn").trigger('tap');
    });

    //清空搜索历史
    $(".clearHistory").on("tap",function(){
        localStorage.clear();
        keyarr=[];
        $(".history-txt").html("");
    })
})