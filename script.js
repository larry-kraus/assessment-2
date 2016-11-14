window.onload = function () {
	console.log("JS linked!");
}

row = {
	x: 10
}

player1 = {
	x: 0
};

player2 = {
  	x: 0
};

var updateBoard = function() {
	
}

//event listener for 'a'
var oneMoves = function() {
	if (player1.x < 10) {
    	player1.x = player1.x + 1;
    }
	updateBoard();
}

var twoMoves = function() {


	updateBoard();
}

