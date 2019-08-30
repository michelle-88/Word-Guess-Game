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


// Create a function to randomly choose a word from the wordChoices array
function computerRandomChoice(){
    currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    console.log(currentWord);
};

computerRandomChoice();

// Create loop to replace each letter in currentWord with a dash. Display dashed word in "Current Word" field on index page.

var dashedWord = "";
for (let i = 0; i < currentWord.length; i++) {
    dashArray.push("_");
    dashedWord = dashArray.join(" ")
}
currentWordText = dashedWord;

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

    // Determine which key was pressed
    var userGuess = event.key;

    // Push pressed key value into letterGuessArray
    letterGuessArray.push(userGuess);

    // Display letterGuessArray in letterGuess span in HTML
    letterGuess.textContent = letterGuessArray;

    // Write logic to determine if key pressed by player matches any letter in Current Word
 
    for(var i = 0; i < currentWord.length; i++){
        if(userGuess === currentWord.charAt(i)){
        // if the pressed key matches, display letter in Current Word
        dashArray[i] = userGuess
        dashedWord = dashArray.join(" ")
        currentWordText.textContent = dashedWord;

            console.log("you guessed right!");
        }

// if the pressed key does not match, decrement number of guesses remaining
        else {

            guessesRemain--;
        }
    }


}



    
    
// Write logic to track keys already pressed and make them unselectable again (if letter is in Letters Already Guessed array, make them unresponsive?)
// Write logic to determine when player wins - player needs to press every key in Current Word before they run out of guesses
    // If player wins, display picture of Star Wars character/word, display guessed word in heading, & increment Wins score
    // If player wins, I will also need to reset Current Word, Guesses Remaining, & Letters Already Guessed
// Write logic to determine when player loses - when they run out of guesses before pressing every key in Current Word
    // If player loses, reset everything



