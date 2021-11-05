import { shipFactory } from "./ship";

const gameBoardFactory = (
  board = [
    { square: "1A" },
    { square: "1B" },
    { square: "1C" },
    { square: "1D" },
    { square: "1E" },
    { square: "1F" },
    { square: "1G" },
    { square: "1H" },
    { square: "1I" },
    { square: "1J" },
  ]
) => {
  const ships = [];

  const placeShip = (type, length, hb = [], coor) => {
    const createShip = shipFactory(type, length, hb);
    for (let x = 0; x < length; x++) {
      board[coor + x].ship = createShip;
    }
    ships.push(createShip);
  };

  const receiveAttack = (coor) => {
    const square = board[coor];
    if (square.ship !== undefined) {
      // The problem is that it passes the coordinate of the tile, and not
      // the coordinate of the part of that ship within the ship
      ships.forEach((ship) => {
        let shipLoc;
        if (ship.name === square.ship.name) {
          const shipLoc = board.find((tile, i) => {
            tile.ship.name === ship.name;
            return i;
          });
          ship.hit(coor - shipLoc);
        }
      });
      console.log("Hit!");
      return "Hit!";
    }
    square.attacked = "Missed!";
    console.log("Missed!");
    return "Missed!";
  };

  const isDefeated = () => {
    console.log(ships);
    return ships.every((ship) => ship.isSunk() === true);
    // return ships.every((ship) => ship.isSunk() === true);
  };
  return { board, placeShip, receiveAttack, ships, isDefeated };
};

export { gameBoardFactory };
