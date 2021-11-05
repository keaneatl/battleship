import { drawDefaultShips } from "./shipsDOM";
import { playerFactory } from "../factories/player";
import { gameBoardFactory } from "../factories/gameboard";

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
    0
  );
  const compBattleship = computer.board.placeShip(
    "battleship",
    4,
    [1, 2, 3, 4],
    22
  );
  const compDestroyer = computer.board.placeShip("destroyer", 3, [1, 2, 3], 43);
  const compSubmarine = computer.board.placeShip("submarine", 3, [1, 2, 3], 57);
  const compPatrol = computer.board.placeShip("patrolboat", 2, [1, 2], 77);

  drawDefaultShips();

  return { player, computer, playerTiles, compTiles };
})();

export { startGame };
