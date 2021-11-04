import { startGame } from "./initiator";

const drawDefaultShips = () => {
  const playerTiles = Array.from(document.querySelectorAll(".p-square"));
  const compTiles = Array.from(document.querySelectorAll(".c-square"));

  playerTiles.forEach((tile, i) => {
    // tile.addEventListener("click", () => {
    //   if (!startGame.computer.myTurn) return;
    //   startGame.playerBoard.receiveAttack(i);
    //   startGame.computer.myTurn = false;
    // });
    if (!tile.ship) return;
    tile.setAttribute(
      "style",
      "border: 1px solid #0278f7; background-color: #b6d7f9"
    );
  });

  compTiles.forEach((tile, i) => {
    tile.addEventListener("click", () => {
      if (!startGame.player.myTurn) return;
      const pAttack = startGame.compBoard.receiveAttack(i);
      startGame.player.myTurn = false;
      const cAttack = startGame.computer.compAttack(startGame.playerBoard);
      startGame.player.myTurn = true;
    });
    if (!tile.ship) return;
    tile.setAttribute(
      "style",
      "border: 1px solid #aa061f; background-color: #e89ba6"
    );
  });
};

export { drawDefaultShips };
