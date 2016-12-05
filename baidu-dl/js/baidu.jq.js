//使用了单例模式
//减少全局变量的泛滥,使得类的一个对象成为系统中的唯一实例
$(function() {
    var i = 0;
    var skinpeeler = {
        init: function(argument) {
            this.render();
            this.bind();
        },
        render: function() {
            var me = this;
            me.skin = $('.skin1'); //换肤按钮
            me.skinbox = $('.skin-box'); //换肤界面
            me.upskin = $('.stop'); //关闭按钮
            me.skinimg = $('.skin-shr img'); //图片选择
            me.uld = $('.ul_d'); //更多产品
            me.sidebar = $('.sidebar');
            me.ulc = $('.ul_c'); //设置
            me.ulb = $('.ul_b'); //账户名
        },
        bind: function() {
            var me = this;
            me.skin.click(function(e) { //显示换肤界面
                me.skinbox.slideDown(1000);
                e.stopPropagation(); //阻止冒泡
            });
            me.upskin.click(function(e) { //点击关闭按钮隐藏换肤界面
                me.skinbox.slideUp(1000);
            });
            me.skinbox.click(function(e) {
                e.stopPropagation(); //阻止冒泡
            });
            me.skinimg.hover(function() {
                i = $(this).index();
                //小窗口预览
                $(".bg").css("background", 'url(image/land/skin/' + i + '.jpg)');
                $(".bg").css("background-size", "264px 180px");
                $(".skin-page").css("background", 'url(image/land/skin.png');
                $(".skin-page").css("background-position", "0px 0px");
            });
            me.skinimg.click(function() {
                $("body").css("background", 'url(image/land/skin/' + i + '.jpg)');
                $(".baidu-logo1").css("background", 'url(image/land/baidu-white.png');
                $(".baidu-logo1").css("background-size", "270px 129px");
                $(".white").css("color", "#fff");
                $(".head-nav").toggleClass("head-nav1");
                $(".pc-botton").toggleClass("pc-botton1");
                $(".roll i").css("background-position", "-107px -22px");
                saveStorage(i); //保存到loadStorage
            });
            // 鼠标滑过一级导航显示二级导航
            me.ulb.mouseenter(function() {
                $(".pos1").show();
            });
            me.ulb.mouseleave(function() {
                $(".pos1").hide();
            });
            me.ulc.mouseenter(function() {
                $(".pos2").show();
            });
            me.ulc.mouseleave(function() {
                $(".pos2").hide();
            });
            me.uld.mouseenter(function() {
                me.sidebar.show().mouseleave(function() {
                    me.sidebar.hide();
                });
            });
        }
    };

    function saveStorage(str) { //皮肤保存到localStorage
        localStorage.setItem("skinkey", str);
    };

    function loadStorage() { //从localStorage中读取皮肤
        return localStorage.getItem("skinkey");
    };
    window.onload = function() { //页面加载皮肤
        var i = loadStorage();
        $("body").css("background", 'url(image/land/skin/' + i + '.jpg)');
        $(".baidu-logo1").css("background", 'url(image/land/baidu-white.png');
        $(".baidu-logo1").css("background-size", "270px 129px");
        $(".white").css("color", "#fff");
        $(".head-nav").toggleClass("head-nav1");
        $(".pc-botton").toggleClass("pc-botton1");
        $(".roll i").css("background-position", "-107px -22px");
    };
    //标签切换
    var toggletag = {
        init: function(argument) {
            this.render();
            this.bind();
        },
        render: function() {
            var me = this;
            me.tagtitle = $('.rec-con-nav li'); //标签标题
        },
        bind: function() {
            var me = this;
            me.tagtitle.each(function(index) {
                $(this).click(function() {
                    $(".rec div.lab-block").removeClass("lab-block");
                    $(".rec-con-nav li.con-li1").removeClass("con-li1");
                    $("div.rec1").eq(index).addClass("lab-block");
                    $(this).addClass("con-li1");
                })
            });
        }
    };
    // 我的关注鼠标点击显示
    var follow = {
        init: function(argument) {
            this.render();
            this.bind();
        },
        render: function() {
            var me = this;
            me.fol = $('.rec-fol-tit'); //鼠标滑过我的导航框
            me.foldiv = $('.fol-div'); //点击我的导航
            me.foledit = $('.rec-fol-edit');
            me.follink = $('.rec-fol-link');
            me.folicon = $('.fol-icon1');
            me.cus1 = $('.cus1'); //自定义显示按钮
            me.cusclo = $('.cus-clo'); //自定义关闭按钮
            me.cushide = $('.cus-hide');
            me.cusclose = $('.cus-close');
        },
        bind: function() {
            var me = this;
            me.fol.hover(function(e) { //鼠标滑过我的导航框
                me.foledit.toggle();
            });
            me.foldiv.click(function(e) { //点击我的导航显示
                me.follink.toggle();
                me.folicon.toggleClass("fol-icon2");
            });
            me.cus1.click(function(e) {
                me.cushide.toggle();
                me.cus1.toggleClass("cus2");
                me.cusclose.toggleClass("cus-close1");
            });
            me.cusclo.click(function(e) {
                me.cushide.hide();
                me.cus1.toggleClass("cus2");
                me.cusclose.toggleClass("cus-close1");
            });
        }
    };
    //返回顶部
    var gotop = {
        init: function(argument) {
            this.render();
            this.bind();
        },
        render: function() {
            var me = this;
            me.top = $('.top'); //返回顶部按钮
            me.search = $(".sea-float");//浮动搜索
            me.recinf=$('.rec-inf');//显示更多
        },
        bind: function() {
            var me = this;
            $(window).scroll(function(event) {
                if ($(this).scrollTop() == 0) {
                    me.top.hide();
                }
                if ($(this).scrollTop() != 0) {
                    me.top.show();
                }
            });
            // 鼠标点击回到顶部
            me.top.click(function(event) {
                $("html,body").animate({
                    scrollTop: "0px"
                })
            });
            //浮动搜索
            $(window).scroll(function() {
                if (($(window).scrollTop()) >= 300) {
                    me.search.css('display', 'block');
                } else {
                    me.search.css('display', 'none');
                };
            });
            // 滚动查看更多显示
            $(window).scroll(function() {
                if (($(window).scrollTop()) >= 80) {
                    me.recinf.css('display', 'block');
                }
            });
        }
    };
    skinpeeler.init();
    toggletag.init();
    follow.init();
    gotop.init();
})
