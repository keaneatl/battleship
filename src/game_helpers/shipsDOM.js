import { initGame } from "./initiator";

const attackComputer = (tile, i) => {
  if (initGame.player.myTurn);
  const pAttack = initGame.player.attackOpp(initGame.computer, i);
  const textbox = Array.from(document.querySelectorAll(".textbox"));
  textbox.forEach((box) => (box.textContent = pAttack));
  initGame.player.myTurn = false;
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
  const cAttack = initGame.computer.compAttack(initGame.player, i);
  if (playerTiles[cAttack].ship) {
    playerTiles[cAttack].setAttribute(
      "style",
      "border: 1px solid #aa061f; background-color: #e89ba6"
    );
  } else {
    playerTiles[cAttack].setAttribute("style", "background-color: black;");
  }
  initGame.player.myTurn = true;
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
};

export { drawShips, attackComputer, attackPlayer };
