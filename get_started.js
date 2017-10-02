$(function () {
	$("body").hide();
	jQuery(document).ready(function($) {
		$("body").fadeIn();
		$("#logo").addClass('main_logo_svg_in_place');
		
		setTimeout(function () {
			$("#h1").addClass('title_1_in_vision');
			$("#h2").addClass('title_2_in_vision');
			$(".rains_container").addClass('rains_container_start_rain');

		},1000);

		setTimeout(function () {
			$(".get_started_btn").addClass('get_started_in_vision');
			
		},1500);
		$("#get_started").bind('touchstart touchend', function() {
        
        $(this).toggleClass('get_started_btn_clicked');
    });
	

		
















	});//doc rdy




});