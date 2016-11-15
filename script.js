window.onload = function () {
	console.log("JS linked!");

	var block1 = document.getElementById('block1');
	block1.setAttribute ("class", "dot1");

	var block11 = document.getElementById('block11');
	block11.setAttribute ("class", "dot2");
}

var move1 = function() {
	block1.removeAttribute("class", "dot1");
	block2.setAttribute("class", "dot1");
}

var header2 = document.getElementById('dr');
header2.addEventListener("click", move1);

var block2 = document.getElementById('block2');
var block3 = document.getElementById('block3');
var block4 = document.getElementById('block4');
var block5 = document.getElementById('block5');
var block6 = document.getElementById('block6');
var block7 = document.getElementById('block7');
var block8 = document.getElementById('block8');
var block9 = document.getElementById('block9');
var block10 = document.getElementById('block10');






var printer = function() {
	console.log("werks");
}
/*
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