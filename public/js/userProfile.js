//-Make a model first to store all user submissions
//-within submitForm.js add a create request to add the user submission
//-on the backend make a route to catc that user submission and create a new submission in your db table
//-use the following code as an example for the nexts steps


// =====================================================
// 			Front End
// =====================================================

//-get user id, then within the callback, get from another route beer submissions by that user
var userProfileId;
$.get("/getid").then(function(res){
	userProfileId = res.UserId;

	var getBeersQuery =  "/api/beersUserId/" + userProfileId;

	$.get(getBeersQuery).then(function(beersRes){
		var allBeersArray = [];
		//add all user's beer to an array
		for(i = 0; i < beersRes.length; i ++){
			allBeersArray.push(beersRes[i].Beer_Name);
		}

		for(i = 0; i < allBeersArray.length; i ++){
			var div = document.createElement("div");
			div.innerHtml(allBeersArray[i]);
			//create a div in html file to add everything to
			$("#parentDiv").appendChild(div);
		}
	});
});


// =====================================================
// 			Back End Routes
// =====================================================
	app.get("/api/beersUserId/:id", function(req, res) {
		db.UserSubmissionBeer.findAll({
			where: {
				UserId: req.params.id
			}
		}).then(function(dbBeer) {
			res.json(dbBeer);
		});
	});


	app.get("/getid", function(req, res) {
		// console.log("/getid called");
		var userCookie = req.cookies.authToken;
		db.Login.findAll({
			where: {
				AuthToken: userCookie
			}
		}).then(function(result) {
			var userId = result[0].dataValues.id;
			if(result[0] === undefined){
				res.redirect("/");
			}
			if(userCookie === result[0].dataValues.AuthToken){
				res.json(result);
			}else{
				console.log("triggering else statement");
				res.redirect("/");
			};
		});
	});