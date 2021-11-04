import { drawDefaultShips } from "./shipsDOM";
import { playerFactory } from "../factories/player";
import { gameBoardFactory } from "../factories/gameboard";

const startGame = (() => {
  const player = playerFactory("player");
  const computer = playerFactory("comp");
  player.myTurn = true;

  let playerTiles = Array.from(document.querySelectorAll(".p-square"));
  let compTiles = Array.from(document.querySelectorAll(".c-square"));

  const playerBoard = gameBoardFactory(playerTiles);
  const compBoard = gameBoardFactory(compTiles);

  const playerCarrier = playerBoard.placeShip("carrier", 5, [1, 2, 3, 4, 5], 0);
  const playerBattleship = playerBoard.placeShip(
    "battleship",
    4,
    [1, 2, 3, 4],
    22
  );
  const playerDestroyer = playerBoard.placeShip("destroyer", 3, [1, 2, 3], 43);
  const playerSubmarine = playerBoard.placeShip("submarine", 3, [1, 2, 3], 57);
  const playerPatrol = playerBoard.placeShip("patrolboat", 2, [1, 2], 77);

  const compCarrier = compBoard.placeShip("carrier", 5, [1, 2, 3, 4, 5], 0);
  const compBattleship = compBoard.placeShip("battleship", 4, [1, 2, 3, 4], 22);
  const compDestroyer = compBoard.placeShip("destroyer", 3, [1, 2, 3], 43);
  const compSubmarine = compBoard.placeShip("submarine", 3, [1, 2, 3], 57);
  const compPatrol = compBoard.placeShip("patrolboat", 2, [1, 2], 77);

  drawDefaultShips();

  return { player, computer, playerBoard, compBoard };
})();

export { startGame };
