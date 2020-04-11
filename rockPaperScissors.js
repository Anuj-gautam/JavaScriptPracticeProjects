const getUserChoice = userInput => {
  userInput = userInput.toLowerCase() ; 
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput ;
  } else {
    console.log('Error !! Incorrect choice.');
  }
}

const getComputerChoice = () => {
  const num = Math.floor(Math.random() * 3) ;
  switch (num) {
    case 0 :
      return 'rock';
      break ;

    case 1 :
      return 'paper' ;
      break ;

    case 2 :
      return 'scissors' ;
      break ;
    
    default :
      console.log('something went wrong !') ; 
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice ){
    return 'The game is tie. Try Again.' ; 
  } 
  if (userChoice === 'bomb'){
    return'User won because it had a Super Power !' ;
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return 'Computer Won!!' ; 
    } else {
      return 'User won !' ; 
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'user won.' ;
    } else {
      return 'computer won.';
    }
  }

 if (userChoice == 'scissors' ) {
   if (computerChoice === 'paper' ){
     return 'User won.' ;
   } else {
     return 'computer won.';
   }
 } 
}


const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log(`user's choice : ${userChoice}`);
  console.log(`computer choice : ${computerChoice}`);
  console.log(`Result : ${determineWinner(userChoice, computerChoice)}`);
}

playGame();
