import { shipFactory } from "../factories/ship";

describe("ship methods", () => {
  let submarine;
  let battleship;

  beforeEach(() => {
    submarine = shipFactory("submarine", 3, [1, 2, 3]);
    battleship = shipFactory("battleship", 4, [1, 2, 3, 4]);
  });

  test("hits submarine", () => {
    submarine.hit(3);
    expect(submarine.hitBox).toStrictEqual([1, 2, "hit"]);
  });

  test("battleship sinks", () => {
    battleship.hit(1);
    battleship.hit(2);
    battleship.hit(3);
    battleship.hit(4);
    expect(battleship.isSunk()).toBe(true);
  });
});
