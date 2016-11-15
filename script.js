window.onload = function () {
	console.log("JS linked!");
//creates the two dots when page has loaded
	var block1 = document.getElementById('block1');
	block1.setAttribute ("class", "dot1");

	var block11 = document.getElementById('block11');
	block11.setAttribute ("class", "dot2");
}
//creating variables for the blocks
var block2 = document.getElementById('block2');
var block3 = document.getElementById('block3');
var block4 = document.getElementById('block4');
var block5 = document.getElementById('block5');
var block6 = document.getElementById('block6');
var block7 = document.getElementById('block7');
var block8 = document.getElementById('block8');
var block9 = document.getElementById('block9');
var block10 = document.getElementById('block10');

// counter
var currentSpot = 1;
var advanceSpot = function() {
	currentSpot += 1;
}
console.log(currentSpot);

//this baby works, the rest... not so much
var move1 = function() {
	block1.removeAttribute("class", "dot1");
	block2.setAttribute("class", "dot1");
}

var move2 = function() {
	block2.removeAttribute("class", "dot1");
	block3.setAttribute("class", "dot1");
}

var mover = function(currentSpot) {
	if (currentSpot === "1") {
		move1();
	}
	else if (currentSpot === "2") {
		move2();
	}
	else {
		console.log("idk man");
	}
	advanceSpot();
}

var header2 = document.getElementById('dr');
header2.addEventListener("click", move1);



console.log(currentSpot);

var printer = function() {
	console.log("werks");
}
/*
var move2 = function(currentSpot) {
	(block + currentSpot).removeAttribute("class", "dot1");
	(block + (currentSpot + 1)).setAttribute("class", "dot1");
	advanceSpot();
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

var oneMoves = function() {
	if (player1.x < 10) {
    	player1.x = player1.x + 1;
    }
	updateBoard();
}

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
*/