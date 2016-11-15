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
	return currentSpot ++;
}


var move1 = function() {
	block1.removeAttribute("class", "dot1");
	block2.setAttribute("class", "dot1");
}

var move2 = function() {
	block2.removeAttribute("class", "dot1");
	block3.setAttribute("class", "dot1");
}

var move3 = function() {
	block3.removeAttribute("class", "dot1");
	block4.setAttribute("class", "dot1");
}



var moveTwo = function(header2) {
	console.log(currentSpot);
	var blockNum = "block" + currentSpot;
	var blockNum2 = "block" + (currentSpot + 1);
	console.log(blockNum);

	document.getElementById(blockNum).removeAttribute("class", "dot1");
	document.getElementById(blockNum2).setAttribute("class", "dot1");

	advanceSpot();
}

console.log(currentSpot);

var keycode;
var key;

document.addEventListener("keypress", checkKeyA);

function checkKeyA(key) {
	console.log(keycode);
	if (keycode === 97) {
		console.log("A has been pressed!");
		//oneMoves();
	}
}

var header2 = document.getElementById('dr');
header2.addEventListener("click", moveTwo);

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

var mover = function(currentSpot) {
	if (currentSpot === 1) {
		move1();
	}
	else if (currentSpot === 2) {
		move2();
	}
	else {
		console.log("idk man");
	}
	advanceSpot();
}

console.log("block"+currentSpot);

var moveTwo = function(currentSpot) {
	var blockNum = block + currentSpot;
	console.log(blockNum);

	blockNum[0].removeAttribute("class", "dot1");
	("block" + (currentSpot + 1)).setAttribute("class", "dot1");
	advanceSpot();
	console.log("block"+currentSpot);
}

*/