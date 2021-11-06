const shipFactory = (name, lngth, hitBox = []) => {
  // continue here
  const isSunk = () => {
    if (hitBox.every((position) => position === "hit")) {
      return true;
    }
  };
  const hit = (position) => {
    hitBox.splice(position - 1, 1, "hit");
  };

  return { name, lngth, hitBox, hit, isSunk };
};

export { shipFactory };
