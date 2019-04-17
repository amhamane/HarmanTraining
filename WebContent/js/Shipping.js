/*function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "aniket" && password == "123"){
alert ("Login successfully");
window.location = "Products.html"; // Redirecting to other page.
return false;
}
else if(username != "aniket"){
	
	//alert ("please enter correct username and password...");	
	document.getElementById("msg").innerHTML="please enter correct Username";
	return false;
}

}
*/
$(function(){
	var email_error=false;
	var firstname_error=false;
	var lastname_error=false;
	var address_error=false;
	var city_error=false;
	var state_error=false;
	var pincode_error=false;
	var mobileno_error=false;
	
	$("#email_error_msg").hide();
	$("#firstname_error_msg").hide();
	$("#lastname_error_msg").hide();
	$("#address_error_msg").hide();
	$("#city_error_msg").hide();
	$("#state_error_msg").hide();
	$("#pincode_error_msg").hide();
	$("#mobileno_error_msg").hide();
	
	$("#emailid").focusout(function(){
		checkEmail();
	});
	$("#fname").focusout(function(){
		checkFname();
	});
	$("#lname").focusout(function(){
		checkLname();
	});
	
	$("#address").focusout(function(){
		checkAddress();
	});
	
	$("#city").focusout(function(){
		checkCity();
	});
	
	$("#state").focusout(function(){
		checkState();
	});
	
	$("#pincode").focusout(function(){
		checkPincode();
	});
	
	$("#mobileno").focusout(function(){
		checkMobileno();
	});
	
	function checkEmail(){
		var emaillength=$("#emailid").val().length;
		
		if(emaillength==0){
			$("#email_error_msg").html("Please Enter Valid EmailId");
			$("#email_error_msg").show();
			email_error=true;
			
		}else{
			$("#email_error_msg").hide();
			email_error=false;
		}
		
	}
	function checkFname(){
		var fnamelength=$("#fname").val().length;
		if(fnamelength==0){
			$("#firstname_error_msg").html("Please Enter Firstname");
			$("#firstname_error_msg").show();
			password_error=true;
			
		}else{
			$("#firstname_error_msg").hide();
			password_error=false;
		}
		
	}
	function checkLname(){
		var lnamelength=$("#lname").val().length;
		if(lnamelength==0){
			$("#lastname_error_msg").html("Please Enter Lastname");
			$("#lastname_error_msg").show();
			lastname_error=true;
			
		}else{
			$("#lastname_error_msg").hide();
			lastname_error=false;
		}
		
	}
	function checkAddress(){
		var addresslength=$("#address").val().length;
		if(addresslength==0){
			$("#address_error_msg").html("Please Enter Address");
			$("#address_error_msg").show();
			address_error=true;
			
		}else{
			$("#address_error_msg").hide();
			address_error=false;
		}
		
	}
	function checkCity(){
		var cityLength=$("#city").val().length;
		if(cityLength==0){
			$("#city_error_msg").html("Please Enter City");
			$("#city_error_msg").show();
			city_error=true;
			
		}else{
			$("#city_error_msg").hide();
			city_error=false;
		}
		
	}
	function checkState(){
		var stateLength=$("#state").val().length;
		if(stateLength==0){
			$("#state_error_msg").html("Please Enter State");
			$("#state_error_msg").show();
			state_error=true;
			
		}else{
			$("#state_error_msg").hide();
			state_error=false;
		}
		
	}
	function checkPincode(){
		var pincode=$("#pincode").val();
		intRegex = /[0-9 -()+]+$/;
		if((!intRegex.test(pincode))||pincode.length!=6){
			$("#pincode_error_msg").html("Please Enter Valid Pincode");
			$("#pincode_error_msg").show();
			pincode_error=true;
			
		}else{
			$("#pincode_error_msg").hide();
			pincode_error=false;
		}
		
	}
	function checkMobileno(){
		
		
		var mobino=$("#mobileno").val();
		intRegex = /[0-9 -()+]+$/;
		if((!intRegex.test(mobino))||mobino.length!=10){
			
			$("#mobileno_error_msg").html("Please Enter Valid Mobile number");
			$("#mobileno_error_msg").show();
			mobileno_error=true;
			
		}else{
			
			$("#mobileno_error_msg").hide();
			mobileno_error=false;
		}
		
	}
	
	$("#shippingFrom").submit(function() {
		 email_error=false;
		 firstname_error=false;
		 lastname_error=false;
		 address_error=false;
		 city_error=false;
		 state_error=false;
		 pincode_error=false;
		 mobileno_error=false;
		 
		 checkEmail();
		 checkFname();
		 checkLname();
		 checkAddress();
		 checkCity();
		 checkState();
		 checkPincode();
		 checkMobileno();
		
		if(email_error==false && firstname_error==false){
			
			return true;
		}else{
						return false;
		}
		
	});
});