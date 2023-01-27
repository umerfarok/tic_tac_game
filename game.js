let board = document.getElementById("board");
let currentPlayer = "X";

board.addEventListener("click", function(event) {
   
  let cell = event.target;
  if (cell.innerHTML === "") {
    checkForWinner()
    cell.innerHTML = currentPlayer;
    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  }
  
});
function resetGame() {
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
      cells[i].innerHTML = "";
    }
    currentPlayer = "X";
    const h1 =document.getElementById("winner-message");
    console.log(h1)
    h1.innerText = " "
  }
  let winnerMessage = document.createElement("h1");
  winnerMessage.id = "winner-message";
  document.body.appendChild(winnerMessage);
  function checkForWinner() {
    let cells = document.getElementsByTagName("td");
    let winner = "";
    // check rows
    for (let i = 0; i < 9; i += 3) {
      if (cells[i].innerHTML !== "" && cells[i].innerHTML === cells[i + 1].innerHTML && cells[i + 1].innerHTML === cells[i + 2].innerHTML) {
        winner = cells[i].innerHTML;
      }
    }
    // check columns
    for (let i = 0; i < 3; i++) {
      if (cells[i].innerHTML !== "" && cells[i].innerHTML === cells[i + 3].innerHTML && cells[i + 3].innerHTML === cells[i + 6].innerHTML) {
        winner = cells[i].innerHTML;
      }
    }
    // check diagonals
    if (cells[0].innerHTML !== "" && cells[0].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[8].innerHTML) {
      winner = cells[0].innerHTML;
    }
    if (cells[2].innerHTML !== "" && cells[2].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[6].innerHTML) {
      winner = cells[2].innerHTML;
    }
    if (winner !== "") {
      document.getElementById("winner-message").innerHTML = winner + " wins!";
    }
  }
      