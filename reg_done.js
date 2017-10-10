$(function () {
	
	jQuery(document).ready(function($) {
		


		$("#logo").addClass('small_side_logo_is_visible');

setTimeout(function () {
			$("#h1").addClass('title_1_in_vision');
			$("#h2").addClass('title_2_in_vision');
			$(".rains_container").addClass('rains_container_start_rain');

		},1000);

setTimeout(function () {
	$(".big_tick_container").addClass('big_tick_animation_class');
},1200);

setTimeout(function () {
	$(".go_to_login_btn").addClass('go_to_login_btn_is_visible');
},1500);


});
	});