import { startGame } from "./initiator";

const drawDefaultShips = () => {
  const playerTiles = Array.from(document.querySelectorAll(".p-square"));
  const compTiles = Array.from(document.querySelectorAll(".c-square"));

  playerTiles.forEach((tile, i) => {
    if (!tile.ship) return;
    tile.setAttribute(
      "style",
      "border: 1px solid #0278f7; background-color: #b6d7f9"
    );
  });

  compTiles.forEach((tile, i) => {
    tile.addEventListener("click", () => {
      if (!startGame.player.myTurn) return;

      const pAttack = startGame.player.attackOpp(startGame.computer, i);
      startGame.player.myTurn = false;
      if (pAttack === "Hit!") {
        tile.setAttribute(
          "style",
          "border: 1px solid #aa061f; background-color: #e89ba6"
        );
      } else {
        tile.setAttribute("style", "background-color: black;");
      }

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
    });
  });
};

export { drawDefaultShips };
