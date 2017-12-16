// Grab all selected values from the selected question field and convert them to a string
function loopReviewForm(questionFieldAnswers){
	var newArray = [];
	var newString = "";
	var currentField = $("input[name='" + questionFieldAnswers + "']:checked");

	currentField.each(function(){
		newArray.push($(this).val());
	});

	for(i = 0; i < newArray.length; i ++){
		newString = newString + " " + newArray[i];
	}	
	return newString;
}



var fullUserBeerReview;

// =================================================
// 			Click Review Submit Button
// =================================================
$("#reviewSubmitButton").on("click", function(){
	event.preventDefault();
	var beerName = $("#allBeerList").val();
	var beerNameIndex = allBeerNames.indexOf(beerName);
	var brewery = correspondingBrewery[beerNameIndex];
	var aromaMaltValues = loopReviewForm("aromaMalt");
	var aromaHopsValues = loopReviewForm("aromaHops");
	var clarityValues = loopReviewForm("clarity");
	var beerColorValues = loopReviewForm("beerColor");
	var flavorMaltValues = loopReviewForm("flavorMalt");
	var flavorHopsValues = loopReviewForm("flavorHops");
	var rating = $("#rating").val();
	var comments = $("#comments").val();
	var ibuValue = $("#ibuBonusPoints").val();
	var abvValue = $("#abvBonusPoints").val();


	
	//!!!!!!!!! Add user Id !!!!!!!!!!!!!!!!!!!!
	fullUserBeerReview = {
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
	};
	console.log(JSON.stringify(fullUserBeerReview, null, 2));

	
});




