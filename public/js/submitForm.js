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

// =================================================
// 			Click Review Submit Button
// =================================================
$("#reviewSubmitButton").on("click", function(){
	event.preventDefault();
	var aromaMaltValues = loopReviewForm("aromaMalt");
	var aromaHopsValues = loopReviewForm("aromaHops");
	var clarityValues = loopReviewForm("clarity");
	var beerColorValues = loopReviewForm("beerColor");
	var flavorMaltValues = loopReviewForm("flavorMalt");
	var flavorHopsValues = loopReviewForm("flavorHops");
	var ibuValue = $("#ibuBonusPoints").val();
	var abvValue = $("#abvBonusPoints").val();

	
	// !!!!!!!!!!!! Need to add fields for beer name and brewery !!!!!!!!!
	var fullUserBeerReview = {
		aromaMalt: aromaMaltValues,
		aromaHops: aromaHopsValues,
		clarity: clarityValues,
		beerColor: beerColorValues,
		flavorMalt: flavorMaltValues,
		flavorHops: flavorHopsValues,
		ibu: ibuValue,
		abv: abvValue
	};
	console.log(JSON.stringify(fullUserBeerReview, null, 2));

	//CALL AJAX POST HERE
	

});


