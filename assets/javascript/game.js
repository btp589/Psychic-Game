var wins = 0;
var losses = 0;
var guessesLeft = 0;
var currentGuesses = [];

// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
function randomLetter() {
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
                "j", "k", "l", "m", "n", "o", "p", "q", "r", 
                "s", "t", "u", "v", "w", "x", "y", "z"];

  var randLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(randLetter)
  //return randomletter;
};


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    if(validChoices.indexOf(userGuess) < 0){
        //alert("You've entered the wrong letter! Only r, p, s allowed.")
        return false;
    }

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //TIE condition and update ties count on DOM
    if (userGuess == computerGuess) {

    ties++;

    var tiesDiv = document.getElementById('ties'); //created new tiesDiv to hold ties in html
    tiesDiv.textContent = ties; //updates tiesDiv with the current value for ties
    }

    //WIN condition and update wins count on DOM
    else if ( (userGuess == "r" && computerGuess == "s") || 
            (userGuess == "s" && computerGuess == "p") || 
            (userGuess == "p" && computerGuess == "r") ) {

    wins++;

    var winsDiv = document.getElementById('wins'); //created new winsDiv to hold ties in html
    winsDiv.textContent = wins; //updates winsDiv with the current value for ties
    }

    //LOSE condition and update losses count on DOM
    else if ( (userGuess == "r" && computerGuess == "p") || 
            (userGuess == "s" && computerGuess == "r") || 
            (userGuess == "p" && computerGuess == "s") ) {
                
    losses++;

    var lossesDiv = document.getElementById('losses'); //created new lossesDiv to hold ties in html
    lossesDiv.textContent = losses; //updates lossesDiv with the current value for ties
    }

    
    // Alerts the key the user pressed (userGuess).
    console.log("User guess: " + userGuess);

    // Alerts the Computer's guess.
    console.log("Computer guess: " + computerGuess);

};