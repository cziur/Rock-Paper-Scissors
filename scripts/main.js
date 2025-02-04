function getComputerChoice() {
    const randomNumber = Math.random()
    if (randomNumber <= .33) {
        return 'rock'
    } else if (randomNumber <= .66 && randomNumber > .33) {
        return 'scissors'
    } else {
        return 'paper'
    }
}
