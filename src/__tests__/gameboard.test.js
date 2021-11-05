import { gameBoardFactory } from "../factories/gameboard";

describe("gameboard methods", () => {
  let gbOne;
  beforeEach(() => {
    gbOne = gameBoardFactory();
    gbOne.placeShip("carrier", 5, [1, 2, 3, 4, 5], 0);
  });

  test("can place ships", () => {
    // Where board is an array of all the div squares within gameboard
    expect(gbOne.board[0].ship).toBe(gbOne.ships[0]);
    expect(gbOne.board[1].ship).toBe(gbOne.ships[0]);
    expect(gbOne.board[2].ship).toBe(gbOne.ships[0]);
    expect(gbOne.board[3].ship).toBe(gbOne.ships[0]);
    expect(gbOne.board[4].ship).toBe(gbOne.ships[0]);
  });

  test("receives attacks properly", () => {
    expect(gbOne.receiveAttack(1)).toBe("Hit!");
    expect(gbOne.receiveAttack(4)).toBe("Hit!");
    expect(gbOne.receiveAttack(6)).toBe("Missed!");
    expect(gbOne.board[6].attacked).toBe("Missed!");
  });

  test("can determine if all ships have sunk", () => {
    gbOne.receiveAttack(0);
    gbOne.receiveAttack(1);
    gbOne.receiveAttack(2);
    gbOne.receiveAttack(3);
    gbOne.receiveAttack(4);
    expect(gbOne.isDefeated()).toBe(true);
  });
});
