let startGame = prompt('This is a game of rock/paper/scissors of 5 rounds!.Type any key you like to start. ENJOY');
let playerScore=0;
let computerScore=0;
let gameTie=0;
const cOptions = ["rock", "paper", "scissors"];



const getComputerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function playAround() {
  let userChoice = "";
  let checker = "";
  do {
      userChoice = prompt(`Enter your choice: Rock, Paper, Scissors. ${checker}`, "");
      if(userChoice) {
          userChoice = userChoice.trim();
          userChoice = userChoice.toLowerCase();
      }
      checker = cOptions.indexOf(userChoice)<0 ? "Please enter a valid option" : "";
  } while(cOptions.indexOf(userChoice)<0);
  return userChoice;
}



const determineWinner = (pChoice, cChoice) => {
  
  if (pChoice === cChoice) {
    gameTie+=1;
    return 'It is a Tie!';
  }
  if (pChoice === 'rock') {
    if (cChoice === 'paper') {
      computerScore++;
      return "Sorry, Computer Won!";
    }
    else {
      playerScore++;
      return "Congratulations You Won!";
    }
  }
  if (pChoice === 'paper') {
    if (cChoice == 'scissors') {
      computerScore++;
      return 'Sorry, Computer Won!';
    } else {
      playerScore++;
      return 'Congratulations You Won!'
    }
  }
  
  if (pChoice === 'scissors') {
    if (cChoice === 'rock') {
      computerScore++;
      return 'Sorry, Computer Won!';
    } else {
      playerScore++;
      return "Congratulations, you Won!";
    }
  }
  if (pChoice === 'paper') {
    if (cChoice === 'scissors') {
      computerScore++;
      return 'Sorry, Computer Won!';
    } else {
      playerScore++;
      return 'Congratulations, you Won';
    }
  }
  if (pChoice === 'scissors') {
    if (cChoice === 'rock') {
      computerScore++;
      return 'Sorry, Computer Won!';
    } else {
      playerScore++;
      return "Congratulations, you Won!";
    }
  }
}

  const playGame = () => {
  for (let i = 0; i < 5; i++) {
  let pChoice = playAround('rock' || 'paper' || 'scissors');
  let cChoice = getComputerPlay();
  console.log(determineWinner(pChoice, cChoice));
  console.log("Computer:"+computerScore+' vs '+'Player:'+playerScore+' Tie Games: '+gameTie);

  }
}

playGame();















    