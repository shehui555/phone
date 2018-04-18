/**
 * Created by lenovo on 17/12/27 027.
 */

$(".top ul li").click(function(){
     var index=$(this).index();
    $(".top ul li").eq(index).addClass("active").siblings().removeClass("active");
    $(".pi ul li").eq(index).show().siblings().hide();

});
