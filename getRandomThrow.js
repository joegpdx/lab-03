

export function getRandomThrow() {
    const randomNumber = Math.floor(Math.random() * 3);
    return getThrowNumber(randomNumber);
}

export function getThrowNumber(number) {
    if (0 === number) return 'rock';
    if (1 === number) return 'paper';
    if (2 === number) return 'scissors';
}

export function checkResult(player, computer) {
    if (computer === player) return 'draw';
    if (computer === 'scissors' && player === 'rock') return 'win';
    else if (computer === 'rock' && player === 'paper') return 'win';
    else if (computer === 'paper' && player === 'scissors') return 'win';
    else return 'lose';
}