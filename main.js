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

// Audio:
const yahoo = new Audio("Audio/sm64_mario_yahoo.wav");
yahoo.volume = 0.2;
const stomp = new Audio("Audio/sm64_stomp.wav");
stomp.volume = 0.2;
const soLongBowswer = new Audio("Audio/sm64_mario_so_long_bowser.wav");
soLongBowswer.volume = 0.3;
const gameOver = new Audio("Audio/sm64_mario_game_over.wav");
gameOver.volume = 0.3;
const music = new Audio("Audio/05 Super Mario 64 Main Theme.mp3");
music.volume = 0.2;
const marioDie = new Audio("Audio/mario-die.wav");
marioDie.volume = 0.3;
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
                yahoo.play();
                playerXTurn = false;
            } else if (thisBox.className == "box" && playerXTurn == false) {
                playerOBoxes.push(i);
                thisBox.className = "o";
                stomp.play();
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

var playerOneScore = 0;
var playerTwoScore = 0;
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var winMessage = document.querySelector("h2");

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
                player1.textContent = `Mario: ${playerOneScore}`;
                gameRunning = false; // cant click on boxs again until 'play again button selected'
                console.log("Player X Wins"); // *** update this to do something
                winMessage.innerText = "Mario Wins!!!!";
                soLongBowswer.play();
            } else if (
                playerXBoxes.length == 5 &&
                playerOBoxes.length == 4 &&
                !won
            ) {
                gameRunning = false;
                winMessage.innerText = "Draw!!!";
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
                player2.textContent = `Bowser: ${playerTwoScore}`;
                gameRunning = false;
                winMessage.innerText = "Bowser Wins!!!!";
                marioDie.play();
            } else if (
                playerXBoxes.length == 4 &&
                playerOBoxes.length == 5 &&
                !won
            ) {
                gameRunning = false;
                winMessage.innerText = "Draw!!!";
            }
        }
    }
}

// play agin
var playAgain = document.querySelector(".playAgain");

playAgain.addEventListener("click", function (event) {
    for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].className = "box";
    }
    gameRunning = true;
    playerXBoxes = [];
    playerOBoxes = [];
});

// reset button will reset the player choice arr and the board - stores winner in variable

var resetScores = document.querySelector(".resetScores");
resetScores.addEventListener("click", function (event) {
    for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].className = "box";
    }
    gameRunning = true;
    playerXBoxes = [];
    playerOBoxes = [];
    playerOneScore = 0;
    playerTwoScore = 0;
    player2.textContent = `Player 2: ${playerTwoScore}`;
    player1.textContent = `Player 1: ${playerOneScore}`;
    playerXTurn = true;
    gameOver.play();
}); // resets everything without reloading the page if user clicks Reset Scores

//Background music buttons

var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");

playButton.addEventListener("click", function (event) {
    music.play();
});
pauseButton.addEventListener("click", function (event) {
    music.pause();
});
