const player = document.querySelector('.player');

player.addEventListener('click', game);

function game(e) {
  let result = '';
  playerChoice = e.target.dataset.choice;
  if (!playerChoice) return;
  const computerChoice = ranNum();
  if (playerChoice === computerChoice) result = 'Draw!';
  else if (playerChoice === 'rock' && computerChoice === 'paper')
    result = 'You lose!';
  else if (playerChoice === 'rock' && computerChoice === 'scissors')
    result = 'You win!';
  else if (playerChoice === 'paper' && computerChoice === 'rock')
    result = 'You win!';
  else if (playerChoice === 'paper' && computerChoice === 'scissors')
    result = 'You lose!';
  else if (playerChoice === 'scissors' && computerChoice === 'rock')
    result = 'You lose!';
  else if (playerChoice === 'scissors' && computerChoice === 'paper')
    result = 'You win!';

  console.log(
    `${result} Player choice: ${playerChoice}. Computer choice: ${computerChoice}.`
  );
}

function ranNum() {
  let computerChoice = '';
  const num = Math.floor(Math.random() * 3);
  if (num === 0) computerChoice = 'rock';
  else if (num === 1) computerChoice = 'paper';
  else if (num === 2) computerChoice = 'scissors';
  return computerChoice;
}
