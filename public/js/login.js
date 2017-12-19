// -Send a get request to "/authMatch" to retrieve authToken
// 	from the db by the user ID.
// -Check to see if authToken matches
// -If authToken doesn't match the cookie, redirect to login page

function checkLogin(){
	$.get("/authMatch").then(function(result){

	});
};

checkLogin();