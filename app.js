let playerScore = 0;
let computerScore = 0;

const h4 = document.createElement('h4');
const span = document.createElement('span');
const p = document.createElement('p');
const h5 = document.createElement('h5')

const div = document.querySelector('.result');
const rockButton = document.querySelector(`input[selection = 'Rock']`);
const paperButton = document.querySelector(`input[selection = 'Paper']`);
const scissorButton = document.querySelector(`input[selection = 'Scissor']`);
const body = document.querySelector('body');
const startButton = document.querySelector('.start');
const quitButton = document.querySelector('.quit');

h4.classList.add('h4');
h5.classList.add('h5');

rockButton.disabled = true;
paperButton.disabled = true;
scissorButton.disabled = true;

rockButton.classList.remove('transform');
paperButton.classList.remove('transform');
scissorButton.classList.remove('transform');


const getComputerChoice = () => {
    const arr = ['Rock', 'Paper', 'Scissor'];
    const randomElementArr = arr[Math.floor(Math.random() * 3)];
    return randomElementArr;
}

const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection) {
        return 'It is a tie!'
    }
    else if (playerSelection === 'Rock') {
        return (computerSelection === 'Scissor') ? 'You win! Rock beats Scissor.' : 'You lose! Computer thrown Paper.'
    }
    else if (playerSelection === 'Paper') {
        return (computerSelection === 'Rock') ? 'You win! Paper beats Rock.' : 'You lose! Computer thrown Scissor.'
    }
    else if (playerSelection === 'Scissor') {
        return (computerSelection === 'Paper') ? 'You win! Scissor beats Paper.' : 'You lose! Computer thrown Rock.'
    }

}

const Rock = function () {
    const result = (playRound('Rock', getComputerChoice()));

    if (result === 'It is a tie!') {
        span.textContent = `It's a tie!`;
        p.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
        h5.textContent = `You[ Rock ] - Computer[ Rock ]`;
        h4.appendChild(span);
        div.appendChild(h5);
        div.appendChild(h4);
        div.appendChild(p);

    }
    else if (result === 'You win! Rock beats Scissor.') {
        playerScore++
        h5.textContent = `You[ Rock ] - Computer[ Scissor ]`;
        span.textContent = `You win! Golem used Iron Defense. It's super effective!`;
        p.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`
        h4.appendChild(span);
        div.appendChild(h5);
        div.appendChild(h4);
        div.appendChild(p);
    }
    else if (result === 'You lose! Computer thrown Paper.') {
        computerScore++;
        h5.textContent = `You[ Rock ] - Computer[ Paper ]`;
        span.textContent = 'You lose! Kartana used protect!';
        p.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
        h4.appendChild(span);
        div.appendChild(h5);
        div.appendChild(h4);
        div.appendChild(p);
    }

    if (playerScore === 5) {
        h5.textContent = `Player wins! Congrats!`;
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
        rockButton.classList.remove('transform');
        paperButton.classList.remove('transform');
        scissorButton.classList.remove('transform');
    }
    else if (computerScore === 5) {
        h5.textContent = `Computer wins! Try again?`;
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
        rockButton.classList.remove('transform');
        paperButton.classList.remove('transform');
        scissorButton.classList.remove('transform');
    }
}

const Paper = function () {
    const result = (playRound('Paper', getComputerChoice()));

    if (result === 'It is a tie!') {
        h5.textContent = `You[ Paper ] - Computer[ Paper ]`;
        span.textContent = `It's a tie!`;
        p.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`
        h4.appendChild(span);
        div.appendChild(h5);
        div.appendChild(h4);
        div.appendChild(p);

    }
    else if (result === 'You win! Paper beats Rock.') {
        playerScore++
        h5.textContent = `You[ Paper ] - Computer[ Rock ]`;
        span.textContent = `You win! Kartana used Sacred Sword! It's super effective!`;
        p.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`
        h4.appendChild(span);
        div.appendChild(h5);
        div.appendChild(h4);
        div.appendChild(p);
    }
    else if (result === 'You lose! Computer thrown Scissor.') {
        computerScore++
        h5.textContent = `You[ Paper ] - Computer[ Scissor ]`;
        span.textContent = 'You lose! Scissor cut Kartana!';
        p.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`
        h4.appendChild(span);
        div.appendChild(h5);
        div.appendChild(h4);
        div.appendChild(p);
    }

    if (playerScore === 5) {
        h5.textContent = `Player wins! Congrats!`;
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
        rockButton.classList.remove('transform');
        paperButton.classList.remove('transform');
        scissorButton.classList.remove('transform');

    }
    else if (computerScore === 5) {
        h5.textContent = `Computer wins! Try again?`;
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
        rockButton.classList.remove('transform');
        paperButton.classList.remove('transform');
        scissorButton.classList.remove('transform');
    }
}

const Scissor = function () {
    const result = (playRound('Scissor', getComputerChoice()));

    if (result === 'It is a tie!') {
        h5.textContent = `You[ Scissor ] - Computer[ Scissor ]`;
        span.textContent = `It's a tie!`;
        p.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`
        h4.appendChild(span);
        div.appendChild(h5);
        div.appendChild(h4);
        div.appendChild(p);
    }
    else if (result === 'You win! Scissor beats Paper.') {
        playerScore++;
        h5.textContent = `You[ Scissor ] - Computer[ Paper ]`;
        span.textContent = `You win! Scissor used X-Scissor. It's super effective!`;
        p.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`
        h4.appendChild(span);
        div.appendChild(h5);
        div.appendChild(h4);
        div.appendChild(p);
    }
    else if (result === 'You lose! Computer thrown Rock.') {
        computerScore++;
        h5.textContent = `You[ Scissor ] - Computer[ Rock ]`;
        span.textContent = 'You lose! Golem used protect!';
        p.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`
        h4.appendChild(span);
        div.appendChild(h5);
        div.appendChild(h4);
        div.appendChild(p);
    }

    if (playerScore === 5) {
        h5.textContent = `Player wins! Congrats!`;
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
        rockButton.classList.remove('transform');
        paperButton.classList.remove('transform');
        scissorButton.classList.remove('transform');

    }
    else if (computerScore === 5) {
        h5.textContent = `Computer wins! Try again?`;
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
        rockButton.classList.remove('transform');
        paperButton.classList.remove('transform');
        scissorButton.classList.remove('transform');
    }
}

const Start = function () {
    playerScore = 0;
    computerScore = 0;
    span.textContent = 'Scores are reset!';
    p.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`
    body.classList.add('change-background');
    rockButton.classList.add('transform');
    paperButton.classList.add('transform');
    scissorButton.classList.add('transform');
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorButton.disabled = false;
    h5.remove();
};


const Quit = function () {
    playerScore = 0;
    computerScore = 0;
    span.textContent = 'Game over!';
    p.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`
    rockButton.classList.remove('transform');
    paperButton.classList.remove('transform');
    scissorButton.classList.remove('transform');
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
    h5.remove();
};

rockButton.addEventListener('click', Rock);
paperButton.addEventListener('click', Paper);
scissorButton.addEventListener('click', Scissor);
startButton.addEventListener('click', Start);
quitButton.addEventListener('click', Quit);

