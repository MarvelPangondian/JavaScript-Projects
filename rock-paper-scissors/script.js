// Score and Outcomes Initialization
const outcomes = {
    'rock': { 'rock': 'tie', 'paper': 'lose', 'scissors': 'win' },
    'paper': { 'rock': 'win', 'paper': 'tie', 'scissors': 'lose' },
    'scissors': { 'rock': 'lose', 'paper': 'win', 'scissors': 'tie' }
};

let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
let autoPlaying = false;
let intervalId;

const resultElement = document.querySelector('.js-result');
const choiceElement = document.querySelector('.js-choice');
const scoreElement = document.querySelector('.js-score');
const resetElementButton = document.querySelector('.js-reset-button');
const autoElementButton = document.querySelector('.js-auto-play-button');


document.querySelector('.js-rock-button').addEventListener('click', () => playGame('rock', resultElement, choiceElement));
document.querySelector('.js-paper-button').addEventListener('click', () => playGame('paper', resultElement, choiceElement));
document.querySelector('.js-scissors-button').addEventListener('click', () => playGame('scissors', resultElement, choiceElement));
document.body.addEventListener('keydown', (event) => {
    console.log(event);
    if (event.key === 'a') {
        autoPlay();
    } else if (event.key === 'Backspace') {
        resetGame();
    }
});

resetElementButton.addEventListener('click', function () {
    resetGame();
});
autoElementButton.addEventListener('click', () => {
    autoPlay();
})
updateGame(scoreElement); // Initial game update

// Game Logic Functions

function resetGame() {
    score = { wins: 0, losses: 0, ties: 0 };
    updateGame(scoreElement);
}
function updateGame(scoreElement) {
    scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    localStorage.setItem('score', JSON.stringify(score));
}

function computerRandomMove() {
    const allChoices = ['rock', 'paper', 'scissors'];
    return allChoices[Math.floor(Math.random() * 3)];

}
function playGame(playerChoice, resultElement, choiceElement) {

    let computerChoice = computerRandomMove();
    switch (outcomes[playerChoice][computerChoice]) {
        case 'win':
            score.wins += 1;
            resultElement.innerHTML = 'You Won!';
            break;
        case 'tie':
            score.ties += 1;
            resultElement.innerHTML = 'It\'s a tie!';
            break;
        case 'lose':
            score.losses += 1;
            resultElement.innerHTML = 'You lose..';
            break;
    }

    choiceElement.innerHTML = `You <img src="assets/${playerChoice}.png" alt="${playerChoice}" class="choice-icon"> vs. <img src="assets/${computerChoice}.png" alt="${computerChoice}" class="choice-icon"> Computer`;
    updateGame(document.querySelector('.js-score'));
}

function autoPlay() {
    if (!autoPlaying) {
        autoElementButton.innerText = 'Stop Autoplay';
        intervalId = setInterval(() => {
            playGame(computerRandomMove(), resultElement, choiceElement);
        }, 1000);
        autoPlaying = true;
    } else {
        autoElementButton.innerText = 'Auto play';
        clearInterval(intervalId);
        autoPlaying = false;
    }
}
