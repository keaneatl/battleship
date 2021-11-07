import "./style.css";
import "./reset.css";
import { newPlayerDOM, newComputerDOM } from "./game_helpers/gameboardDOM";
import { initGame, start } from "./game_helpers/initiator";
import { deployShips } from "./game_helpers/ship-placer";

const gameController = (() => {
  const startBtn = document.querySelector(".start");
  const cBoardDOM = document.querySelector(".computer-board");
  cBoardDOM.setAttribute("style", "pointer-events: none; opacity: 0.4;");
  startBtn.addEventListener("click", start, { once: true });
})();
