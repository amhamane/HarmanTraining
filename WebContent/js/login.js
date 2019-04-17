// Variable to count number of attempts.
// Below function Executes on click of login button.


$(function(){
	var username_error=false;
	var password_error=false;
	$("#username_error_msg").hide();
	$("#username").focusout(function(){
		checkUserName();
	});
	$("#password").focusout(function(){
		checkPassword();
	});
	
	function checkUserName(){
		var username=$("#username").val();
		if(username!="aniket"){
			$("#username_error_msg").html("please enter correct Username");
			$("#username_error_msg").show();
			username_error=true;
			
		}else{
			$("#username_error_msg").hide();
			username_error=false;
		}
		
	}
	function checkPassword(){
		var password=$("#password").val();
		if(password!="123"){
			$("#password_error_msg").html("please enter correct Password");
			$("#password_error_msg").show();
			password_error=true;
			
		}else{
			$("#password_error_msg").hide();
			password_error=false;
		}
		
	}
	
	$("#registration_form").submit(function() {
		
		username_error=false;
		password_error=false;
		checkPassword();
		checkUserName();
		
		if(username_error==false && password_error==false){
			
			return true;
		}else{
			
			return false;
		}
		
	});
	
});







/*



function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
 if ( username == "aniket" && password == "123")
 {
	alert ("Login successfully");
	window.location = "Products.html"; // Redirecting to other page.
	return true;
 }
else if(username != "aniket"){
	
	//alert ("please enter correct username and password...");	
	document.getElementById("username_error_msg").innerHTML="please enter correct username";
	return false;
}
else if(password != "123"){
	
	//alert ("please enter correct username and password...");	
	document.getElementById("username_error_msg").innerHTML="";
	document.getElementById("password_error_msg").innerHTML="please enter correct password";
	return false;
}




}
$(document).ready(function(){
	$("submit").click(function(){
		var email = $("#username").val();
		var password = $("#password").val();
		// Checking for blank fields.
		if( email =='' || password =='')
		{
			$('input[type="text"],input[type="password"]').css("border","2px solid red");
			$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
			alert("Please fill all fields...!!!!!!");
		}
	});
	
	
});






}*/






