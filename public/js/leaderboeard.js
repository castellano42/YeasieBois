var allUserNames = [];
var correspodningUserId = [];

var sel = document.getElementById("leaderboard");

$.get("/api/users", function(data, status) {
	
	for (i =0; i<data.length; i++){
		var user = document.createElement("user");
		user.innerHTML = data[i].Username.trim();
		user.value = data[i].Username.trim();
		sel.appendChild(user);
		allUserNames.push(data[i].Username.trim())
		correspodningUser.push(data[i].id.trim());
	}
});