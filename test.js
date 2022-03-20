// Initialize var playerSelection to store user choice as a string 
let playerSelection; 

// Initialize var computerSelection to store computer choice as a string
let computerSelection;

// Create function computerPlay that stores a random action to the computerSelection variable
function computerPlay() {
    let randomNum = Math.floor(3 * Math.random());
    switch(randomNum) {
        case 0: return 'Rock';
            break;
        case 1: return 'Paper';
            break;
        case 2: return 'Scissors';
            break;
    }
}

// Create function playRound that plays a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        return undefined;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
		return true;
	} else {
		return false;
	}
}

// Create function game that plays 5 rounds of rock paper scissors and returns the final winner
function game() {
	let playerScore = 0;
	let computerScore = 0;
	let roundResult;

	for (let i = 0; i < 5; i++) {
		playerInput = prompt("What's your move?: ");
		playerInput = playerInput.toLowerCase();
		playerSelection = playerInput.substr(0,1).toUpperCase() + playerInput.substr(1, playerInput.length - 1);
		
		computerSelection = computerPlay();
		let winMsg = `You Win! ${playerSelection} beats ${computerSelection}`;
		let loseMsg = `You Lose! ${computerSelection} beats ${playerSelection}`;
		let tieMsg = `You Tied! Both of you chose ${playerSelection}!`;
		roundResult = playRound(playerSelection, computerSelection);
		if (roundResult == undefined) {
			console.log(tieMsg);
			console.log(`You've currently won ${playerScore} rounds.\nOpponent currently won ${computerScore} rounds.`);
		} else if (roundResult) {
			playerScore = playerScore + 1;
			console.log(winMsg);
			console.log(`You've currently won ${playerScore} rounds.\nOpponent currently won ${computerScore} rounds.`);
		} else {
			computerScore = computerScore + 1;
			console.log(loseMsg);
			console.log(`You've currently won ${playerScore} rounds.\nOpponent currently won ${computerScore} rounds.`);
		}

	}


	if(playerScore == computerScore) {
		console.log(`It's a tie! You both scored ${playerScore} points!`);
	} else if (playerScore > computerScore) {
		console.log("You've won the game!");
	} else {
		console.log("You lost! Better luck next time!");
	}
}

game();
