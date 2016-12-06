//图片横向滚动
$(document).ready(function(e) { //内容一
    linumA = $('.worklist div').length; //图片数量
    wA = linumA * 187; //div宽度
    $('.worklist').css('width', wA + 'px'); //div宽度
    $('.swaplist1').html($('.mainlist1').html()); //复制内容

    $('.arrow-right').click(function() {

        if ($('.swaplist1,.mainlist1').is(':animated')) {
            $('.swaplist1,.mainlist1').stop(true, true);
        }

        if ($('.mainlist1 div').length > 3) { //多于3张图片
            mlA = parseInt($('.mainlist1').css('left')); //默认图片div位置
            slA = parseInt($('.swaplist1').css('left')); //交换图片div位置
            if (mlA <= 0 && mlA > wA * -1) { //默认图片显示时
                $('.swaplist1').css({
                    left: '561px'
                }); //交换图片放在显示区域右侧
                $('.mainlist1').animate({
                    left: mlA - 561 + 'px'
                }, 'slow'); //默认图片滚动                
                if (mlA == (wA - 561) * -1) { //默认图片最后一屏时
                    $('.swaplist1').animate({
                        left: '0'
                    }, 'slow'); //交换图片滚动
                }
            } else { //交换图片显示时
                $('.mainlist1').css({
                        left: '561px'
                    }) //默认图片放在显示区域右
                $('.swaplist1').animate({
                    left: slA - 561 + 'px'
                }, 'slow'); //交换图片滚动
                if (slA == (wA - 561) * -1) { //交换图片最后一屏时
                    $('.mainlist1').animate({
                        left: '0'
                    }, 'slow'); //默认图片滚动
                }
            }
        }
    })
    $('.arrow-left').click(function() {
        if ($('.swaplist1,.mainlist1').is(':animated')) {
            $('.swaplist1,.mainlist1').stop(true, true);
        }
        if ($('.mainlist1 div').length > 3) {
            mlA = parseInt($('.mainlist1').css('left'));
            slA = parseInt($('.swaplist1').css('left'));
            if (mlA <= 0 && mlA > wA * -1) {
                $('.swaplist1').css({
                    left: wA * -1 + 'px'
                });
                $('.mainlist1').animate({
                    left: mlA + 561 + 'px'
                }, 'slow');
                if (mlA == 0) {
                    $('.swaplist1').animate({
                        left: (wA - 561) * -1 + 'px'
                    }, 'slow');
                }
            } else {
                $('.mainlist1').css({
                    left: (wA - 561) * -1 + 'px'
                });
                $('.swaplist1').animate({
                    left: slA + 561 + 'px'
                }, 'slow');
                if (slA == 0) {
                    $('.mainlist1').animate({
                        left: '0'
                    }, 'slow');
                }
            }
        }
    })
})
$(document).ready(function(e) { //战略合作图片滚动
    /***自动滚动***/
    time = window.setInterval(function() {
        $('.banner-right2').click();
    }, 5000);
    /***自动滚动***/
    linum = $('.mainlist a').length; //图片数量
    w = linum * 160; //div宽度
    $('.piclist').css('width', w + 'px'); //a宽度
    $('.swaplist').html($('.mainlist').html()); //复制内容

    $('.banner-right2').click(function() {

        if ($('.swaplist,.mainlist').is(':animated')) {
            $('.swaplist,.mainlist').stop(true, true);
        }

        if ($('.mainlist a').length > 6) { //多于6张图片
            ml = parseInt($('.mainlist').css('left')); //默认图片位置
            sl = parseInt($('.swaplist').css('left')); //交换图片位置
            if (ml <= 0 && ml > w * -1) { //默认图片显示时
                $('.swaplist').css({
                    left: '960px'
                }); //交换图片放在显示区域右侧
                $('.mainlist').animate({
                    left: ml - 960 + 'px'
                }, 'slow'); //默认图片滚动                
                if (ml == (w - 960) * -1) { //默认图片最后一屏时
                    $('.swaplist').animate({
                        left: '0'
                    }, 'slow'); //交换图片滚动
                }
            } else { //交换图片显示时
                $('.mainlist').css({
                        left: '960px'
                    }) //默认图片放在显示区域右
                $('.swaplist').animate({
                    left: sl - 960 + 'px'
                }, 'slow'); //交换图片滚动
                if (sl == (w - 960) * -1) { //交换图片最后一屏时
                    $('.mainlist').animate({
                        left: '0'
                    }, 'slow'); //默认图片滚动
                }
            }
        }
    })
    $('.banner-left2').click(function() {
        if ($('.swaplist,.mainlist').is(':animated')) {
            $('.swaplist,.mainlist').stop(true, true);
        }
        if ($('.mainlist a').length > 6) {
            ml = parseInt($('.mainlist').css('left'));
            sl = parseInt($('.swaplist').css('left'));
            if (ml <= 0 && ml > w * -1) {
                $('.swaplist').css({
                    left: w * -1 + 'px'
                });
                $('.mainlist').animate({
                    left: ml + 960 + 'px'
                }, 'slow');
                if (ml == 0) {
                    $('.swaplist').animate({
                        left: (w - 960) * -1 + 'px'
                    }, 'slow');
                }
            } else {
                $('.mainlist').css({
                    left: (w - 960) * -1 + 'px'
                });
                $('.swaplist').animate({
                    left: sl + 960 + 'px'
                }, 'slow');
                if (sl == 0) {
                    $('.mainlist').animate({
                        left: '0px'
                    }, 'slow');
                }
            }
        }
    })
})

