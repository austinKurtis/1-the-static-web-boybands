console.log("I hate boy bands");

let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = bands.length;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
let bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
let veggieElement = document.getElementById("vegetables");



// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  
  // Add the band names into the correct <div>

	currentBand += '<li>' + bands[loopTracker] + '</li>';
	console.log(currentBand);
 	bandElement.innerHTML = currentBand;
  
  // Add the veggie names into the correct <div>

	currentVeggie += '<li>' + vegetables[loopTracker] + '</li>';
	console.log(currentVeggie);
 	veggieElement.innerHTML = currentVeggie;

}
