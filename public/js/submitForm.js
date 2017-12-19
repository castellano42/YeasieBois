// Grab all selected values from the selected question field and convert them to a string
function loopReviewForm(questionFieldAnswers){
	var newArray = [];
	var newString = "";
	var currentField = $("input[name='" + questionFieldAnswers + "']:checked");

	// console.log(currentField);

	currentField.each(function(){
		newArray.push($(this).val());
	});
	
	return newArray;
}


function checkAnswer(a, b){
	b = b.split(",");
	for(i = 0; i < b.length; i++){
		b[i] = b[i].toLowerCase().trim();
	};
	// console.log(b);

	//compare answers for a and b with matching key names
	for(i = 0; i < a.length; i ++){

		if(b.indexOf(a[i]) > -1){
			userPoints = userPoints + 2;
			// console.log("+2 POINTS!")
		} else if (b.indexOf(a[i]) <= -1){
			userPoints = userPoints - 1;
			// console.log("-1 Point :(");
		}
	}
};


function gradeIBU(a, b){
	var userIBU = parseInt(a);
	var answerIBU = parseInt(b);
	var possiblePoints = 5;
	var difference = userIBU - answerIBU;

	if(difference < 0){
		difference = difference * -1;
	}

	var bonusPoints = possiblePoints - difference;

	if(bonusPoints < 0){
		bonusPoints = 0;
	}
	// console.log("Bonus Points: " + typeof bonusPoints);
	userPoints = userPoints + bonusPoints;
	console.log("You earned " + bonusPoints + " bonus points for IBU!");
};

function gradeABV(a, b){
	// console.log("a: " + a + " b: " + b);
	var userABV = parseFloat(a);
	var answerABV = parseFloat(b);
	var difference = userABV - answerABV;
	

	if(difference < -1){
		difference = difference * -1
	}

	if(difference === 0){
		userPoints = userPoints + 5;
		console.log("ABV correct!  5 BONUS POINTS!");
	} else if(0 < difference < 0.5){
		userPoints = userPoints + 3;
		console.log("ABV REALLY CLOSE! 3 BONUS POINTS!")
	} else if(0.5 < difference <= 1){
		userPoints = userPoints + 1;
		console.log("Meh, ABV was kinda close.  1 Bonus Point!");
	}


};


function compareAnswers(userSubmission, answerKey){
	// Aroma_Malt ======================================
	checkAnswer(userSubmission.Aroma_Malt, answerKey.Aroma_Malt);

	// // Aroma_Hops ======================================
	checkAnswer(userSubmission.Aroma_Hops, answerKey.Aroma_Hops);

	// // Appearance_Clarity ======================================
	checkAnswer(userSubmission.Appearance_Clarity, answerKey.Appearance_Clarity);

	// // Appearance_Color ======================================
	checkAnswer(userSubmission.Appearance_Color, answerKey.Appearance_Color);

	// // Flavor_Malt ======================================
	checkAnswer(userSubmission.Flavor_Malt, answerKey.Flavor_Malt);

	// // Flavor_Hops ======================================
	checkAnswer(userSubmission.Flavor_Hops, answerKey.Flavor_Hops);

	// // IBU ======================================
	gradeIBU(userSubmission.IBU, answerKey.IBU);

	// // ABV ======================================
	gradeABV(userSubmission.ABV, answerKey.ABV);	
						
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
		console.log(response);
		userId = response[0].id;
		var currentScore = parseInt(response[0].UserScore);

	
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
		// console.log(JSON.stringify(fullUserBeerReview, null, 2));
		
		var getBeerQuery = "/api/beersName/" + fullUserBeerReview.Beer_Name;

		$.get(getBeerQuery).then(function(getBeerResp){
			beerAnswer = getBeerResp[0];
			// console.log(JSON.stringify(beerAnswer, null, 2));
			compareAnswers(fullUserBeerReview, beerAnswer);
			console.log("YOU EARNED " + userPoints + " POINTS!");
			var quizPoints = userPoints;
			userPoints = userPoints + currentScore;
			var putQuery = "/updatescore/" + userPoints;
			alert("You earned " + quizPoints + " points!");
			alert("Your total is now " + userPoints + "!");
		 
		 	//===========================
			 $.ajax({
	      		url: putQuery,
	     		 method: "PUT"
	    	}).done(function(response){
	    		// window.location.reload();
	    	});
	    	//============================
		});

		
		

		});

	$("#formToReset").trigger("reset");


});
	




