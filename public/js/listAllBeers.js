// -get all beer names from answers table
// -push beer names into an array to display on front end to user

var allBeerNames = [];
var correspondingBrewery = [];
var sel = document.getElementById('allBeerList');

$.get("/api/beers", function(data, status){
	// console.log(data[0].Beer_Name);

	for(i = 0; i < data.length; i ++){
		var option = document.createElement("option");
		option.innerHTML = data[i].Beer_Name.trim();
		option.value = data[i].Beer_Name.trim();
		sel.appendChild(option);
		allBeerNames.push(data[i].Beer_Name.trim())
		correspondingBrewery.push(data[i].Brewery.trim());
	}

});
