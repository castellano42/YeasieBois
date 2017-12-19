var path = require("path");

module.exports = function(app) {
	app.get("/", function(req, res) {
		console.log("here")
		res.sendFile(path.join(__dirname, "../public/login.html"));
	});
	
	app.get("/BeerQuiz", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/BeerQuiz.html"));
	});

	app.get("/UserInfo", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/userPage.html"));
	});

};	