window.onload = function () {
	console.log("JS linked!");
}

var startingBlock1 = document.getElementById('block1');
startingBlock1.setAttribute ("class", "dot1");

var startingBlock2 = document.getElementById('block11');
startingBlock2.setAttribute ("class", "dot2");


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

