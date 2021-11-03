const drawDefaultShips = () => {
  const playerTiles = Array.from(document.querySelectorAll(".p-square"));
  const compTiles = Array.from(document.querySelectorAll(".c-square"));

  playerTiles.forEach((tile) => {
    if (!tile.ship) return;
    tile.setAttribute(
      "style",
      "border: 1px solid blue; background-color: pink"
    );
  });

  compTiles.forEach((tile) => {
    if (!tile.ship) return;
    tile.setAttribute("style", "border: 1px solid red; background-color: pink");
  });
};

export { drawDefaultShips };
