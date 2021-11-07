import { initGame } from "./initiator";
import { drawShips } from "./shipsDOM";

const deployShips = (() => {
  const playerTiles = Array.from(document.querySelectorAll(".p-square"));
  const playerBoard = document.querySelector(".player-board");
  const textbox = Array.from(document.querySelectorAll(".textbox"));

  const checkParams = (shipLength, index) => {
    let checkArea = true;
    if (index + shipLength > 97) {
      checkArea = false;
    }
    for (let x = 0; x < shipLength; x++) {
      if (
        playerTiles[index + x].ship ||
        // playerTiles[index - 1].hasAttribute("style") ||
        (index + x) % 10 === 0
      ) {
        checkArea = false;
      }
    }

    return checkArea;
  };

  const activateStartBtn = () => {
    const startBtn = document.querySelector(".start");
    startBtn.setAttribute("style", "display:flex;");
  };

  const placePatrol = () => {
    playerBoard.addEventListener(
      "click",
      (e) => {
        const elIndex = playerTiles.indexOf(e.target);
        if (checkParams(2, elIndex)) {
          initGame.player.board.placeShip("patrolboat", 2, [1, 2], elIndex);
          textbox.forEach((el) => (el.textContent = "Defeat your opponent!"));
          drawShips();
          activateStartBtn();
        }
      },
      { once: true }
    );
  };

  const placeSubmarine = () => {
    playerBoard.addEventListener(
      "click",
      (e) => {
        const elIndex = playerTiles.indexOf(e.target);
        if (checkParams(3, elIndex)) {
          initGame.player.board.placeShip("submarine", 3, [1, 2, 3], elIndex);
          textbox.forEach((el) => (el.textContent = "Place your Patrol Boat."));
          drawShips();
          placePatrol();
        }
      },
      { once: true }
    );
  };

  const placeDestroyer = () => {
    playerBoard.addEventListener(
      "click",
      (e) => {
        const elIndex = playerTiles.indexOf(e.target);
        if (checkParams(3, elIndex)) {
          initGame.player.board.placeShip("destroyer", 3, [1, 2, 3], elIndex);
          textbox.forEach((el) => (el.textContent = "Place your Submarine."));
          drawShips();
          placeSubmarine();
        }
      },
      { once: true }
    );
  };

  const placeBattleship = () => {
    playerBoard.addEventListener(
      "click",
      (e) => {
        const elIndex = playerTiles.indexOf(e.target);
        if (checkParams(4, elIndex)) {
          initGame.player.board.placeShip(
            "battleship",
            4,
            [1, 2, 3, 4],
            elIndex
          );
          textbox.forEach((el) => (el.textContent = "Place your Destroyer."));
          drawShips();
          placeDestroyer();
        }
      },
      { once: true }
    );
  };

  playerBoard.addEventListener(
    "click",
    (e) => {
      const elIndex = playerTiles.indexOf(e.target);
      if (checkParams(5, elIndex)) {
        initGame.player.board.placeShip("carrier", 5, [1, 2, 3, 4, 5], elIndex);
        textbox.forEach((el) => (el.textContent = "Place your Battleship."));
        drawShips();
        placeBattleship();
      }
    },
    { once: true }
  );
})();
export { deployShips };
