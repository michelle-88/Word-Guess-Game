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

// Take Current Word and replace each letter with a dash. Display dashed word in "Current Word" field in html
var dashedWord = currentWord.replace(/\S/gi,"-");
currentWordText.textContent = dashedWord;
    

// Create function that will run whenever the player presses a key
document.onkeyup = function(event){

    // Determine which key was pressed
    var userGuess = event.key;

    // Push pressed key value into letterGuessArray
    letterGuessArray.push(userGuess.toUpperCase());

    // Display letterGuessArray in letterGuess span in HTML
    letterGuess.textContent = letterGuessArray;

    // Write logic to determine if key pressed by player matches any letter in Current Word
 
    


}



    // if the pressed key matches, display letter in Current Word
    // if the pressed key does not match, decrement number of guesses remaining and display the letter in Letters Already Guessed (need an array for this)
// Write logic to track keys already pressed and make them unselectable again (if letter is in Letters Already Guessed array, make them unresponsive?)
// Write logic to determine when player wins - player needs to press every key in Current Word before they run out of guesses
    // If player wins, display picture of Star Wars character/word, display guessed word in heading, & increment Wins score
    // If player wins, I will also need to reset Current Word, Guesses Remaining, & Letters Already Guessed
// Write logic to determine when player loses - when they run out of guesses before pressing every key in Current Word
    // If player loses, reset everything



