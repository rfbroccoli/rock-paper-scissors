document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display");
  const scoreBoard = document.querySelector(".scoreBoard");
  const rockButton = document.querySelector(".rock");
  const paperButton = document.querySelector(".paper");
  const scissorsButton = document.querySelector(".scissors");
  const userChoiceText = document.querySelector(".userChoice");
  const computerChoiceText = document.querySelector(".computerChoice");

  let userScore = 0
  let computerScore = 0


  rockButton.addEventListener("click", function () {
    play("✊");
  });

  paperButton.addEventListener("click", function () {
    play("✋");
  });
  scissorsButton.addEventListener("click", function () {
    play("✌️");
  });

  // options[0] : ✊
  // options[1] : ✋
  // options[2] : ✌️
  const gameMoves = ["✊", "✋", "✌️"];
  function play(choice) {
    display.className = "display"
    const randomChoice =
      gameMoves[Math.floor(Math.random() * gameMoves.length)]
    const gameResult = gameLogic(choice, randomChoice)
    display.innerHTML = gameResult; 
    scoreBoard.innerHTML = `You: ${userScore} vs Computer: ${computerScore}`; 
    userChoiceText.innerHTML = choice;
    computerChoiceText.innerHTML = randomChoice;
  }

  function gameLogic(choice, randomChoice) {
    if (choice === randomChoice)
    {
      // draw
     display.classList.add("gray");
      return "draw"
    }
    
    if ((choice==="✊" && randomChoice === "✌️") ||
        (choice==="✋" && randomChoice === "✊") ||
        (choice==="✌️" && randomChoice === "✋")
    ) 
    {
      // win
      display.classList.add("green")
      userScore++
      return "win"
    }
    if ((choice==="✊" && randomChoice === "✋") ||
        (choice==="✋" && randomChoice === "✌️") ||
        (choice==="✌️" && randomChoice === "✊")
    )
    {
      // lose
      display.classList.add("red")
      computerScore++
      return "lose"
     }
    // return "win"
    
    // return "lose"
    
    // return "draw"
  }
});