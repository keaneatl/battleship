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
      for (let x = 0; x < square.ship.lngth; x++) {
        square.ship.hit(coor);
      }
      ships.forEach((ship) => {
        if (ship.name === square.ship.name) ship.hit(coor);
      });
      console.log("Hit!");
      return "Hit!";
    }
    square.attacked = "Missed!";
    console.log("Missed!");
    return "Missed!";
  };

  const isDefeated = () => {
    const checkAllShips = ships.every((ship) => ship.isSunk());
    return checkAllShips;
  };
  return { board, placeShip, receiveAttack, ships, isDefeated };
};

export { gameBoardFactory };
