// Create an array that contains all the possible words for the game
var wordChoices = [];

// Create variable to store number of player wins. This starts at 0.
var wins = 0;

// Create variables to store all the locations in the HTML where the textContent will be updated accordingly to player input.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var currentWord = document.getElementById("currentword-text");
var guessesRemain = document.getElementById("guessesremain-text");
var letterGuess = document.getElementById("letterguess-text");

