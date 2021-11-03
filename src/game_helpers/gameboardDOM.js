const newPlayerDOM = (() => {
  const playerGameBoard = document.querySelector(".player-board");

  for (let i = 0; i < 100; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("tile");
    newSquare.classList.add("p-square");
    playerGameBoard.appendChild(newSquare);
  }
})();

const newComputerDOM = (() => {
  const compGameBoard = document.querySelector(".computer-board");

  for (let i = 0; i < 100; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("tile");
    newSquare.classList.add("c-square");
    compGameBoard.appendChild(newSquare);
  }
})();

export { newPlayerDOM, newComputerDOM };
