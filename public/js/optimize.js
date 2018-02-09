 // Author- Tyler Proctor
// This file will iterate through every user submitted beer review
// 	and will find the average number of times each term appears in each field
// 	then add those values to a new object to post into a seperate table
// 	in order to create a self-optimizing API of beer reviews
// Speed of this function is not a concern since it is only intended to be run once a week at most and will not be triggered by users
function optimizeBeerTable(callback) {
	$.get("/api/userSubmissions", function(data, status){
		// console.log(data);

		// Iterate through each user submission
		for(i = 0; i < data.length; i ++) {
			// Collect all user submissions for the same beer
			var matchingBeers = [];
			//Store all terms where the average exceeds the threshhold in a new object
			var averageSubmission = {};

			// Set non-subjective values to the new object to be updated into the answer database
			averageSubmission.Beer_Name = data[i].Beer_Name;
			averageSubmission.Brewery = data[i].Brewery;
			averageSubmission.IBU = data[i].IBU;
			averageSubmission.ABV = data[i].ABV;
			// Store the name of the beer that is currently being checked
			var beerName = data[i].Beer_Name;

			matchingBeers.push(data[i]);

			// Loop through all submissions again to find every beer with a matching name
			for(k = 0; k < data.length; k++){
				if(k !== i && data[k].Beer_Name === beerName){
					matchingBeers.push(data[k]); 
				}
			}

			// Define place holders for each object value you need to analyze
			var Aroma_Malt = "";
			var Aroma_Hops = "";
			var Appearance_Clarity= "";
			var Appearance_Color = "";
			var Flavor_Malt = "";
			var Flavor_Hops  = "";
			// Keep a counter of how many submissions there are for a beer to find the average number of times a term appears in each field
			var submissionCounter = matchingBeers.length;
			
			// Loop through the matchingBeers array to find matching terms in each key
			for(t = 0; t < matchingBeers.length; t++){
				Aroma_Malt += matchingBeers[t].Aroma_Malt + ",";
				Aroma_Hops += matchingBeers[t].Aroma_Hops + ",";
				Appearance_Clarity += matchingBeers[t].Appearance_Clarity + ",";
				Appearance_Color += matchingBeers[t].Appearance_Color + ",";
				Flavor_Malt += matchingBeers[t].Flavor_Malt + ",";
				Flavor_Hops  += matchingBeers[t].Flavor_Hops + ",";
			}

			// Split each value to an array then add it to the averageSubmission object
			Aroma_Malt = Aroma_Malt.split(',');
			averageSubmission.Aroma_Malt = findCorrectTerms(Aroma_Malt, submissionCounter).join();

			Aroma_Hops = Aroma_Hops.split(',');
			averageSubmission.Aroma_Hops = findCorrectTerms(Aroma_Hops, submissionCounter).join();

			Appearance_Clarity = Appearance_Clarity.split(',');
			averageSubmission.Appearance_Clarity = findCorrectTerms(Appearance_Clarity, submissionCounter).join();

			Appearance_Color = Appearance_Color.split(',');
			averageSubmission.Appearance_Color = findCorrectTerms(Appearance_Color, submissionCounter).join();

			Flavor_Malt = Flavor_Malt.split(',');
			averageSubmission.Flavor_Malt = findCorrectTerms(Flavor_Malt, submissionCounter).join();

			Flavor_Hops  = Flavor_Hops.split(',');
			averageSubmission.Flavor_Hops = findCorrectTerms(Flavor_Hops, submissionCounter).join();

			console.log(i);
			// console.log(averageSubmission);
			// console.log(matchingBeers); 



			callback(beerName, averageSubmission);

		}
	}); 
}

// This function will loop through an array and count how many times each term appears
// it will then find the average rate that term appears in regard to all user submissions for the same beer
function findCorrectTerms(array, numberOfSubmissions) {
	// Collects terms that have an average rate of appearance above the threshhold
	var answerArray = [];

	// Trim all values in the array for accurate comparisons
	for(m = 0; m < array.length; m++){
		array[m] = array[m].trim();
	}

	//Create an array of matching terms from the array and count it
	//Find the average appearance of each term
	//If the average is over 50%, push it to an array of final answers
	for(j=0; j<array.length; j++) {

		var countArray = array.filter(function(value) {
			return value === array[j];
		});

		var count = countArray.length;
		var average = count / numberOfSubmissions;
		
		if(average >= 0.5 && answerArray.indexOf(array[j]) < 0 ){
			answerArray.push(array[j]);
		}

		if(answerArray[answerArray.length -1] === "") {
			answerArray.pop();
		}
	}

	return answerArray;
}

function updateNewAverage(beerName, averageSubmission) {
					//Check to see if beer already exists in AverageAnswers table with a get request
			$.get("/api/checkAverageSubmissions", {beerName: beerName}, function(data, status){
				//Conditional checks whether beer exists in the Average Submissions
				console.log(data);
				if(data.length < 1){
					//create beer in DB if it doesn't already exist
					$.post("/api/createAveragedSubmissions", averageSubmission, function(data, status){
						console.log("posted");
					});

				} else {
					//update beer in DB if it does already exist
					$.post("/api/updateAveragedSubmissions", averageSubmission, function(data, status){
						console.log("updated");
					});
				}
			});
};

optimizeBeerTable(updateNewAverage); 


