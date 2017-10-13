$(function () {
	
	jQuery(document).ready(function($) {
		
		$("#logo").addClass('main_logo_svg_in_place');
		
		setTimeout(function () {
			$("#h1").addClass('title_1_in_vision');
			$("#h2").addClass('title_2_in_vision');
			$(".rains_container").addClass('rains_container_start_rain');

		},1000);



		
		$("#submit_input").bind('touchstart touchend', function() {
        
        $(this).toggleClass('button_input_clicked');
    });

		//$("#submit_input").bind("click", Log_In_validation);





	$("#validation_message").hide();
$("#hidden_log_button").hide();
});//doc redy








var error_pass = false;
var error_email = false;



$("#email_input").bind('input propertychange',function  () {
	check_email();
});
$("#password_input").bind('input propertychange',function  () {
	check_pass();
});




function check_email() {
var EmailStructure = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 var email_value = $("#email_input").val();
	
	if ( !EmailStructure.test(email_value) ) {	
		$(".span_after_email").removeClass('ok_tick_is_visible');
		
$("#validation_message").html("Email is not valid");
$("#validation_message").fadeIn();
$("#hidden_log_button").hide();
$("#submit_input").show();
error_email = true;
	}else{
		$(".span_after_email").addClass('ok_tick_is_visible');
	$("#hidden_log_button").show();
$("#validation_message").hide();
$("#submit_input").hide();
	}
}

function check_pass() {
var pass_length = $("#password_input").val().length;
 if(pass_length < 5){
 
  	$(".span_after_password").removeClass('ok_tick_is_visible');
$("#validation_message").html("Between 5 and 20 chars");
$("#validation_message").fadeIn();
$("#submit_input").show();
$("#hidden_log_button").hide();
error_pass = true;
 }else{
 	$("#hidden_log_button").show();
 	$("#submit_input").hide();
 	$(".span_after_password").addClass('ok_tick_is_visible');
$("#validation_message").hide();
 }
}



$("#login_form").submit(function  () {

error_pass = false;
error_email = false;

check_pass();
check_email();

if ( error_pass==false  && error_email==false) {
return true;
}else{
	$("#validation_message").html("Wrong Email or Passrowd");
	$("#validation_message").fadeIn();
return false;
}
});

























});