$(function(){
	$('.page-menu-md .menu-toggle-btn').click(function() {
		$(this).parent('div').parent('li').children('ul').slideToggle();
		console.log($(this).attr('class'))
	});
})