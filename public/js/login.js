// ======================================
// 			Login Submit
// ======================================
$("#submitLoginInfo").on("click", function(){
	event.preventDefault();
	var loginCredentials = {
		username: $("#username").val(),
		password: $("#password").val()
	};
	console.log("Pre Ajax: " + JSON.stringify(loginCredentials));
	//make a get request with the route "/login"
	//perform comparison logic on the back end in the routes to see if the user matches db info
	$.get("/login", loginCredentials);
});


// ======================================
// 			Sign Up Submit
// ======================================
$("#signUpSubmit").on("click", function(){
	event.preventDefault();


});


// -Shouldn't actually need these on click functions if we are 
// 	calling actions in the form
// -The action will be set to a post route that can also generate a token and 
// 	post that token to the database with the user info
// -create cookie as follows   document.cookie = "username=token";