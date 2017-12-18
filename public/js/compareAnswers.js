// -get info for last beer updated by user
// -get answers for corresponding beer
// -write function to compare answers for each question field
// -keep a running total of points
// -update users new points to database


// -may need to declare global variables on the api-routes.json
// 	so that I can access the object returned from get calls 
// 	in this file since I can not export/import modules on the
// 	front end


// -require the database and require the api routes
// -call .find requests on the api-route variable and set the
// 	response equal to a new object
// -compare each key/value of the answer object to the user
// 	object
// -create variable for points
// -accumulate points based off of correct answers
// -post the points to user info table with ajax post method

// var currentBeerSubmission = fullUserBeerReview	;
// console.log(currentBeerSubmission);

// -refer to this block of code to compare answers
// var str = "The rain in SPAIN stays mainly in the plain"; 
// var res = str.match(/ain/g);
console.log("user input: " + fullUserBeerReview);