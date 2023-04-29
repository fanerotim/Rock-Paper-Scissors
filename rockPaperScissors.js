function rockPaperScissors() {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    let playerTurn = '';

    let recursiveAsyncReadLine = function () {
        readline.question('Pick a choice (Rock, Paper, Scissors): ', number => {

            if (playerTurn == "r" || playerTurn == "rock") {
                playerTurn = rock;
            } else if (playerTurn = "s" || playerTurn == "scissors") {
                playerTurn = scissors;
            } else if (playerTurn == "p" || playerTurn == "paper") {
                playerTurn = paper;
            } else {
                console.log("Invalid Input. Try again...");
            }

            let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
            let computerMove = '';

            switch (computerRandomNumber) {
                case 1:
                    computerMove = rock;
                    break;
                case 2:
                    computerMove = paper;
                    break;
                case 3:
                    computerMove = scissors;
                    break;
            }
            console.log(`The computer chooses ${computerMove}`)

            if ((playerTurn === rock && computerMove === scissors) || (playerTurn === paper && computerMove === rock) || (playerTurn === scissors && computerMove === paper)) {
                console.log("You win!");
            } else if ((playerTurn === rock && computerMove === paper) || (playerTurn === paper && computerMove === scissors) || (playerTurn === scissors && computerMove === rock)) {
                console.log("You lose!")
            } else if ((playerTurn === rock && computerMove === rock) || (playerTurn === paper && computerMove === paper) || (playerTurn === scissors && computerMove === scissors)) {
                console.log("The game was a draw!");
            }
        });
    }
    recursiveAsyncReadLine();
}

rockPaperScissors();


