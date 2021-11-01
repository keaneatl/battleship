import { playerFactory } from "../factories/player";

describe("player methods", () => {
  let playerOne;
  let computer;

  beforeEach(() => {
    playerOne = playerFactory("human", true);
    computer = playerFactory("computer");
  });

  test("can take turns", () => {
    expect(computer.myTurn).toBe(false);
    playerOne.attackOpp(computer, 7);
    playerOne.myTurn = false; // outside the test, the event listener will invoke this
    computer.myTurn = true;
    expect(playerOne.myTurn).toBe(false);

    expect(computer.myTurn).toBe(true);
  });

  test("computer plays randomly properly", () => {
    const attack = computer.compAttack(playerOne);
    expect(computer.compAttack(playerOne)).not.toBe(attack);
  });
});
