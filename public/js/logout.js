$("#logoutButton").on("click", function(){
	event.preventDefault();
	alert("Logout JS");
	document.cookie = "authToken" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	checkLogin();
});