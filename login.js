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

		$("#submit_input").bind("click", Log_In_validation);





	$("#validation_message").hide();
	});//doc redy






function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function Log_In_validation() {
  $("#validation_message").hide();
  var ret = true;
  
  var email = $("#email_input").val();
  var pass = $("#pass_input").val();
  if (!validateEmail(email) ) {
	$("#validation_message").fadeIn();
	console.log("mailerror");
    ret = false;
  }
  if ( pass == "") {
	$("#validation_message").fadeIn();
	console.log("passerror");
    ret = false;
  }



  return ret;
}































});