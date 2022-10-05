const Start = () => {

    let playerScore = 0;
    let computerScore = 0;
    let round = 0;


    const capitalize = (string) => {
        const a = string.slice(1);
        const b = a.toLowerCase();
        const c = string[0].toUpperCase();
        return c.concat(b);
    }

    const getComputerChoice = () => {
        const arr = ['Rock', 'Paper', 'Scissor'];
        const randomElementArr = arr[Math.floor(Math.random() * 3)];
        return randomElementArr;
    }


    const playRound = (playerSelection, computerSelection) => {

        const player = playerSelection.toLowerCase();
        const computer = computerSelection.toLowerCase();

        if (player === computer) {
            return `It is a tie! Computer also thrown ${capitalize(player)}. Scores are retain.`
        }
        else if (player === 'rock') {
            return (computer === 'scissor') ? 'You win! Rock beats Scissor.' : 'You lose! Computer thrown Paper.'
        }
        else if (player === 'paper') {
            return (computer === 'rock') ? 'You win! Paper beats Rock.' : 'You lose! Computer thrown Scissor.'
        }
        else if (player === 'scissor') {
            return (computer === 'paper') ? 'You win! Scissor beats Paper.' : 'You lose! Computer thrown Rock.'
        }
    }


    const game = () => {
        const playerSelection = prompt('Enter your play below:')
        const computerSelection = getComputerChoice();

        const result = (playRound(playerSelection, computerSelection));
        console.log(result)

        if (result === 'You win! Rock beats Scissor.' || result === 'You win! Paper beats Rock.' || result === 'You win! Scissor beats Paper.') {
            playerScore++
            console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
        }
        else if (result === 'You lose! Computer thrown Paper.' || result === 'You lose! Computer thrown Scissor.' || result === 'You lose! Computer thrown Rock.') {
            computerScore++
            console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
        }

    }


    const checkWinner = () => {
        round++;
        if (round === 5) {
            if (playerScore === computerScore) {
                console.log(`Tie game! Try again. Player Score: ${playerScore} | Computer Score: ${computerScore}`)
            } else if (playerScore > computerScore) {
                console.log(`Player wins! Player Score: ${playerScore} | Computer Score: ${computerScore} `)
            } else {
                console.log(`Computer wins! Player Score: ${playerScore} | Computer Score: ${computerScore} `)
            }
        }
    }

    for (let i = 1; i <= 5; i++) {
        game();
        checkWinner();
    }
    return 'Thank you for playing the game.'
}
