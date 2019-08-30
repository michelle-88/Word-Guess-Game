// Create an array that contains all the possible words for the game
var wordChoices = ["vader", "skywalker", "lightsaber", "anakin", "yoda", "jedi", "sith", "stormtrooper", "chewbacca", "palpatine"];

// Create variables to keep track of scores, user guesses, current word, and dynamic text on index page
var wins = 0;
var guessesRemain = 10;
var userGuess = "";
var dashArray = [];
var letterGuessArray = [];
var currentWord;
var displayText = "";
var currentWordText;
var dashedWord = "";


// Create a function to randomly choose a word from the wordChoices array
function computerRandomChoice(){
    currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    console.log(currentWord);
};

computerRandomChoice();

// Creatae function to reset guesses remaining and array for letters already guessed
function resetScores(){
    guessesRemain = 10;
    letterGuessArray = [];
};

// Create loop to replace each letter in currentWord with a dash. Display dashed word in "Current Word" field on index page.
function createDashedWord(){
    for (let i = 0; i < currentWord.length; i++) {
        dashArray.push("_");
        dashedWord = dashArray.join(" ")
    }
currentWordText = dashedWord;
};

createDashedWord();


// Create function to display updated results on index page

function updateDisplay() {
    document.querySelector("#display-text").innerHTML = displayText;
    document.querySelector("#wins-text").innerHTML = wins;
    document.querySelector("#currentword-text").innerHTML = currentWordText;
    document.querySelector("#guessesremain-text").innerHTML = guessesRemain;
    document.querySelector("#letterguess-text").innerHTML = letterGuessArray;
};

updateDisplay();
    
// Create function that will run whenever the player presses a key
document.onkeyup = function(event){

    // Clear out contents of display-text element when player starts new game
    displayText = "";

    // Determine which key was pressed
    userGuess = event.key.toLowerCase();

    // Push pressed key value into letterGuessArray to display on index page
    letterGuessArray.push(userGuess);

    // Write logic to determine if key pressed by player matches any letter in currentWord
     for(var i = 0; i < currentWord.length; i++){
        if(userGuess === currentWord.charAt(i)){
        // if the pressed key matches, display letter in Current Word
        dashArray[i] = userGuess
        dashedWord = dashArray.join(" ")
        currentWordText = dashedWord;

            console.log("you guessed right!");
        };
    };

    // if the userGuess does not match any letter in currentWord, decrement number of guesses remaining
    if(dashedWord.indexOf(userGuess) == -1){
        guessesRemain--;
    };
    
    // if player runs out of guesses, game restarts
    if (guessesRemain === 0){
        resetScores();
        computerRandomChoice();
        dashedWord = "";
        dashArray = [];
        createDashedWord();
        displayText = "Try Again!";
    };

    // if player guesses all letters in currentWord, increase wins and restart game
        if(dashedWord.indexOf("_") == -1){
            wins++;
            displayText = "You win! The force is strong with you!";
            resetScores();
            computerRandomChoice();
            dashedWord = "";
            dashArray = [];
            createDashedWord();
        }

    updateDisplay();
};

    // If player wins, display picture of Star Wars character/word, display guessed word in heading, & increment Wins score



