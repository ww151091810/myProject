$(document).ready(function() {
    var _index = 0;
    $("#menu ul li").click(function() {
        $(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
        _index = $(this).index() + 1;
        //通过拼接字符串获取元素，再取得相对于文档的高度
        var _top = $("#louti" + _index).offset().top;
        //scrollTop滚动到对应高度
        $("body,html").animate({ scrollTop: _top }, 500);
    });
    var nav = $("#menu"); //得到导航对象
    var win = $(window); //得到窗口对象
    var sc = $(document); //得到document文档对象。
    win.scroll(function() {

        if (sc.scrollTop() >= 600) {
            $("#menu").show();
            //获取滚动元素对应的索引!!!重难点
            var index = Math.floor(sc.scrollTop() / 600);

            $("#menu ul li span").eq(index - 1).addClass("active").parent().siblings().find("span").removeClass("active");
        } else {
            $("#menu").hide();
        }
    });
});