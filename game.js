let board = document.getElementById("board");
let currentPlayer = "X";

board.addEventListener("click", function(event) {
  let cell = event.target;
  if (cell.innerHTML === "") {
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
  }
  