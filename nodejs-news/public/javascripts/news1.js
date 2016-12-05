$(function() {
    //导航
    var sInfo = {
        category: '精选'
    };
    getData(sInfo);
    $(".tit span").each(function(index) {
            $(this).click(function() {
                $(".tit span.tabin").removeClass("tabin");
                $(this).addClass("tabin");
                var sInfo = {
                    category: $(".tabin").text()
                };
                getData(sInfo);
            })
        })
        //ajax
    function getData(sInfo) {
        $.ajax({
            type: 'get',
            url: '/news',
            dataType: 'json',
            data: sInfo,
            beforeSend: function() {
                $("#loading").html("<img id='loading' src='/images/move/loading.gif'>");
            },
            success: function(msg) {
                $("#loading").html("");
                $("#list ul").empty();
                var li = "";
                var list = msg;
                $.each(list, function(index, array) { //遍历json数据列
                    li += "<li><a href='#'><img src='" + array['pic'] + "'><p>" + array['title'].substring(0) + "</p></a><b>" + array['time'] + "</b></li>";
                });
                $("#list ul").append(li);
            },
            error: function() {
                $("#loading").html("<img id='loading' src='/images/move/loading.gif'>");
                $("#list ul").html("请求数据失败");
            }
        });
    }

    // 返回顶部
    $(document).ready(function() {
        if ($(this).scrollTop() == 0) {
            $(".float").hide();
        }
        $(window).scroll(function(event) {
            if ($(this).scrollTop() == 0) {
                $(".float").hide();
            }
            if ($(this).scrollTop() != 0) {
                $(".float").show();
            }
        });
        // 鼠标点击回到顶部
        $(".top").click(function(event) {
            $("html,body").animate({
                scrollTop: "0px"
            });
        })
    })
})

