var db = require("../models");

module.exports = function(app) {

	app.get("/api/beers", function(req, res) {
		db.Beer.findAll({}).then(function(dbBeer) {
			res.json(dbBeer);
		});
	});

	app.get("/api/beers/:id", function(req, res) {
		db.Beer.findAll({
			where: {
				id: req.params.id
			}
		}).then(function(dbBeer) {
			res.json(dbBeer);
		});
	});

	app.get("/api/beers/:Beer_Name", function(req, res) {
		db.Beer.findAll({
			where: {
				Beer_Name: req.params.Beer_Name
			}
		}).then(function(dbBeer) {
			res.json(dbBeer);
		});
	});

	app.get("/api/beers/:Brewery", function(req, res) {
		db.Beer.findAll({
			where: {
				Brewery: req.params.Brewery
			}
		}).then(function(dbBeer) {
			res.json(dbBeer);
		});
	});

	app.get("/api/beers/:Style", function(req, res) {
		db.Beer.findAll({
			where: {
				Style: req.params.Style
			}
		}).then(function(dbBeer) {
			res.json(dbBeer);
		});
	});

	// ================================================
	// 		     COMPARE LOGIN CREDENTIALS
	// ================================================
	app.get("/login", function(req, res) {
			console.log("Req.Body");
			console.log(req.params);
		db.Login.findAll({
			where: {
				Username: req.body.loginCredentials
			}
		}).then(function(loginCredentials) {
			
			res.json(JSON.stringify(loginCredentials));
			//use conditionals to make sure password and username are equivalent
			//if equal, gen auth token and post it to said user and store it as a cookie
			//redirect to index.html
		});
	});


	// ================================================
	// 		     User Sign Up
	// ================================================
	app.post("/signup", function(req, res) {
			console.log(req.body.loginCredentials);
		db.Login.findAll({
			where: {
				Username: req.params.username
			}
		}).then(function(loginCredentials) {
			res.json(loginCredentials);
		});
	});

};