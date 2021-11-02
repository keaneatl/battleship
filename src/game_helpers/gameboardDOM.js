const newPlayerDOM = (() => {
  const playerGameBoard = document.querySelector(".player-board");

  for (let i = 0; i < 100; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("tile");
    newSquare.id = `p-square ${i}`;
    newSquare.addEventListener("mouseenter", () => {
      newSquare.setAttribute("style", "background-color: black;");
    });
    newSquare.addEventListener("mouseleave", () => {
      newSquare.removeAttribute("style");
    });

    playerGameBoard.appendChild(newSquare);
  }
})();

const newComputerDOM = (() => {
  const compGameBoard = document.querySelector(".computer-board");

  for (let i = 0; i < 100; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("tile");
    newSquare.id = `c-square ${i}`;
    newSquare.addEventListener("mouseenter", () => {
      newSquare.setAttribute("style", "background-color: black;");
    });
    newSquare.addEventListener("mouseleave", () => {
      newSquare.removeAttribute("style");
    });

    compGameBoard.appendChild(newSquare);
  }
})();

export { newPlayerDOM, newComputerDOM };
