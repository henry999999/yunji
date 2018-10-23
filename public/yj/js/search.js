/**
 * Created by Administrator on 2018/10/23 0023.
 */
$(function(){
    var keyarr=[];
    $(".search-btn").on("tap",function(){
        //location.href
        var keyword=$(".search-text").val();
        if(keyword){
            keyarr.unshift(keyword);
            localStorage.setItem("keyArr",JSON.stringify(keyarr));
            location.href="search-list.html?keyword="+keyword;
            $(".search-text").val("");
        }else{
            alert("ÇëÊäÈëËÑË÷¹Ø¼ü×Ö");
        }
    })
    var data=JSON.parse(localStorage.getItem("keyArr"));
    console.log(data);
    var serhtml=template("history",{data:data});
    $(".history-txt").html(serhtml);
    console.log(serhtml);
})