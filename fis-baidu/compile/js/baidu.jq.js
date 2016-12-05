// 鼠标滑过一级导航显示二级导航
$(document).ready(function() {
    $(".ul_d,.sidebar").hover(function() {
        $(".sidebar").toggle();
    });

    $(".ul_c,.pos2").hover(function() {
        $(".pos2").toggle();
    });
    $(".ul_b,.pos1").hover(function() {
        $(".pos1").toggle();
    });
});

// baidu-index.html
// 换肤显示/隐藏
$("a.skin1").click(function() {
    //查找显示
    $(".skin-box").show();
});
//点击关闭按钮
$(".stop").click(function() {
    //查找隐藏
    $(".skin-box").hide();
});

// 换肤
var i = 1;
$(".skin-shr img").hover(function() {
    i = $(this).index();
    $(".bg").css("background", 'url(image/land/skin/' + i + '.jpg)');
    $(".bg").css("background-size", "264px 180px");
    $(".skin-page").css("background", 'url(image/land/skin.png');
    $(".skin-page").css("background-position", "0px 0px");
});
$(".skin-shr img").click(function() {
    $("body").css("background", 'url(image/land/skin/' + i + '.jpg)');
    $(".baidu-logo1").css("background", 'url(image/land/baidu-white.png');
    $(".baidu-logo1").css("background-size", "270px 129px");
    $(".white").css("color", "#fff");
    $(".head-nav").toggleClass("head-nav1");
    $(".pc-botton").toggleClass("pc-botton1");
    $(".roll i").css("background-position", "-107px -22px");
});

// 切换标签
$(document).ready(function() {
    $(".rec-con-nav li").each(function(index) {
        $(this).click(function() {
            $(".rec div.lab-block").removeClass("lab-block");
            $(".rec-con-nav li.con-li1").removeClass("con-li1");
            $("div.rec1").eq(index).addClass("lab-block");
            $(this).addClass("con-li1");
        })
    })
});
// 我的关注鼠标点击显示
$(document).ready(function() {
    // 鼠标滑过我的导航框
    $(".rec-fol-tit").hover(function() {
        $(".rec-fol-edit").toggle();
    });
    // 点击我的导航显示
    $(".fol-div").click(function() {
        $(".rec-fol-link").toggle();
        $(".fol-icon1").toggleClass("fol-icon2");
    });

    // 点击自定义显示
    $(".cus1").click(function() {
        $(".cus-hide").toggle();
        $(".cus1").toggleClass("cus2");
        $(".cus-close").toggleClass("cus-close1");
    });
    // 点击自定义关闭按钮隐藏
    $(".cus-clo").click(function() {
        // 自定义隐藏
        $(".cus-hide").hide();
        $(".cus1").toggleClass("cus2");
        $(".cus-close").toggleClass("cus-close1");
    });
    // 点击滚动查看更多显示
    $(".roll").click(function() {
        $(".rec-inf").toggle();
        $(".rol-hide").hide();
    });
});

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
