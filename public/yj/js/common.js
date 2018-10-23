/**
 * Created by Administrator on 2018/10/23 0023.
 */
$(function(){
    mui('nav').on('tap','a',function(){
        window.top.location.href=this.href;
    });
})