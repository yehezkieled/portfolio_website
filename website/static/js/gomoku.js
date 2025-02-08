function startGame(vsComputer) {
  fetch("/gomoku/start", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ vs_computer: vsComputer }),
  })
    .then((response) => response.json())
    .then((data) => renderBoard(data.board, data.winner));
}

function makeMove(row, col) {
  fetch("/gomoku/move", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ row: row, col: col }),
  })
    .then((response) => response.json())
    .then((data) => renderBoard(data.board, data.winner));
}

function renderBoard(board, winner) {
  const boardDiv = document.getElementById("game-board");
  boardDiv.innerHTML = "";

  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      const cellButton = document.createElement("button");
      cellButton.textContent = cell || "";
      cellButton.disabled = !!cell || winner; // Disable if the cell is filled or there's a winner
      cellButton.onclick = () => makeMove(i, j);
      boardDiv.appendChild(cellButton);
    });
  });

  const statusElement = document.getElementById("status");
  statusElement.textContent = winner ? `🎉 Winner: ${winner}` : "";
}
