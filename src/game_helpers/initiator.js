import { drawShips } from "./shipsDOM";
import { playerFactory } from "../factories/player";
import { attackComputer, attackPlayer } from "./shipsDOM";

// WORK IN PROGRESS - Random Coordinates for Computer
// const newRandCoor = (shipLength) => {
//   // generate random coordinate for bot
//   const compTiles = Array.from(document.querySelectorAll(".c-square"));

//   let randInt = Math.floor(Math.random() * 94);
//   while ((randInt + 1) % 10 === 0) {
//     randInt = Math.floor(Math.random() * 94);
//   }

//   for (let x = 0; x <= shipLength; x++) {
//     if ((randInt + x) % 10 === 0) {
//       randInt -= x;
//     } else if ((randInt - x) % 10 === 0) {
//       randInt += x;
//     }
//   }
//   if (compTiles[randInt].ship || compTiles[randInt + 1].ship) {
//     randInt -= 1;
//   } else if (compTiles[randInt - 1].ship) {
//     randInt += 1;
//   }
//   return randInt;
// };
const initGame = ((i) => {
  const playerTiles = Array.from(document.querySelectorAll(".p-square"));
  const compTiles = Array.from(document.querySelectorAll(".c-square"));
  const player = playerFactory("player", true, playerTiles);
  const computer = playerFactory("comp", false, compTiles);

  const compCarrier = computer.board.placeShip(
    "carrier",
    5,
    [1, 2, 3, 4, 5],
    73
  );
  const compBattleship = computer.board.placeShip(
    "battleship",
    4,
    [1, 2, 3, 4],
    33
  );
  const compDestroyer = computer.board.placeShip("destroyer", 3, [1, 2, 3], 46);
  const compSubmarine = computer.board.placeShip("submarine", 3, [1, 2, 3], 95);
  const compPatrol = computer.board.placeShip("patrolboat", 2, [1, 2], 15);

  drawShips();

  return { player, computer, playerTiles, compTiles };
})();

const start = () => {
  const cBoardDOM = document.querySelector(".computer-board");
  const pBoardDOM = document.querySelector(".player-board");
  const textbox = document.querySelector(".textbox");
  const startBtn = document.querySelector(".start");

  cBoardDOM.removeAttribute("style");
  startBtn.textContent = "Restart Game";
  startBtn.addEventListener("click", () => window.location.reload());
  initGame.compTiles.forEach((tile, i) => {
    tile.addEventListener("click", () => attackComputer(tile, i), {
      once: true,
    });
    tile.addEventListener("click", () => attackPlayer(i));

    tile.addEventListener("click", () => {
      if (initGame.player.board.isDefeated()) {
        pBoardDOM.setAttribute("style", "pointer-events: none; opacity: 0.4;");
        cBoardDOM.setAttribute("style", "pointer-events: none; opacity: 0.4;");
        textbox.textContent = "You Lose!";
      } else if (initGame.computer.board.isDefeated()) {
        pBoardDOM.setAttribute("style", "pointer-events: none; opacity: 0.4;");
        cBoardDOM.setAttribute("style", "pointer-events: none; opacity: 0.4;");
        textbox.textContent = "You Win!";
      }
    });
  });
};

export { initGame, start };
