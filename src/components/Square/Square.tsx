import { FC, useState } from "react";

interface SquareProps {
  squareHasShip: boolean;
}

const Square: FC<SquareProps> = ({ squareHasShip }) => {
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(true);
  };

  const clickAndShip = isClicked && squareHasShip;

  return (
    <div className="border w-12 h-12" onClick={handleClick}>
      {isClicked && !squareHasShip && (
        <div className="bg-red-500 w-12 h-12"></div>
      )}
      {clickAndShip && <div className="bg-green-500 w-12 h-12"></div>}
    </div>
  );
};

export default Square;
