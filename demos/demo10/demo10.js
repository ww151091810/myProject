$(document).ready(function() {
    $(".tab-list li").mouseenter(function() {
        if (!$(this).hasClass('active')) {
            $(this).siblings('li').removeClass("active");
            $(this).addClass('active');
            $(".menu-detail").eq(0).addClass('show');
            var target = $(this).data('target')
            if (!$("#" + target).hasClass('show')) {
                $("#" + target).addClass('show');
                $("#" + target).siblings('.detail-wrapper').removeClass('show')
            }
        }
    });

    $(".tab-list li").mouseleave(function(event) {
        /* Act on the event */
        var target = $(this).data('target')
        if (!$("#" + target).hasClass('show')) {
            $("#" + target).addClass('show');
            $("#" + target).siblings('.detail-wrapper').removeClass('show')
        }
    });

    $(".left-container").mouseleave(function(event) {
        $(".menu-detail").removeClass('show');
        $(".tab-list li").removeClass('active');
    });
})