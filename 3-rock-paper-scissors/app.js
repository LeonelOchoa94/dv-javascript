const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");

const resultElement = document.getElementById("result");

const wonElement = document.getElementById("timesYouWon");
const lostElement = document.getElementById("timesYouLost");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", startGame));

function startGame(event) {
    // Obtener elección del jugador
    const button = event.currentTarget;
    const playerChoice = button.dataset.choice;

    // Obtener elección de la computadora
    const computerChoice = getComputerChoice();

    // Calcular ganador
    //const playerWins = isPlayerWinner(playerChoice, computerChoice);
    const winner = setWinner(playerChoice, computerChoice);

    // Mostrar resultado
    playerChoiceElement.setAttribute("src", `imgs/${playerChoice}.png`);
    computerChoiceElement.setAttribute("src", `imgs/${computerChoice}.png`);

    // const result = playerWins ? "GANASTE" : "PERDISTE";

    //   if (playerWins === true) {
    //     result.textContent = "GANASTE";
    //   } else if (!playerWins) {
    //     result.textContent = "PERDISTE";
    //   } else if (playerWins === "draw") {
    //     result.textContent = "EMPATASTE";
    //   }

    resultElement.textContent = winner;

    wonElement.innerHTML = "You won " + timesYouWon;
    lostElement.textContent = "You lost " + timesYouLost;
    endGame();
}

const possibleChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    // Obtener un valor aleatorio
    const computerChoice = Math.floor(Math.random() * 3);

    // Retornar elección
    return possibleChoices[computerChoice];
}

timesYouWon = 0;
timesYouLost = 0;

// Antes: isPlayerWinner
function setWinner(playerChoice, computerChoice) {
    console.log("playerChoice", playerChoice);
    console.log("computerChoice", computerChoice);
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        timesYouWon++;
        return "You won" + " with " + playerChoice + " against " + computerChoice;
    } else if (playerChoice === computerChoice) {
        return "You draw" + " with " + playerChoice + " against " + computerChoice;
    } else {
        timesYouLost++;
        return "You lost" + " with " + playerChoice + " against " + computerChoice;
    }
}

function MessageWon() {
    alert("You won")
}

function MessageLost() {
    alert("You lost")
}

var message;

function endGame() {
    if (timesYouWon === 3) {
        message = setTimeOut(MessageWon, 3000);
        timesYouLost = 0;
        timesYouWon = 0;
    } else if (timesYouLost === 3) {
        message = setTimeOut(MessageLost, 3000);
        timesYouLost = 0;
        timesYouWon = 0;
    }

}