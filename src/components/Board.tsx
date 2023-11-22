import { useBoardState } from "../context/board.context";
import Square from "./Square/Square";

const Board = () => {
  const borderRows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const borderCols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const state = useBoardState();

  if (state.isLoading) return <div>Loading...</div>;

  const positionHasShip = (num: number, el: string) => {
    const hasShip = state?.shipsPosition
      .map((ship: any) => {
        if (ship.shipPosition.includes(`${num}${el}`)) {
          return ship.shipName;
        }
      })
      .filter(Boolean);

    return hasShip.length > 0 ? hasShip[0] : false;
  };

  return (
    <div className="border-yellow-500 border-8 sm:border-4 w-full sm:w-auto lg:w-auto m-auto lg:m-0 ">
      {borderCols.map((num, colIndex) => {
        return (
          <div key={colIndex} className="flex">
            {borderRows.map((el, rowIndex) => {
              return (
                <>
                  <Square
                    key={rowIndex}
                    squareHasShip={positionHasShip(num, el)}
                  />
                </>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
