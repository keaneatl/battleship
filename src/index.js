import "./style.css";
import "./reset.css";
import { shipFactory } from "./factories/ship";
import { playerFactory } from "./factories/player";
import { gameBoardFactory } from "./factories/gameboard";
import { newPlayerDOM, newComputerDOM } from "./game_helpers/gameboardDOM";
import { startGame } from "./game_helpers/initiator";

const gameTracker = (() => {
  startGame.compTiles.forEach((tile) => {
    tile.addEventListener("click", () => {
      if (startGame.player.board.isDefeated()) {
        alert("You Lost!");
      } else if (startGame.computer.board.isDefeated()) {
        alert("You Win!");
      }
    });
  });
})();
