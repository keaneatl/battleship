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
      console.log(startGame.computer.board.isDefeated());
      //   if (startGame.playerBoard.isDefeated() === "defeat!") {
      //     alert("You Lost!");
      //   } else if (startGame.compBoard.isDefeated() === "defeat!") {
      //     alert("You Win!");
      //   }
    });
  });
})();
