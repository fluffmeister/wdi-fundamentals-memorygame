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
//array for cards setting up objects
var cards=[
	{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-heats.png"
	},
	{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png"
	},
	{
	rank:"king",
	suit:"hearts",
	cardImage:"image/king-hearts.png"
	},
	{
	rank:"king",
	suit:"diamonds",
	cardImage:"image/king-of-diamonds.png"
	}
];
var cardsInPlay=[];
//check function if cards match
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
  console.log("You found a match!");
	} 
	else {
  console.log("Sorry, try again.");
	}
}

//flip card function with cardId parameters
var flipCard = function(cardId){
	//prints card flip in the cards array display rank object
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	//sends to check for match function by card size
	if (cardsInPlay.length ===2){
	checkForMatch();
	
	} 
}



flipCard(0);
flipCard(2);