// 媒体报道图片滚动
$(document).ready(function(e) { //图片滚动
    /***自动滚动***/
    time = window.setInterval(function() {
        $('.banner-right3').click();
    }, 5000);
    /***自动滚动***/
    linum = $('.mainlist3 a').length; //图片数量
    w = linum * 160; //div宽度
    $('.piclist3').css('width', w + 'px'); //div宽度
    $('.swaplist3').html($('.mainlist3').html()); //复制内容

    $('.banner-right3').click(function() {

        if ($('.swaplist3,.mainlist3').is(':animated')) {
            $('.swaplist3,.mainlist3').stop(true, true);
        }

        if ($('.mainlist3 a').length > 6) { //多于6张图片
            ml = parseInt($('.mainlist3').css('left')); //默认图片位置
            sl = parseInt($('.swaplist3').css('left')); //交换图片位置
            if (ml <= 0 && ml > w * -1) { //默认图片显示时
                $('.swaplist3').css({
                    left: '960px'
                }); //交换图片放在显示区域右侧
                $('.mainlist3').animate({
                    left: ml - 960 + 'px'
                }, 'slow'); //默认图片滚动                
                if (ml == (w - 960) * -1) { //默认图片最后一屏时
                    $('.swaplist3').animate({
                        left: '0'
                    }, 'slow'); //交换图片滚动
                }
            } else { //交换图片显示时
                $('.mainlist3').css({
                        left: '960px'
                    }) //默认图片放在显示区域右
                $('.swaplist3').animate({
                    left: sl - 960 + 'px'
                }, 'slow'); //交换图片滚动
                if (sl == (w - 960) * -1) { //交换图片最后一屏时
                    $('.mainlist3').animate({
                        left: '0'
                    }, 'slow'); //默认图片滚动
                }
            }
        }
    })
    $('.banner-left3').click(function() {
        if ($('.swaplist3,.mainlist3').is(':animated')) {
            $('.swaplist3,.mainlist3').stop(true, true);
        }
        if ($('.mainlist3 a').length > 6) {
            ml = parseInt($('.mainlist3').css('left'));
            sl = parseInt($('.swaplist3').css('left'));
            if (ml <= 0 && ml > w * -1) {
                $('.swaplist3').css({
                    left: w * -1 + 'px'
                });
                $('.mainlist3').animate({
                    left: ml + 960 + 'px'
                }, 'slow');
                if (ml == 0) {
                    $('.swaplist3').animate({
                        left: (w - 960) * -1 + 'px'
                    }, 'slow');
                }
            } else {
                $('.mainlist3').css({
                    left: (w - 960) * -1 + 'px'
                });
                $('.swaplist3').animate({
                    left: sl + 960 + 'px'
                }, 'slow');
                if (sl == 0) {
                    $('.mainlist3').animate({
                        left: '0px'
                    }, 'slow');
                }
            }
        }
    })
})

// 中间内容2切换标签
$(document).ready(function() {
    $(".content_two_upper li").each(function(index) {
        $(this).click(function() {
            $(".content_two_lower").removeClass("label");
            $(".un").removeClass("rm");
            $(".content_two_lower").eq(index).addClass("label");
            $(this).addClass("rm");
        })
    })
});


// 返回顶部
$(document).ready(function() {
    if ($(this).scrollTop() == 0) {
        $(".top").hide();
    }
    $(window).scroll(function(event) {
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