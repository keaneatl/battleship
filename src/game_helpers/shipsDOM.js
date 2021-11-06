import { startGame } from "./initiator";

const attackComputer = (tile, i) => {
  if (startGame.player.myTurn);
  const pAttack = startGame.player.attackOpp(startGame.computer, i);
  const textbox = document.querySelector(".textbox");
  textbox.textContent = pAttack;
  startGame.player.myTurn = false;
  if (pAttack === "Hit!") {
    tile.setAttribute(
      "style",
      "border: 1px solid #aa061f; background-color: #e89ba6"
    );
  } else {
    tile.setAttribute("style", "background-color: black;");
  }
  return pAttack;
};

const attackPlayer = (i) => {
  const playerTiles = Array.from(document.querySelectorAll(".p-square"));
  const cAttack = startGame.computer.compAttack(startGame.player, i);
  if (playerTiles[cAttack].ship) {
    playerTiles[cAttack].setAttribute(
      "style",
      "border: 1px solid #aa061f; background-color: #e89ba6"
    );
  } else {
    playerTiles[cAttack].setAttribute("style", "background-color: black;");
  }
  startGame.player.myTurn = true;
  return cAttack;
};

const drawShips = () => {
  const playerTiles = Array.from(document.querySelectorAll(".p-square"));
  const compTiles = Array.from(document.querySelectorAll(".c-square"));

  playerTiles.forEach((tile) => {
    if (!tile.ship) return;
    tile.setAttribute(
      "style",
      "border: 1px solid #0278f7; background-color: #b6d7f9"
    );
  });

  compTiles.forEach((tile, i) => {
    tile.addEventListener("click", () => attackComputer(tile, i));
    tile.addEventListener("click", () => attackPlayer(i));
  });
};

export { drawShips, attackComputer, attackPlayer };
