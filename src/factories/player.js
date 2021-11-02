import { gameBoardFactory } from "./gameboard";

const playerFactory = (type, myTurn = false) => {
  const board = gameBoardFactory();
  const attacks = [];

  const compAttack = (target) => {
    let coor = Math.floor(Math.random() * 9);
    while (attacks.some((attempts) => attempts === coor)) {
      coor = Math.floor(Math.random() * 9); //set to 100 after test
    }

    target.board.receiveAttack(coor);
    attacks.push(coor);
    return coor;
  };

  const attackOpp = (target, coor) => {
    target.board.receiveAttack(coor);
    attacks.push(coor);
  };
  return { type, board, myTurn, attackOpp, compAttack };
};

export { playerFactory };