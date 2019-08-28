// Create an array that contains all the possible words for the game
var wordChoices = ["Darth Vader", "Skywalker", "Lightsaber", "Droid", "Yoda", "Jedi", "Sith"];

// Create variable to store number of player wins. This starts at 0.
var wins = 0;

// Create variables to store all the locations in the HTML where the textContent will be updated accordingly to player input.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("currentword-text");
var guessesRemainText = document.getElementById("guessesremain-text");
var letterGuessArray = [];
var letterGuess = document.getElementById("letterguess-text");


// Randomly choose a word from the wordChoices array
var currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];

// Display randomly chosen word in "Current Word" field in html
currentWordText.textContent = currentWord;


// Create function that will run whenever the player presses a key
document.onkeyup = function(event){

    // Determine which key was pressed
    var userGuess = event.key;

    // Push pressed key value into letterGuessArray
    letterGuessArray.push(userGuess);

    // Display letterGuessArray in letterGuess span in HTML
    letterGuess.textContent = letterGuessArray;




}