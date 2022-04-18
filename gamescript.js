// Initialize playerSelection and computerSelection variables to store player and computer moves as a string 
let playerSelection; 

let computerSelection;

//Initialize player score and computer scores
let playerScore = 0;

let computerScore = 0;

//Initialize round number
let roundNumber = 1;

// Create display for player and computer scores

const gameDisplay = document.querySelector('#results');

const playerDisplay = document.querySelector('#human-score');
playerDisplay.textContent = playerScore;

const computerDisplay = document.querySelector('#computer-score');
computerDisplay.textContent = computerScore;

//Create display for result message and current standing

const roundDisplay = document.querySelector('#current-round');
roundDisplay.textContent = roundNumber;

const resultDisplay = document.querySelector('#result-msg');

const endDisplay = document.createElement('div');
gameDisplay.appendChild(endDisplay);

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
function playRound(playerAction, computerAction) {
    
    if (playerAction == computerAction) {
        return undefined;
    } else if (playerAction == "Rock" && computerAction == "Scissors" || playerAction == "Paper" && computerAction == "Rock" || playerAction == "Scissors" && computerAction == "Paper") {
		return true;
	} else {
		return false;
	}
}

// Create function game that plays 5 rounds of rock paper scissors and returns the final winner
function game(playerInput) {
	let roundResult;

	playerSelection = playerInput.substr(0,1).toUpperCase() + playerInput.substr(1, playerInput.length - 1);
	
	computerSelection = computerPlay();


	let winMsg = `You Win this round! ${playerSelection} beats ${computerSelection}`;
	let loseMsg = `You Lose this round! ${computerSelection} beats ${playerSelection}`;
	let tieMsg = `You Tied this round! Both of you chose ${playerSelection}!`;
	roundResult = playRound(playerSelection, computerSelection);

	if (roundResult == undefined) {
		resultDisplay.textContent = tieMsg;
	} else if (roundResult) {
		playerScore = playerScore + 1;
		playerDisplay.textContent = playerScore;
		resultDisplay.textContent = winMsg;
	} else {
		computerScore = computerScore + 1;
		computerDisplay.textContent = computerScore;
		resultDisplay.textContent = loseMsg;
	}
	roundNumber += 1;
	roundDisplay.textContent = roundNumber;
}

// Create end condition for game 

function endCondition(score1, score2) {
	if(score1 == score2) {
		endDisplay.textContent = 'It\'s a tie!';
	} else if (score1 > score2) {
		endDisplay.textContent = "You\'ve won the game!";
	} else {
		endDisplay.textContent = "You lost! Better luck next time!";
	}

}

//Create Reset button for game

function endRound() {
		endCondition(playerScore, computerScore);
		gameDisplay.appendChild(endDisplay);
		gameDisplay.appendChild(resetButton);
}

// Create reset function for game

const inputs = document.querySelector('#inputs');
const inputsParent = inputs.parentNode;

function resetGame() {
	roundNumber = 1;
	roundDisplay.textContent = roundNumber;
	playerScore = 0;
	playerDisplay.textContent = playerScore;
	computerScore = 0;
	computerDisplay.textContent = computerScore;
	resultDisplay.textContent = '';
	endDisplay.textContent = '';
	gameDisplay.removeChild(endDisplay);
	gameDisplay.removeChild(resetButton);
	inputsParent.appendChild(inputs);
}

const resetButton = document.createElement('button');
resetButton.textContent = 'Play Again!';
resetButton.setAttribute('style', 'height: 10px; background-color: blue;');
resetButton.addEventListener('click', () => resetGame());

// Create buttons to play the game
const inputList = document.querySelectorAll('button.gameplay');

// Gameplay loop
inputList.forEach((button) => {
	button.addEventListener('click', () =>{
		game(button.id);
		if(roundNumber == 6) {
			roundDisplay.textContent = 5;
			endRound();
			inputsParent.removeChild(inputs);
		}
	})
})
