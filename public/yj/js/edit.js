/**
 * Created by Administrator on 2018/10/27 0027.
 */
$(function(){
    var id=getParamsByUrl(location.href,"id");
    console.log(id);
    $.ajax({
        url:"/address/queryAddress",
        type:"get",
        success: function (res) {
            console.log(res);
            for(var i=0;i<res.length;i++){
                if(res[i].id==id){
                    console.log(res[i]);
                    $('[ name="recipients"]').val(res[i].recipients);
                    $('[ name="postcode"]').val(res[i].postCode);
                    $('[ name="address"]').val(res[i].address);
                    $('[ name="addressDetail"]').val(res[i].addressDetail);
                }
            }
        }
    });

    //点击确认修改按钮
    $("#add_btn").on("tap",function(){
        var recipients = $('[name="recipients"]').val();
        var postcode = $('[name="postcode"]').val();
        var address = $('[name="address"]').val();
        var addressDetail   = $('[name="addressDetail"]').val();
        $.ajax({
            url:"/address/updateAddress",
            type:"post",
            data:{
                id:id,
                recipients:recipients,
                postcode:postcode,
                address:address,
                addressDetail:addressDetail
            },
            success:function(res){
                if(res.success){
                    mui.toast("修改地址成功");
                    setTimeout(function(){
                        location.href="address.html";
                    },2000)
                }
            }

        })

    });

    //省市选择器
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