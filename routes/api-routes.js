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

	app.post("/api/posts/:userID", function(req, res) {
		var query = {};
		if (req.query.userID) {
			query.userID = req.query.userID;
		}

		db.FullUserBeerReview.findOne({
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
	// 			Login Route
	// ==============================================
	app.get("/login", function(req, res) {
		console.log("Req Body");
		console.log(req.body);
		db.Login.findAll({
			where: {
				Username: req.body
			}
		}).then(function(loginCredentials) {
			res.json(loginCredentials);
		});
	});

};