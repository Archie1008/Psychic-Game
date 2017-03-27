//after guessed correct letter and after 9 bad guesses reset "entry" to blank

//make the only alphabet characters appear in "entry"

//don't forget to put <script> in separate js file

//make a computerGuess change everytime user makes a right guess

//put comments  
	

	var alphabet = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];

	var wins = 0;

	var losses = 0;

	var guessesLeft = 9;

	document.querySelector("#wins").innerHTML = "<p>Wins :" + wins + "</p>";

	document.querySelector("#losses").innerHTML = "<p>Losses :" + losses + "</p>";

	document.querySelector("#guessesLeft").innerHTML = "<p>Guesses Left :" + guessesLeft + "</p>";

	var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)].toLowerCase();
 	console.log(computerGuess);


	document.onkeyup = function(event) {
  		var userGuess = event.key.toLowerCase();
  		entry.innerHTML += userGuess;
 		
 		if (userGuess == computerGuess) {
 			wins++;
 			guessesLeft = 10;
 			document.querySelector("#wins").innerHTML = "<p>Wins :" + wins + "</p>"; 
 			document.querySelector("#guessesLeft").innerHTML = "<p>Guesses Left :" + guessesLeft + "</p>";
		} 			



 		if (guessesLeft >= 1) {
 			guessesLeft--;
 			document.querySelector("#guessesLeft").innerHTML = "<p>Guesses Left :" + guessesLeft + "</p>";

 		}

 		if (guessesLeft < 1) {
 			losses++;
 			guessesLeft = 9;
 			document.querySelector("#guessesLeft").innerHTML = "<p>Guesses Left :" + guessesLeft + "</p>";
 			document.querySelector("#losses").innerHTML = "<p>Losses :" + losses + "</p>";

 		}

	}