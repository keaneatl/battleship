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
      board[coor + x].shipPart = x;
    }
    ships.push(createShip);
  };

  const receiveAttack = (coor) => {
    const square = board[coor];
    if (square.ship !== undefined) {
      ships.forEach((ship) => {
        if (ship.name === square.ship.name) {
          ship.hit(square.shipPart);
        }
      });
      return "Hit!";
    }
    square.attacked = "Missed!";
    return "Missed!";
  };

  const isDefeated = () => {
    const checkShips = ships.every((ship) => ship.isSunk() === true);
    return checkShips;
    // return ships.every((ship) => ship.isSunk() === true);
  };
  return { board, placeShip, receiveAttack, ships, isDefeated };
};

export { gameBoardFactory };
