/**
 * Created by Administrator on 2018/10/26 0026.
 */
$(function(){
    var keyword= getParamsByUrl(location.href,"keyword");
    console.log(keyword);
    mui.init({
        pullRefresh : {
            container:"#refreshContainer",//��ˢ�������ʶ��querySelector�ܶ�λ��cssѡ�������ɣ����磺id��.class��
            up : {
                height:50,//��ѡ.Ĭ��50.�������������϶�����
                auto:true,//��ѡ,Ĭ��false.�Զ���������һ��
                contentrefresh : "���ڼ���...",//��ѡ�����ڼ���״̬ʱ���������ؿؼ�����ʾ�ı�������
                contentnomore:'û�и���������',//��ѡ�����������û�и�������ʱ��ʾ���������ݣ�
                callback : getData //��ѡ��ˢ�º��������ݾ���ҵ������д������ͨ��ajax�ӷ�������ȡ�����ݣ�
            }
        }
    });
})

//function getData{
//    $.ajax({
//
//    })
//}