window.onload = function () {
	console.log("JS linked!");

	var startingBlock1 = document.getElementById('block1');
	startingBlock1.setAttribute ("class", "dot1");

	var startingBlock2 = document.getElementById('block11');
	startingBlock2.setAttribute ("class", "dot2");
}

row = {
	x: 10
}

player1 = {
	x: 0
}

player2 = {
  	x: 0
}

var updateBoard = function() {
}

var printer = function() {
	console.log("werks");
}

var header2 = document.getElementById('dr');
console.log(header2);

header2.addEventListener("click", printer);



/*
document.addEventListener("keypress", checkKeyA);

function checkKeyA(keycode) {
	if (keycode === "65") {
		console.log("A has been pressed!");
		//oneMoves();
	}
}

function checkKeyL(i) {
	if (i.keycode == "76") {
		twoMoves();
	}
}

var oneMoves = function() {
	if (player1.x < 10) {
    	player1.x = player1.x + 1;
    }
	updateBoard();
}

var twoMoves = function() {


	updateBoard();
}

*/