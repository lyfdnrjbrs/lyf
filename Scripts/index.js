$(function () {
    //鼠标移入产品子项事件
    $(".product .pro dl").mouseover(function () {
        $(this).css("box-shadow", "0px 0px 10px #96c8d3");
        $(this).css("transition", "ease 0.3s");
        $(this).find(".title a").css("color", "#404040");
        $(this).find(".title a").css("transition", "ease 0.3s");
    })
    //鼠标移出产品子项事件
    $(".product .pro dl").mouseout(function () {
        $(this).css("box-shadow", "0px 0px 10px #cccccc");
        $(this).find(".title a").css("color", "#01788c");
    })
    //鼠标移入服务子项事件
    $(".services .left ul li").mouseover(function () {
        var $id = $(this).attr("id");
        $(this).parent().find(".left-active").removeAttr("class");
        $(this).addClass("left-active");
        $(this).parent().parent().parent().find(".right ul .right-active").removeAttr("class");
        $(this).parent().parent().parent().find(".right ul #" + $id).addClass("right-active");
    })
    //鼠标移入服务隐藏导航栏子项事件
    $(".services .newleft ul li").mouseover(function () {
        var $id = $(this).attr("id");
        $(this).parent().find(".newleft-active").removeAttr("class");
        $(this).addClass("newleft-active");
        $(this).parent().parent().parent().find(".right ul .right-active").removeAttr("class");
        $(this).parent().parent().parent().find(".right ul #" + $id).addClass("right-active");
    })
    //鼠标移入公司子项事件
    $(".company .com ul li").mouseover(function () {
        var $id = $(this).attr("id");
        $(this).parent().find(".top-active").removeAttr("class");
        $(this).addClass("top-active");
        $(this).parent().parent().find(".ulword .bottom-active").removeAttr("class");
        $(this).parent().parent().find(".ulword #" + $id).addClass("bottom-active");
    })
    //鼠标移入新闻子项事件
    $(".news .ne dl").mouseover(function () {
        $(this).css("border", "1px solid #244e60");
        $(this).css("transform", "scale(1.03)");
        $(this).css("transition", "ease 0.3s");
        $(this).find(".title a").css("color", "#244e60");
        $(this).find(".title a").css("transition", "ease 0.3s");
    })
    //鼠标移出新闻子项事件
    $(".news .ne dl").mouseout(function () {
        $(this).css("border", "1px solid #cccccc");
        $(this).css("transform", "scale(1.0)");
        $(this).find(".title a").css("color", "#01788c");
    })
})