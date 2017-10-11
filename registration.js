$(function () {
	
	jQuery(document).ready(function($) {
		


		$("#logo").addClass('small_side_logo_is_visible');

setTimeout(function () {
			$("#h1").addClass('title_1_in_vision');
			$("#h2").addClass('title_2_in_vision');
			$(".rains_container").addClass('rains_container_start_rain');

		},1000);



$("#name_error_message").hide();
	$("#email_error_message").hide();
	$("#password_error_message").hide();
	$("#password_confirm_error_message").hide();
	$("#hidden_reg_button").hide();



		});	//doc rdy




	//$("#nice_name").hide();
// promenlivi  false
var error_name = false;
var error_pass = false;
var error_repass = false;
var error_email = false;


$("#user_name_input").bind('input propertychange',function  () {
	check_name();
	
});
$("#email_input").bind('input propertychange',function  () {
	check_email();
});
$("#password_input").bind('input propertychange',function  () {
	check_pass();
});
$("#password_re_input").bind('input propertychange',function  () {
	check_repass();
});





function check_name() {
		var name_length = $("#user_name_input").val().length;
		if (name_length < 5 || name_length >20) {
			$(".span_after_user_name").removeClass('ok_tick_is_visible');
	$("#name_error_message").html("Shoud be betwen 5 and 20 chars");
	$("#name_error_message , #submit_input").show();
	$("#hidden_reg_button").hide();
	error_name = true;
		}else{
$("#hidden_reg_button").show();
			$(".span_after_user_name").addClass('ok_tick_is_visible');
			$("#name_error_message , #submit_input").hide();
			
		}
}
 function check_email() {
		var EmailStructure = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		 var email_value = $("#email_input").val();
			
			if ( !EmailStructure.test(email_value) ) {	
		$(".span_after_email").removeClass('ok_tick_is_visible');
		$("#email_error_message").html("Email is not valid");
		$("#email_error_message , #submit_input").show();
		$("#hidden_reg_button").hide();
		error_email = true;
			}else{
				$("#hidden_reg_button").show();
				$(".span_after_email").addClass('ok_tick_is_visible');
		$("#email_error_message , #submit_input").hide();
			}
}


function check_pass() {
 	var pass_length = $("#password_input").val().length;
		 if(pass_length < 5){
		$(".span_after_password").removeClass('ok_tick_is_visible');
		$("#password_error_message").html("Must be longer than 5 charecters");
		$("#password_error_message , #submit_input").show();
		$("#hidden_reg_button").hide();
		error_pass = true;
		 }else{
		 	$("#hidden_reg_button").show();
		 	$(".span_after_password").addClass('ok_tick_is_visible');
		$("#password_error_message , #submit_input").hide();
		 }
}


function check_repass(){
 
	 var password_value = $("#password_input").val();
	 var rep_password_value = $("#password_re_input").val();
		if (password_value != rep_password_value || (password_value =="" && rep_password_value=="" && password_value == rep_password_value)) {
				error_repass = true;
			$(".span_after_password_re").removeClass('ok_tick_is_visible');
			$("#password_confirm_error_message").html("Passwords dont match");
		$("#password_confirm_error_message, #submit_input").show();
		$("#hidden_reg_button").hide();
	
		}else{
			$("#hidden_reg_button").show();
			$(".span_after_password_re").addClass('ok_tick_is_visible');
			$("#password_confirm_error_message , #submit_input").hide();
		}
}



$("#reg_form").submit(function  () {
	error_name = false;
	error_pass = false;
	error_repass = false;
	error_email = false;

check_name();
check_repass();
check_pass();
check_email();

if ( error_pass==false  && error_email==false && error_name == false && error_repass == false) {
return true;

}else{
	console.log("error")
return false;
}
});



});