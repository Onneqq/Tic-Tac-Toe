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
var gameRunning = true;

var allBoxes = document.querySelectorAll(".box");

let playerXBoxes = []; // stores arr of Ids player has chosen
let playerOBoxes = [];

for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener("click", function (event) {
        if (gameRunning) {
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
            checkWin();
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
// checking wins
// loop through playerXBoxes
// if playerXBoxes includes any wincondition (may need a 2d loop) => player wins
// includes(searchElement, fromIndex)
// duplicate for playerOBoxes - or add

playerOneScore = 0;
playerTwoScore = 0;

function checkWin() {
    // allows us to check win condition below in the event listener above
    if (playerXBoxes.length >= 3) {
        // min length for a win
        for (let i = 0; i < allWins.length; i++) {
            let won = true;
            for (let j = 0; j < allWins[i].length; j++) {
                if (!playerXBoxes.includes(allWins[i][j])) {
                    // check if playerchoices are missing any of the index's from the win conditions
                    won = false;
                }
            }
            if (won) {
                // if win condition is met, run the following:
                playerOneScore++;
                gameRunning = false; // cant click on boxs again until 'play again button selected'
                console.log("Player X Wins"); // *** update this to do something
            }
        }
    } // repeating for other player
    if (playerOBoxes.length >= 3) {
        for (let i = 0; i < allWins.length; i++) {
            let won = true;
            for (let j = 0; j < allWins[i].length; j++) {
                if (!playerOBoxes.includes(allWins[i][j])) {
                    won = false;
                }
            }
            if (won) {
                playerTwoScore++;
                gameRunning = false;
                console.log("Player O Wins");
            }
        }
    }
    if (playerXBoxes.length >= 5) {
        gameRunning = false;
        console.log("Draw");
    }
}

// play agin
var playAgain = document.querySelector(".playAgain");

playAgain.addEventListener("click", function (event) {
    for (let i = 0; i < allBoxes.length; i++) {
        console.log(allBoxes[i].className);
        allBoxes[i].className = "box";
    }
    gameRunning = true;
    playerXBoxes = [];
    playerOBoxes = [];
});

// reset button will reset the player choice arr and the board - stores winner in variable
