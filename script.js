let inputs = ["rock", "paper", "scissors"];
let users = document.getElementById("you");
let comp = document.getElementById("computer");
let res = document.getElementById("results");

let playerHand = document.querySelector(".player-hand");
let computerHand = document.querySelector(".computer-hand");

// default name
let playerName = "You";

function changeName() {
  let nameInput = document.getElementById("username").value.trim();
  if (nameInput !== "") {
    playerName = nameInput;

    // update the <h1>
    document.getElementById("h").textContent = "Welcome " + playerName + "!";

    // update the "You:" label to the new name
    users.textContent = playerName + ":";
  } else {
    alert("Please enter your name!");
  }
}

function games(player) {
  let computer = inputs[Math.floor(Math.random() * 3)];
  let resultText = "";

  // reset hands
  playerHand.textContent = "✊";
  computerHand.textContent = "✊";

  setTimeout(() => {
    playerHand.textContent =
      player === "rock" ? "✊" : player === "paper" ? "🖐️" : "✌️";
    computerHand.textContent =
      computer === "rock" ? "✊" : computer === "paper" ? "🖐️" : "✌️";

    if (player === computer) {
      resultText = "It's a tie!";
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      resultText = "You win! 🎉";
    } else {
      resultText = "You lose 😢";
    }

    // show choices
    users.textContent = `${playerName}: ${player}`;
    comp.textContent = `Computer: ${computer}`;
    res.textContent = `Result: ${resultText}`;
  }, 1000);
}










