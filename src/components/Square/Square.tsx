import { FC, useState } from "react";
import { useGameActions } from "../../context/game.context";

interface SquareProps {
  squareHasShip: boolean | string;
}

const Square: FC<SquareProps> = ({ squareHasShip }) => {
  const [isClicked, setIsClicked] = useState(false);
  const actions = useGameActions();

  const clickAndShip = isClicked && squareHasShip;

  const handleClick = () => {
    if (clickAndShip) return;
    if (squareHasShip) actions.addDamageToShip(squareHasShip);
    setIsClicked(true);
  };

  return (
    <div
      onClick={handleClick}
      className="border h-9 w-16 sm:h-14 sm:w-14 lg:h-12 lg:w-12"
    >
      {isClicked && !squareHasShip && (
        <div className=" bg-red-500 h-9 w-15 sm:h-14 sm:w-14 lg:h-12 lg:w-12"></div>
      )}
      {clickAndShip && (
        <div className=" bg-green-500 h-9 w-15 sm:h-14 sm:w-14 lg:h-12 lg:w-12"></div>
      )}
    </div>
  );
};

export default Square;
