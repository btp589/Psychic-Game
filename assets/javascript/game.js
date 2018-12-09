var wins = 0;
var losses = 0;
var guessesLeft = 9;
var currentGuesses = [];

// Computer picks a random letter from the alphabet
function randomLetter() {
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
                "j", "k", "l", "m", "n", "o", "p", "q", "r", 
                "s", "t", "u", "v", "w", "x", "y", "z"];

  var randLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

  return randLetter;
}

// Resets guessesLeft
function resetGuesses() {
    var guessesLeftDiv = document.getElementById('guessesLeft');
    guessesLeftDiv.textContent = 0;

    return guessesLeftDiv;
  }



// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
                    "j", "k", "l", "m", "n", "o", "p", "q", "r", 
                    "s", "t", "u", "v", "w", "x", "y", "z"];

    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();
    var computerGuess = randomLetter();
    console.log("Computer guesses: " + computerGuess);

    // Checks if user clicks on any keys that are not alpha, then throw an alert.
    if (alphabet.indexOf(userGuess) < 0){
        //console.log("---You've entered the wrong key! Only letters in the alphabet are allowed.---")
        return false;
    }

    // WIN condition and increments wins count
    if (userGuess == computerGuess) {
    wins++;

    console.log("You guessed: " + userGuess);
    console.log("Computer guessed: " + computerGuess);
    alert("You win 1 point!");

    var winsDiv = document.getElementById('wins'); //created new tiesDiv to hold ties in html
    winsDiv.textContent = wins; //updates tiesDiv with the current value for ties
    }


    // WRONG condition that decrements guessesLeft count; appends the letter that user guesses
    else if (userGuess != computerGuess) {
        guessesLeft--;
        if (guessesLeft > 0) {
            var currentGuessesDiv = document.getElementById('currentGuesses');
            currentGuessesDiv.textContent = currentGuesses;
            currentGuesses.push(userGuess);
            console.log(currentGuesses);

            //created new guessesLeftDiv to hold guesses in html
            var guessesLeftDiv = document.getElementById('guessesLeft'); 
            //updates guessesLeftDiv with the current value for ties
            guessesLeftDiv.textContent = guessesLeft;

        }
        // LOSE condition that increments losses count
        else {
            losses++;

            var lossesDiv = document.getElementById('losses'); //created new tiesDiv to hold ties in html
            lossesDiv.textContent = losses; //updates tiesDiv with the current value for ties
        }
    
    
        

    

    

        

    }

    

};