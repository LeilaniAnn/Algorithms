function average(average){
	var total = 0;
	// Using forEach and create function for score

	// scores.forEach(function(score){

	// using a for loop
	for(var i= 0; i<scores.length; i++)
	total += scores[i]
	var avg = total/scores.length;
	return Math.round(avg);
	};

scores = [90,98,89,100,100,86,94]
console.log(average());
