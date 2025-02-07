let userScore = 0
let computerScore = 0
function computerInput() {
    const randomNumber = Math.random()
    if (randomNumber <= .33) {
        return 'rock'
    } else if (randomNumber <= .66 && randomNumber > .33) {
        return 'scissors'
    } else if (randomNumber > .66) {
        return 'paper'
    }
}
function playerInput() {
    let choice = prompt('Rock, Paper, or Scissors?')
    return choice.toLowerCase()
}
function playRound(player, computer) {
    if (player === computer) {
        console.log('TIE!!')
    } else if ((player === 'rock' && computer === 'paper') || (player === 'scissors' && computer === 'rock') || (player === 'paper' && computer === 'scissors')) {
        console.log('You Lose')
        computerScore++
    } else if ((player === 'rock' && computer === 'scissors') || (player === 'scissors' && computer === 'paper') || (player === 'paper' && computer === 'rock')) {
        console.log('You Win!!!!')
        userScore++
    }
}
    const user = playerInput().toString()
    const notUser = computerInput().toString()

    function playGame() {
    playRound(user, notUser)
}
playGame()
