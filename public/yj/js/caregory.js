/**
 * Created by Administrator on 2018/10/21 0021.
 */
$(function(){
    //���,�Ҳ����¹���
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick ����ϵ����ϵ��Խ�󣬹����ٶ�Խ������������ԽС��Ĭ��ֵ0.0006
    });
    //��ʼ������������
    $.ajax({
        url:"/category/queryTopCategory",
        type:"get",
        success:function(response){
            //��ȡ����,��Ⱦ��һ������
            var html=template("template-first",{result:response.rows});
            $(".a-links").html(html);
            $(".a-links a:first-of-type").addClass("active");
            $(".a-links a:first-of-type").trigger('tap');
        }
    })

    //��һ�������µ�a�󶨵���¼�
    $(".a-links").on("tap","a",function(){
        $(this).addClass("active").siblings("a").removeClass("active");
        //��ȡһ������id
        var id=$(this).data("categoryid");
        $.ajax({
            url:"/category/querySecondCategory?id="+id,
            type:"get",
            success:function(response){
                var html=template("template-second",{result:response.rows});
                $(".brand-links").html(html);
            }
        })
    });


})