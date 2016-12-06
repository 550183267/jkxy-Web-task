//点击搜索按钮 显示
$(".icon-search").click(function() {
    $(".header-middle").show(500);
    $(".header-nav").hide(1000);
    $(".header-right").hide(1000);
});
//点击关闭按钮
$(".close").click(function() {
    $(".header-middle").hide();
    $(".header-nav").show();
    $(".header-right").show();
})


//点击列表 显示
$(".list").click(function() {
    $(".con-right-con1 #pos").removeClass("pos");
    $(".con-right-con1 #one").removeClass("one");
    $(".con-right-con1 #tp").removeClass("tp");
    $(".con-right-con1 #nr").removeClass("nr");
    $(".con-right-con1 #nr div.sj").removeClass("sj");
    $(".con-right-con1 span.y").removeClass("y");
    $(".con-right-con1 #pos").addClass("pos1");
    $(".con-right-con1 #one").addClass("one1");
    $(".con-right-con1 #tp").addClass("tp1");
    $(".con-right-con1 #nr").addClass("nr1");
    $(".con-right-con1 #nr div").addClass("sj1");
});
//点击图片按钮
$(".pic").click(function() {
    $(".con-right-con1 #pos").removeClass("pos1");
    $(".con-right-con1 #one").removeClass("one1");
    $(".con-right-con1 #tp").removeClass("tp1");
    $(".con-right-con1 #nr").removeClass("nr1");
    $(".con-right-con1 #nr div.sj1").removeClass("sj1");
    $(".con-right-con1 span.rs").addClass("y");
    $(".con-right-con1 #pos").addClass("pos");
    $(".con-right-con1 #one").addClass("one");
    $(".con-right-con1 #tp").addClass("tp");
    $(".con-right-con1 #nr").addClass("nr");
    $(".con-right-con1 #nr div").addClass("sj");
})


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



//分页

(function($) {
    var ms = {
        init: function(obj, args) {
            return (function() {
                ms.fillHtml(obj, args);
                ms.bindEvent(obj, args);
            })();
        },
        //填充html
        fillHtml: function(obj, args) {
            return (function() {
                obj.empty();
                //首页
                if (args.current > 1) {
                    obj.append('<a href="javascript:;" class="prevPage">首页</a>');
                } else {
                    obj.remove('.prevPage');
                    obj.append('<span class="disabled">首页</span>');
                }
                //上一页
                if (args.current > 1) {
                    obj.append('<a href="javascript:;" class="prevPage">上一页</a>');
                } else {
                    obj.remove('.prevPage');
                    obj.append('<span class="disabled">上一页</span>');
                }
                //中间页码
                if (args.current != 1 && args.current >= 4 && args.pageCount != 4) {
                    obj.append('<a href="javascript:;" class="tcdNumber">' + 1 + '</a>');
                }
                if (args.current - 2 > 2 && args.current <= args.pageCount && args.pageCount > 5) {
                    obj.append('<span>...</span>');
                }
                var start = args.current - 2,
                    end = args.current + 2;
                if ((start > 1 && args.current < 4) || args.current == 1) {
                    end++;
                }
                if (args.current > args.pageCount - 4 && args.current >= args.pageCount) {
                    start--;
                }
                for (; start <= end; start++) {
                    if (start <= args.pageCount && start >= 1) {
                        if (start != args.current) {
                            obj.append('<a href="javascript:;" class="tcdNumber">' + start + '</a>');
                        } else {
                            obj.append('<span class="current">' + start + '</span>');
                        }
                    }
                }
                if (args.current + 2 < args.pageCount - 1 && args.current >= 1 && args.pageCount > 5) {
                    obj.append('<span>...</span>');
                }
                if (args.current != args.pageCount && args.current < args.pageCount - 2 && args.pageCount != 4) {
                    obj.append('<a href="javascript:;" class="tcdNumber">' + args.pageCount + '</a>');
                }
                //下一页
                if (args.current < args.pageCount) {
                    obj.append('<a href="javascript:;" class="nextPage">下一页</a>');
                } else {
                    obj.remove('.nextPage');
                    obj.append('<span class="disabled">下一页</span>');
                }
                obj.append('<span class="pagecount">共' + args.pageCount + '页</span>');
                //跳转页码
                if (args.turndown == 'true') {
                    obj.append('<span class="countYe">当前<input type="text" maxlength=' + args.pageCount.toString().length + ' value=' + args.pageCount.toString().length + '>页<a href="javascript:;" class="turndown">确定</a><span>');
                }
            })();
        },
        //绑定事件
        bindEvent: function(obj, args) {
            return (function() {
                obj.on("click", "a.tcdNumber", function() {
                    var current = parseInt($(this).text());
                    ms.fillHtml(obj, { "current": current, "pageCount": args.pageCount, "turndown": args.turndown });
                    if (typeof(args.backFn) == "function") {
                        args.backFn(current);
                    }
                });
                //上一页
                obj.on("click", "a.prevPage", function() {
                    var current = parseInt(obj.children("span.current").text());
                    ms.fillHtml(obj, { "current": current - 1, "pageCount": args.pageCount, "turndown": args.turndown });
                    if (typeof(args.backFn) == "function") {
                        args.backFn(current - 1);
                    }
                });
                //下一页
                obj.on("click", "a.nextPage", function() {
                    var current = parseInt(obj.children("span.current").text());
                    ms.fillHtml(obj, { "current": current + 1, "pageCount": args.pageCount, "turndown": args.turndown });
                    if (typeof(args.backFn) == "function") {
                        args.backFn(current + 1);
                    }
                });
                //跳转
                obj.on("click", "a.turndown", function() {
                    var page = $("span.countYe input").val();
                    if (page > args.pageCount) {
                        alert("您的输入有误，请重新输入！");
                    }
                    ms.fillHtml(obj, { "current": page, "pageCount": args.pageCount, "turndown": args.turndown });
                });
            })();
        }
    }
    $.fn.createPage = function(options) {
        var args = $.extend({
            pageCount: 10,
            current: 1,
            turndown: true,
            backFn: function() {}
        }, options);
        ms.init(this, args);
    }
})(jQuery);
