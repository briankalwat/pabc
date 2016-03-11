$(document).ready(function(){

	$("body").removeClass("preload");

	// $('.mobile-nav-trigger').click(function(){
	// 	console.log('opened mobile nav');
	// 	$('#mobile-nav-wrapper').slideToggle(200);
	// });

	// Toggle User Nav
	$('#tab').click(function(){
		$('#usernav-list').slideToggle(200);
		return false;
	})

	$('#sidebar li a').click(function(){
		var entry_id = $(this).attr('id');
		if($(this).hasClass('selected')) {

		} else {
			$('#sidebar li a').removeClass('selected');
			$(this).addClass('selected');
			$('#tabs li.selected').removeClass('selected');
			$('#tabs li.'+ entry_id +'').addClass('selected');
			return false;
		}
	});
	
});