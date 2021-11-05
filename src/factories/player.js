import { gameBoardFactory } from "./gameboard";

const playerFactory = (type, myTurn = false, tiles) => {
  const board = gameBoardFactory(tiles);
  const attacks = [];

  const compAttack = (target) => {
    let coor = Math.floor(Math.random() * 99);
    while (attacks.some((attempts) => attempts === coor)) {
      coor = Math.floor(Math.random() * 99); //set to 100 after test
    }

    target.board.receiveAttack(coor);
    attacks.push(coor);
    return coor;
  };

  const attackOpp = (target, coor) => {
    const attack = target.board.receiveAttack(coor);
    attacks.push(coor);
    return attack;
  };
  return { type, board, myTurn, attackOpp, compAttack };
};

export { playerFactory };
