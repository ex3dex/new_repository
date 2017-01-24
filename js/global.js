;(function ($) {

$(document).ready(function() {

	$('body').on('click', '.next_games', function() {
		$('.remodal_wrapper').append('<img src="/wp-admin/images/spinner.gif"/>');
		var post_id_wrp = $('#remodal_wrapper').attr('data-post-id');
		// ajax request
		jQuery.ajax({
		type : 'POST',
		url : frontend_ajax_object.ajaxurl,
		data : {
			action : 'next_games',
			post_id: post_id_wrp
		},
		success: function(data) {
			var futureGames = jQuery.parseJSON(data);
			$('.remodal_wrapper img').remove();
			for( var i = 0; i < futureGames.length; i++) {
				$('.remodal_wrapper').append('<div class="event_in_popup"><a href="'+ futureGames[i][1] +'">'+ futureGames[i][0] +'</a></div>');
			}
		}
		});
	}) 
	$('body').on('click', '.clear_html', function() {
		console.log('CLOSED');
		$('.remodal_wrapper').empty();

	});

});

$(window).load(function() {

});
}(jQuery));

