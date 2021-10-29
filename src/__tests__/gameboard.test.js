const gameBoardFactory = require("../factories/gameboard");

describe("gameboard methods", () => {
  let carrier;

  beforeEach(() => {
    carrier = gameBoardFactory().placeShip("carrier", "5", "A");
  });

  test("can place ships", () => {
    // Where board is an array of all the div squares within gameboard
    expect(gameBoardFactory().board[0].ship.name).toBe("carrier");
    expect(gameBoardFactory().board[1].ship.name).toBe("carrier");
    expect(gameBoardFactory().board[2].ship.name).toBe("carrier");
    expect(gameBoardFactory().board[3].ship.name).toBe("carrier");
    expect(gameBoardFactory().board[4].ship.name).toBe("carrier");
  });

  test("receives attacks properly", () => {
    expect(gameBoardFactory().receiveAtk("1", "F")).toBe("Missed!");
    expect(gameBoardFactory().board[5].attacked).toBe("Miss");
  });

  test("can determine if all ships have sunk", () => {
    expect(gameBoardFactory().isDefeated()).toBe(false);
  });
});
