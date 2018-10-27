/**
 * Created by Administrator on 2018/10/27 0027.
 */
$(function(){
    $("#add_btn").on("tap",function(){
       var recipients = $('[name="recipients"]').val();
        var postcode = $('[name="postcode"]').val();
        var address = $('[name="address"]').val();
        var addressDetail   = $('[name="addressDetail"]').val();
        $.ajax({
            url:"/address/addAddress",
            type:"post",
            data:{
                recipients:recipients,
                postcode:postcode,
                address:address,
                addressDetail:addressDetail
            },
            success:function(res){
               if(res.success){
                   mui.toast("添加地址成功");
                   setTimeout(function(){
                       location.href="address.html";
                   },2000)
               }
            }

        })

    })

    $("#city").on("tap",function(){
        var picker = new mui.PopPicker({
            layer: 3
        });
        picker.setData(cityData);
        picker.show(function (selectItems) {
            $("#city").val(selectItems[0].text+selectItems[1].text+selectItems[2].text);
        })
    })
})