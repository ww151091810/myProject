$(document).ready(function() {

	$(".tab-list li").click(function() {
		if(!$(this).hasClass('active')) {
			$(this).siblings('li').removeClass("active");
			$(this).addClass('active')

			if($(this).data('target') == 'goods')
				$("#goods").show();
			else 
				$("#goods").hide();
		}
	});
})