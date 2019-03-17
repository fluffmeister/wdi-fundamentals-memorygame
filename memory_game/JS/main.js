/*
console.log("up and runing!")

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
	cardImage:"images/queen-of-hearts.png"
	},
	{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png"
	},
	{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png"
	},
	{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png"
	}
];
var cardsInPlay=[];
//check function if cards match
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
  alert("You found a match!");
	} 
	else {
  alert("Sorry, try again.");
	}
}

//flip card function with cardId parameters
var flipCard = function(){
	//prints card flip in the cards array display rank object
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute('src',cards[cardId].cardImage)

	//sends to check for match function by card size
	if (cardsInPlay.length ===2){
	checkForMatch();
	
	} 
}

//function for createBoard
var createBoard = function(){
	for (var i=0; i<cards.length; i++){
		/*creates img element for each card 
		and stores into variable cardElement*/
		var cardElement= document.createElement('img');
		//adding method to cardElement to add back of card
		cardElement.setAttribute('src' , "images/back.png");
		cardElement.setAttribute('data-id' , i);
		cardElement.addEventListener('click' , flipCard);
		//cardElement.appendChild('game-board');
		document.getElementById('game-board').appendChild(cardElement);
		}
}
createBoard();

/*
flipCard(0);
flipCard(2);
*/




