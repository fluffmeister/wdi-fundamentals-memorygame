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
//array for cards
var cards=["queen","queen","king","king"];
var cardsInPlay=[];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
  console.log("You found a match!");
	} 
	else {
  console.log("Sorry, try again.");
	}
}


var flipCard = function(cardId){
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);	
	
	checkForMatch();
	
}
flipCard(0);
flipCard(2);





