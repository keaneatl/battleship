import { drawShips } from "./shipsDOM";
import { playerFactory } from "../factories/player";
import { gameBoardFactory } from "../factories/gameboard";

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
const startGame = (() => {
  const playerTiles = Array.from(document.querySelectorAll(".p-square"));
  const compTiles = Array.from(document.querySelectorAll(".c-square"));
  const player = playerFactory("player", true, playerTiles);
  const computer = playerFactory("comp", false, compTiles);

  const playerCarrier = player.board.placeShip(
    "carrier",
    5,
    [1, 2, 3, 4, 5],
    0
  );
  const playerBattleship = player.board.placeShip(
    "battleship",
    4,
    [1, 2, 3, 4],
    22
  );
  const playerDestroyer = player.board.placeShip("destroyer", 3, [1, 2, 3], 43);
  const playerSubmarine = player.board.placeShip("submarine", 3, [1, 2, 3], 57);
  const playerPatrol = player.board.placeShip("patrolboat", 2, [1, 2], 77);

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

export { startGame };
