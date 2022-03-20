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
	let winMsg = `You Win! ${playerSelection} beats ${computerSelection}`;
	let loseMsg = `You Lose! ${computerSelection} beats ${playerSelection}`;

	if (playerSelection == computerSelection) {
		return `You Tied! Both of you chose ${playerSelection}!`;
	} else if (playerSelection == "Rock") {
		return (computerSelection == "Scissors") ? winMsg : loseMsg;
	} else if (playerSelection == "Paper") {
		return (computerSelection == "Rock") ? winMsg : loseMsg; 
	} else if (playerSelection == "Scissors") {
		return (computerSelection == "Paper") ? winMsg : loseMsg; 
	};
}

// Create function game that plays 5 rounds of rock paper scissors and returns the final winner

function game() {
	let playerScore = 0;
	let computerScore = 0;
	let roundResult;
	for (let i = 0; i < 5; i++) {
		playerSelection = prompt("What's your move?: ");
		computerSelection = computerPlay();
		roundResult = playRound(playSelection, computerSelection);
			
	}

	return (playerScore > computerScore) ? "You've won the game!" : "You've lost! Better luck next time!";
}
