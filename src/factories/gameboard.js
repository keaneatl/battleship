import { shipFactory } from "./ship";

const gameBoardFactory = () => {
  const ships = [];
  const board = [
    { square: "1A" },
    { square: "1B" },
    { square: "1C" },
    { square: "1D" },
    { square: "1E" },
    { square: "1F" },
  ];

  const placeShip = (type, length, hb = [], coor) => {
    const createShip = shipFactory(type, length, hb);
    for (let x = 0; x < length; x++) {
      board[coor + x].ship = createShip;
    }
    ships.push(createShip);
  };

  const receiveAttack = (coor) => {
    const square = board[coor - 1];
    if (square.ship !== undefined) {
      for (let x = 0; x < square.ship.lngth; x++) {
        square.ship.hit(coor);
      }
      ships.forEach((ship) => {
        if (ship.name === square.ship.name) ship.hit(coor);
      });
      return "Hit!";
    }
    square.attacked = "Missed!";
    return "Missed!";
  };

  const isDefeated = () => {
    return ships.every((ship) => ship.isSunk());
  };
  return { board, placeShip, receiveAttack, ships, isDefeated };
};

export { gameBoardFactory };
