// Create an array that contains all the possible words for the game
var wordChoices = [];

// Create variable to store number of player wins. This starts at 0.
var wins = 0;

// Create variables to store all the locations in the HTML where the textContent will be updated accordingly to player input.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var currentWord = document.getElementById("currentword-text");
var guessesRemain = document.getElementById("guessesremain-text");
var letterGuessArray = [];
var letterGuess = document.getElementById("letterguess-text");

// Create function that will run whenever the player presses a key
document.onkeyup = function(event){

    // Determine which key was pressed
    var userGuess = event.key;

    // Push pressed key value into letterGuessArray
    letterGuessArray.push(userGuess);

    // Display letterGuessArray in letterGuess span in HTML
    letterGuess.textContent = letterGuessArray;

}