function game() {
let playerScore = 0
let computerScore = 0
let rounds = 0


function playGame() {
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');
    const playerChoices = [rock, paper, scissors];
    const computerChoices = ['rock', 'paper', 'scissors'];

    playerChoices.forEach(choice => {
        choice.addEventListener('click', function () {

            const round = document.querySelector('.roundText');
            rounds++;
            round.innerText = `Round: ${rounds}`;
            const randomNumber = Math.floor(Math.random() * 3)
            const computerChoice = computerChoices[randomNumber];

            winner(this.innerText, computerChoice)

            if (rounds == 10) {
                gameOver(playerChoices, round);
            };
        });
    });
};
function winner(player,computer) {
    const result = document.querySelector('.gameWinner');
    const playerCount = document.querySelector('.playerCount');
    const computerCount = document.querySelector('.computerCount');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
        result.textContent = 'Tie!'
    } else if (player == 'rock') {
        if (computer == 'paper') {
            result.textContent = 'Paper beats rock, computer wins!'
            computerScore++
            computerCount.textContent = computerScore
        } else {
            result.textContent = 'Rock beats scissors, player wins!'
            playerScore++;
            playerCount.textContent = playerScore
        }
    }
    else if (player == 'scissors') {
        if (computer == 'rock') {
            result.textContent = 'Rock beats scissors, computer wins!';
            computerScore++;
            computerCount.textContent = computerScore;
        } else {
            result.textContent = 'Scissors beats paper, player wins!';
            playerScore++;
            playerCount.textContent = playerScore;
        }
    }
    else if (player == 'paper') {
        if (computer == 'scissors') {
            result.textContent = 'Scissors beats paper, computer wins!'
            computerScore++;
            computerCount.textContent = computerScore;
        } else {
            result.textContent = 'Paper beats rock, player wins!'
        }
    }
}
function endGame(playerChoices, Rounds) {
    const winner = document.querySelector('.winner');
    const result = document.querySelector('.result');
    const reset = document.querySelector('.resetButton');
    
    playerChoices.forEach(choice => {
        choice.style.display = 'none';
    })

    winner.innerText = 'Game Over!!!'
    rounds.style.display = 'none';

    if (playerScore > computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You win!'
    } else if (playerScore < computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You lose'
    } else {
        result.style.fontSize = '2rem'
        result.innerText = 'Tie Game'
    }
    reset.addEventListener('click', () => {
        window.location.reload();
    })
}
playGame()
};

game();
