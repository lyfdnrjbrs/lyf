$(function () {
    // 导航栏和隐藏导航栏1 鼠标移入导航栏事件
    $(".plone-nav li").mouseover(function () {
        // 标题变黑色
        $(this).find(".nav-title").css("color", "#404040");
        // 显示下拉图标
        $(this).find(".showicon").css("display", "block");
        // 显示nav
        $(this).find(".showul").css("display", "block");
    })
    // 导航栏和隐藏导航栏1 鼠标移出导航栏事件
    $(".plone-nav li").mouseout(function () {
        // 标题还原01788c
        $(this).find(".nav-title").css("color", "#01788c");
        // 隐藏下拉图标
        $(this).find(".showicon").css("display", "none");
        // 隐藏nav
        $(this).find(".showul").css("display", "none");
    })
    // 导航栏和隐藏导航栏1 nav二级菜单点击事件
    $('.plone-nav li ul li').on('click', function (e) {
        // 阻止事件冒泡，向更高级传递
        e.stopPropagation();
        // 地址变为a标签的地址
        location.href = $(this).find("a").attr("href");
    });
    // 隐藏导航栏2 menu点击事件
    $(".nav-icon").click(function () {
        // 获取menu图标的显示状态
        var t = $(this).find(".show-svg").css("display");
        // 判断状态为none隐藏时
        if (t == 'none') {
            // 显示menu图标
            $(this).find(".show-svg").css("display", "inline-block");
            // 隐藏x图标
            $(this).find(".yc-svg").css("display", "none");
            // 隐藏nav
            $(this).parent().parent().find(".onenav").css("display", "none");
            // 重置下拉图标，全部显示
            $(this).parent().parent().find(".onenav li .down-svg").css("display", "inline-block");
            // 重置向上图标，全部隐藏
            $(this).parent().parent().find(".onenav li .up-svg").css("display", "none");
            // 重置nav，全部隐藏
            $(this).parent().parent().find(".onenav li .twonav").css("display", "none");
        } else {
            // 状态不隐藏时
            // 隐藏menu图标
            $(this).find(".show-svg").css("display", "none");
            // 显示向上图标
            $(this).find(".yc-svg").css("display", "inline-block");
            // 显示nav
            $(this).parent().parent().find(".onenav").css("display", "block");
        }
    })
    // 隐藏导航栏2 nav一级菜单点击事件
    $(".onenav>li").click(function (e) {
        // 获取下拉图标的显示状态
        var t = $(this).find(".down-svg").css("display");
        // 判断状态为none隐藏时
        if (t == 'none') {
            // 显示下拉图标
            $(this).find(".down-svg").css("display", "inline-block");
            // 隐藏向上图标
            $(this).find(".up-svg").css("display", "none");
            // 隐藏nav二级菜单
            $(this).find(".twonav").css("display", "none");
        } else {
            // 隐藏下拉图标
            $(this).find(".down-svg").css("display", "none");
            // 显示其他同辈元素的下拉图标
            $(this).siblings().find(".down-svg").css("display", "inline-block");
            // 显示向上图标
            $(this).find(".up-svg").css("display", "inline-block");
            // 隐藏其他同辈元素的向上图标
            $(this).siblings().find(".up-svg").css("display", "none");
            // 显示nav二级菜单
            $(this).find(".twonav").css("display", "block");
            // 隐藏其他同辈元素的nav二级菜单
            $(this).siblings().find(".twonav").css("display", "none");
        }
    })
    // 隐藏导航栏2 nav二级菜单点击事件
    $('.twonav li').on('click', function (e) {
        // 阻止事件冒泡，向更高级传递
        e.stopPropagation();
        // 地址变为a标签的地址
        location.href = $(this).find("a").attr("href");
    });
})