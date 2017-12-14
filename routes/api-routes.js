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

};