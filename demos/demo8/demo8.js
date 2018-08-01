$(document).ready(function() {
	$(".tab-list li").click(function() {
		if(!$(this).hasClass('active')) {
			$(this).siblings('li').removeClass("active");
			$(this).addClass('active')

			var target = $(this).data('target')
			if(!$("#" + target).hasClass('active')) {
				$("#" + target).addClass('active');
				$("#" + target).siblings('.intro-wrapper').removeClass('active')
			}
		}
	});
})