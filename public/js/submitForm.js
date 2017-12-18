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

function gradeAnswers(userInput, answerK){
	userInput = lowerCaseAndSplit(userInput);
	console.log("Line 19: userInput: " + userInput);
	answerK = lowerCaseAndSplit(answerK);
	console.log("Line 21: answerK: " + answerK)
	for(i = 0; i < userInput.length; i++){
		console.log
		if(answerK.indexOf(userInput[i]) > -1){
			userPoints = userPoints + 2;
			console.log("+2 Points!");
		}else if (answerK.indexOf(userInput[i]) <= -1){
			userPoints = userPoints -1;
			console.log("-1 Point :(");
		}
	}
};

function lowerCaseAndSplit(value){
	for(i = 0; i < value.length; i++){
		value[i] = value.toLowerCase();
	}
	value = value.trim().split(" ");
	return value;
};

function compareAnswers(userSubmission, answerKey){
	// Aroma_Malt ======================================
	console.log("Aroma Malt");
	console.log(userSubmission.Aroma_Malt);
	console.log("Answer");
	gradeAnswers(userSubmission.Aroma_Malt, answerKey.Aroma_Malt);


	// // Aroma_Hops ======================================
	// console.log("Aroma Hops");
	// console.log(userSubmission.Aroma_Hops.trim().split(" "));
	// console.log("Answer");
	// console.log(answerKey.Aroma_Hops.trim().split(" "));

	// // Appearance_Clarity ======================================
	// console.log("Appearance_Clarity");
	// console.log(userSubmission.Appearance_Clarity.trim().split(" "));
	// console.log("Answer");
	// console.log(answerKey.Appearance_Clarity.trim().split(" "));

	// // Appearance_Color ======================================
	// console.log("Appearance_Color");
	// console.log(userSubmission.Appearance_Color.trim().split(" "));
	// console.log("Answer");
	// console.log(answerKey.Appearance_Color.trim().split(" "));

	// // Flavor_Malt ======================================
	// console.log("Flavor_Malt");
	// console.log(userSubmission.Flavor_Malt.trim().split(" "));
	// console.log("Answer");
	// console.log(answerKey.Flavor_Malt.trim().split(" "));

	// // Flavor_Hops ======================================
	// console.log("Flavor_Hops");
	// console.log(userSubmission.Flavor_Hops.trim().split(" "));
	// console.log("Answer");
	// console.log(answerKey.Flavor_Hops.trim().split(" "));

	// // IBU ======================================
	// console.log("IBU");
	// console.log(userSubmission.IBU.trim().split(" "));
	// console.log("Answer");
	// console.log(answerKey.IBU.trim().split(" "));

	// // ABV ======================================
	// console.log("ABV");
	// console.log(userSubmission.ABV.trim().split(" "));
	// console.log("Answer");
	// console.log(answerKey.ABV.trim().split(" "));
			
			
};

// =================================================
// 			Global Variables
// =================================================
var fullUserBeerReview;
var userPoints = 0;

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
	var beerAnswer = {};

	var userId;
	$.get("/getid").then(function(response){
		userId = response.userId;
	
		fullUserBeerReview = {
			UserId: userId,
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
		var getBeerQuery = "/api/beersName/" + fullUserBeerReview.Beer_Name;

		$.get(getBeerQuery).then(function(getBeerResp){
			beerAnswer = getBeerResp[0];
			compareAnswers(fullUserBeerReview, beerAnswer);
		});
	});
	
});




