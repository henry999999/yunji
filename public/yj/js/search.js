/**
 * Created by Administrator on 2018/10/23 0023.
 */
$(function(){

    $(".search-btn").on("tap",function(){
        //location.href
        var keyword=$(".search-text").val();
        if(keyword){
            keyarr.unshift(keyword);
            localStorage.setItem("keyArr",JSON.stringify(keyarr));
            location.href="search-list.html?keyword="+keyword;
            $(".search-text").val("");
        }else{
            alert("�����������ؼ���");
        }
    })
    var keyarr=[];
    if(localStorage.getItem("keyArr")){
        keyarr=JSON.parse(localStorage.getItem("keyArr"));
    }
    var data=JSON.parse(localStorage.getItem("keyArr"));
    console.log(data);
    var serhtml=template("history",{data:data});
    $(".history-txt").html(serhtml);

    //���������ʷ
    $(".clearHistory").on("tap",function(){
        localStorage.clear();
        keyarr=[];
        $(".history-txt").html("");
    })
})