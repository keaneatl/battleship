const gameBoardFactory = () => {
  const board = {
    "1A": { ship: "none" },
    "1B": { ship: "none" },
    "1C": { ship: "none" },
    "1D": { ship: "none" },
    "1E": { ship: "none" },
    "1F": { ship: "none" },
  };

  const placeShip = (type, length, x, y) => {
    const newShip = shipFactory(type, length);
    board[`${x}+${y}`].ship = newShip;
  };

  const receiveAttack = (x, y) => {
    const coordinates = board[`${x}+${y}`];
    if (coordinates.ship !== "none") {
      const xyPairs = Object.keys(board);
      coordinates.attacked = "miss";
      coordinates.ship.hit(xyPairs.indexOf(coordinates));
      // position will be determined by looping through each key value pair and  looking for all instances
      // of tgat ship, and assigning the hitbox in that order
      return "Hit!";
    }

    return "Missed!";
  };

  const isDefeated = () => {
    const ships = Object.values(board);
    ships.every((value) => {
      value.ship.isSunk();
    });
  };
  return { board, placeShip, receiveAttack, isDefeated };
};

module.exports = gameBoardFactory;
