$(function(){
	// control inner page menu
	$('.page-menu-md .menu-toggle-btn').click(function() {
		$(this).parent('div').parent('li').children('ul').slideToggle();

		let targetListItem = $(this).parent('div').parent('li');
		if(targetListItem.hasClass('active')) {
			targetListItem.removeClass('active')
		}
		else{
			targetListItem.addClass('active');
		}
	});
})