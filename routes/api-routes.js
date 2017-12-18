var db = require("../models");
var randToken  = require("rand-token");




module.exports = function(app) {
	// ==============================================
	// 			Beer Table/API Routes
	// ==============================================
	app.get("/api/beers", function(req, res) {
		db.Beer.findAll({}).then(function(dbBeer) {
			res.json(dbBeer);
		});
	});

	app.get("/api/beersId/:id", function(req, res) {
		db.Beer.findAll({
			where: {
				id: req.params.id
			}
		}).then(function(dbBeer) {
			res.json(dbBeer);
		});
	});

	app.get("/api/beersName/:Beer_Name", function(req, res) {
		console.log("BEER NAME!!!!!!!!!!!!!!");
		console.log(req.params.Beer_Name);
		db.Beer.findAll({
			where: {
				Beer_Name: req.params.Beer_Name
			}
		}).then(function(dbBeer) {
			console.log(dbBeer);
			res.json(dbBeer);
		});
	});

	app.get("/api/beersBrewery/:Brewery", function(req, res) {
		db.Beer.findAll({
			where: {
				Brewery: req.params.Brewery
			}
		}).then(function(dbBeer) {
			res.json(dbBeer);
		});
	});

	app.get("/api/beersStyle/:Style", function(req, res) {
		db.Beer.findAll({
			where: {
				Style: req.params.Style
			}
		}).then(function(dbBeer) {
			res.json(dbBeer);
		});
	});

	// ==============================================
	// 			User Info Routes
	// ==============================================
	app.post("/api/posts/:userID", function(req, res) {
		var query = {};
		if (req.query.userID) {
			query.userID = req.query.userID;
		}

		db.FullUserBeerReview.create({
			where: {
				Beer_Name: beerName,
				Brewery: brewery,
				Aroma_Malt: aromaMaltValues,
				Aroma_Hops: aromaHopsValues,
				Appearance_Clarity: clarityValues,
				Appearance_Color: beerColorValues,
				Flavor_Malt: flavorMaltValues,
				Flavor_Hops: flavorHopsValues,
				IBU: ibuValue,
				ABV: abvValue,
				Rating: rating,
				Comments: comments
			}
		});
	});

	// ==============================================
	// 			Add Auth Token to User ID --- Probably Not Necessary
	// ==============================================
	// 	app.put("/authtoken/:userId", function(req, res) {

	// 	//Set user id equal to a variable from the req.query.id;

	// 	db.Login.update(token, {
	// 		where: {
	// 			//where id = Id in that database;
	// 			id: req.params.id,
	// 			AuthToken: token
	// 		}
	// 	});
	// });

	// ==============================================
	// 			Login Route
	// ==============================================
	app.get("/login", function(req, res) {
		var username = req.query.username;
		var password = req.query.password;
		db.Login.findAll({
			where: {
				Username: username
			}
		}).then(function(loginCredentials) {
			if(loginCredentials[0]){
				if(password === loginCredentials[0].Password){
					var token = randToken.generate(16);
					var userId = loginCredentials[0].id;
					console.log("User Id " + userId);
					var putQuery = "authToken/" + userId;
					console.log(token);
					 
					// ========= Add authToken to user info in DB ========
					db.Login.update({
						AuthToken: token
					},
					{
						where: {
						//where id = Id in that database;
							id: userId
						}
					});
					res.cookie('authToken', token);
					res.json(loginCredentials);
				} else{
					res.send("Username or password incorrect.");
				}
			
			} else {
				res.send("Sorry there was an error logging in.");
			}
		});
	});

	// ==============================================
	// 			Sign Up Route
	// ==============================================
	app.post("/newuser", function(req, res) {
		console.log(req);
		var username = req.body.signUpUser;
		var email = req.body.signUpEmail;
		var password = req.body.signUpPass;

		console.log(username);
		console.log(email);
		console.log(password);

		db.Login.create({
			Username: username,
			Password: password,
			Email: email
		}).then(function(newUser){
			res.json(newUser);
		})
	});

	// ==============================================
	// 			Get Cookie
	// ==============================================
		app.get("/authMatch", function(req, res) {
		var userId = req.query.username;
		var userCookie = req.cookies.authToken;
		db.Login.findAll({
			where: {
				AuthToken: userCookie
			}
		}).then(function(result) {
			if(result[0] === undefined){
				res.redirect("/fake");
			}
			if(userCookie === result[0].dataValues.AuthToken){
				res.send(true);
			}else{
				console.log("triggering else statement");
				res.redirect("/fake");
			};
		});
	});


	// ==============================================
	// 			Get User Id
	// ==============================================
		app.get("/getid", function(req, res) {
		console.log("/getid called");
		var userCookie = req.cookies.authToken;
		db.Login.findAll({
			where: {
				AuthToken: userCookie
			}
		}).then(function(result) {
			var userId = result[0].dataValues.id;
			if(result[0] === undefined){
				res.redirect("/fake");
			}
			if(userCookie === result[0].dataValues.AuthToken){
				res.json({userId: userId});
			}else{
				console.log("triggering else statement");
				res.redirect("/fake");
			};
		});
	});
};














