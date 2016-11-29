

// 返回顶部
$(document).ready(function() {
    if ($(this).scrollTop() == 0) {
        $(".top").hide();
    }
    $(window).scroll(function(event) {
        if ($(this).scrollTop() == 0) {
            $(".top").hide();
        }
        if ($(this).scrollTop() != 0) {
            $(".top").show();
        }
    });
    // 鼠标点击回到顶部
    $(".top").click(function(event) {
        $("html,body").animate({
            scrollTop: "0px"
        })
    });
});


$(function(){
    //url data function dataType
    function loadMeinv(){
        var data = 0;
        for(var i=0;i<=35;i++){//每次加载时模拟随机加载图片
            data = parseInt(Math.random()*35);
            var html = "";
            html = '<li><img src = img/img1/'
                    +data+'.jpg></li>';
            $minUl = getMinUl();
            $minUl.append(html);
        }
    }
    loadMeinv();
    $(window).on("scroll",function(){
        $minUl = getMinUl();
        if($minUl.height() <= $(window).scrollTop()+$(window).height()){
        //当最短的ul的高度比窗口滚出去的高度+浏览器高度大时加载新图片
            loadMeinv();
        }
    })
    function getMinUl(){//每次获取最短的ul,将图片放到其后
        var $arrUl = $(".con .box");
        var $minUl =$arrUl.eq(0);
        $arrUl.each(function(index,elem){
            if($(elem).height()<$minUl.height()){
                $minUl = $(elem);
            }
        });
        return $minUl;
    }
})