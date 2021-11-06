import "./style.css";
import "./reset.css";
import { shipFactory } from "./factories/ship";
import { playerFactory } from "./factories/player";
import { gameBoardFactory } from "./factories/gameboard";
import { newPlayerDOM, newComputerDOM } from "./game_helpers/gameboardDOM";
import { startGame } from "./game_helpers/initiator";
import { attackComputer, attackPlayer } from "./game_helpers/shipsDOM";

// Add New Game Button
const gameTracker = (() => {
  const textbox = document.querySelector(".textbox");
  const pBoardDOM = document.querySelector(".player-board");
  const cBoardDOM = document.querySelector(".computer-board");

  startGame.compTiles.forEach((tile, i) => {
    tile.addEventListener("click", () => {
      if (startGame.player.board.isDefeated()) {
        pBoardDOM.setAttribute("style", "pointer-events: none; opacity: 0.4;");
        cBoardDOM.setAttribute("style", "pointer-events: none; opacity: 0.4;");
        textbox.textContent = "You Lose!";
      } else if (startGame.computer.board.isDefeated()) {
        pBoardDOM.setAttribute("style", "pointer-events: none; opacity: 0.4;");
        cBoardDOM.setAttribute("style", "pointer-events: none; opacity: 0.4;");
        textbox.textContent = "You Win!";
      }
    });
  });
})();
