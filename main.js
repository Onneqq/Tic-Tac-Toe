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

let playerXBoxes = []; // stores arr of Ids player has chosen
let playerOBoxes = [];

for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener("click", function (event) {
        var thisBox = event.target;
        if (thisBox.className == "box" && playerXTurn == true) {
            playerXBoxes.push(i);
            thisBox.className = "x";
            playerXTurn = false;
        } else if (thisBox.className == "box" && playerXTurn == false) {
            playerOBoxes.push(i);
            thisBox.className = "o";
            playerXTurn = true;
        }
    });
}
// console.log(playerXBoxes);
// working - clicking box updates class between players

// win conditions
// straight lines: 123, 456, 789, 147, 258, 369
// diagonals 159, 357

var winOne = [0, 1, 2];
// playerXBoxes => ['one', 'two', 'three', 'seven', 'nine']
var winTwo = [3, 4, 5];
var winThree = [6, 7, 8];
var winFour = [0, 3, 6];
var winFive = [1, 4, 7];
var winSix = [2, 5, 8];
var winSeven = [0, 4, 8];
var winEight = [2, 4, 6];

var allWins = [
    winOne,
    winTwo,
    winThree,
    winFour,
    winFive,
    winSix,
    winSeven,
    winEight,
];

// allWins = [[0, 1, 2], [3, 4, 5]...]

// reset button will reset the player choice arr and the board - stores winner in variable
