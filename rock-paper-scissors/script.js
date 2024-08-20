
let outcomes = {
    'rock': {
        'rock':'tie',
        'paper':'lose',
        'scissors':'win'
    },
    'paper': {
        'rock':'win',
        'paper':'tie',
        'scissors':'lose'
    },

    'scissors': {
        'rock':'lose',
        'paper':'win',
        'scissors':'tie'
    }
}
let score = localStorage.getItem('score') || { 'wins': 0, 'losses': 0, 'ties': 0 };

updateGame();
//you <img src="assets/paper.png" alt="" class="choice-icon"> <img src="assets/rock.png" alt="" class="choice-icon"> computer

const resultElement = document.querySelector('.js-result');
const choiceElement = document.querySelector('.js-choice');
const scoreElement = document.querySelector('.js-score');
const resetElementButton = document.querySelector('.js-reset-button');
const autoElementButton = document.querySelector('.js-auto-play-button');



function updateGame() {
    document.querySelector('.js-score').innerHTML = `Wins:${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function playGame(playerChoice){
    let choice = Math.floor(Math.random()*3);
    let allChoices = ['rock','paper','scissors'];
    let computerChoice = allChoices[choice];

    switch (outcomes[playerChoice][computerChoice]){
        case 'win':
            score.wins += 1;
            resultElement.innerHTML = 'You Won !';
            break;
        case 'tie':
            score.ties += 1;
            resultElement.innerHTML = 'It\'s a tie !';
            break;
        case 'lose':
            score.losses += 1;
            resultElement.innerHTML = 'You lose..';
            break;
    }

    choiceElement.innerHTML = `you <img src="assets/${playerChoice}.png" alt="" class="choice-icon"> <img src="assets/${computerChoice}.png" alt="" class="choice-icon"> computer`;
}