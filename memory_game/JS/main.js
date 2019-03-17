console.log("up and runing!")
/*
var cardOne="queen";
var cardTwo="queen";
var cardThree="king";
var cardFour="king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardFour);


alert('Hello, Friends.')
*/ 

var cards=["queen","queen","king","king"];
var cardsInplay=[];
var cardOne = cards[0];
cardsInplay.push(cardOne);
var cardTwo = cards[3];
cardsInplay.push(cardTwo);

if (cardsInplay.length == 2){
	console.log(cardsInplay.length);
	if (cardsInplay[0] == cardsInplay[1]){
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.")
	}
}

console.log("User flipped " + cardsInplay);