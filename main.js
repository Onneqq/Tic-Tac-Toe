// Planning

// 1.) Potential Variables
//  - Player turn - toggle between class applied to dom object - create css classes (default, x, o)
//  - Win condition met - boolean
//  -

// 2.) Click on box => change class/background image - may need to use class/id to be able to check win condition
// DOM - event.target - check current class and apply class on that condition

// 3.) run prompt once won displaying winner, current tally and play again option or quit

// Extras:
// Keep track of player scores over multiple rounds (2 vars)
// time limit per turn
// add CSS animations etc
// add a theme - maybe mario or something
// look up how to add audio

// Clicking a Box

var playerXTurn = true;

var allBoxes = document.querySelectorAll(".box");

for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener("click", function (event) {
        var thisBox = event.target;
        if (thisBox.className == "box" && playerXTurn == true) {
            thisBox.className = "x";
            playerXTurn = false;
        } else if (thisBox.className == "box" && playerXTurn == false) {
            thisBox.className = "o";
            playerXTurn = true;
        }
    });
} // working - clicking box updates class between players

// win conditions
// straight lines: 123, 456, 789, 147, 258, 369
// diagonals 159, 357
// maybe a function?

var winOne = document.querySelectorAll("#one, #two, #three");
var winTwo = document.querySelectorAll("#four, #five, #six");
var winThree = document.querySelectorAll("#seven, #eight, #nine");
var winFour = document.querySelectorAll("#one, #four, #seven");
var winFive = document.querySelectorAll("#two, #five, #eight");
var winSix = document.querySelectorAll("#three, #six, #nine");
var winSeven = document.querySelectorAll("#one, #five, #nine");
var winEight = document.querySelectorAll("#three, #six, #nine");

var winCond = [
    winOne,
    winTwo,
    winThree,
    winFour,
    winFive,
    winSix,
    winSeven,
    winEight,
]; // winOne => NodeList(3)
// https://stackoverflow.com/questions/12330086/how-to-loop-through-selected-elements-with-document-queryselectorall

var winCondList = document.querySelectorAll(".box"); // list of nodes
var winCondArray = [...winCondList]; // turns node list into array
winCondArray.forEach((div) => {
    // do something with each div
});

// need to store player turns in arr to check vs loop above
