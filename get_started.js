$(function () {
	jQuery(document).ready(function($) {
		
		$("#logo").addClass('main_logo_svg_in_place');
		
		setTimeout(function () {
			$("#h1").addClass('title_1_in_vision');
			$("#h2").addClass('title_2_in_vision');
		},1000);

		setTimeout(function () {
			$(".get_started_btn").addClass('get_started_in_vision');
			
		},1500);
	
	});
});