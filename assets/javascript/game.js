
	var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var wins = 0;
	var losses = 0;
	var guessesLeft = 10;
	var wrongGuesses = [];

	document.onkeyup = function(event) {

		var userGuess = event.key;
		function computerGuess(computerChoices) {
			 return computerChoices[Math.floor(Math.random() * computerChoices.length)];
		}

		var addGuess = function() {
		wrongGuesses.push(
			userGuess
			)
		};

		var resetGame = function() {
				guessesLeft = 10;
				wrongGuesses = [];
				computerGuess();
		};

		if (userGuess === computerGuess) {
			alert("What Thats Impossible! Well The Odds Are 1 in 26")
			wins++;
			resetGame();
		} else {
			guessesLeft--;
			addGuess();
			if (guessesLeft === 0) {
				alert("YOU SUCK. MY MIND IS SUPERIOR.");
				losses++;
				resetGame();
			}
		};

		var html =
          "<p>W: " + wins + "</p>" +
          "<p>L: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
          "<p>Incorrect Guesses:: " + wrongGuesses + "</p>";

        document.querySelector("#game").innerHTML = html;

	};
