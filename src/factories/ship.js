const shipFactory = (name, lngth, hitBox = []) => {
  const isSunk = () => {
    if (hitBox.every((position) => position === "hit")) {
      return true;
    } else return false;
  };
  const hit = (position) => {
    hitBox.splice(position - 1, 1, "hit");
  };

  return { name, lngth, hitBox, hit, isSunk };
};

export { shipFactory };
