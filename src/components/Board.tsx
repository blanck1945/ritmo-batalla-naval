import Square from "./Square/Square";

const Board = ({ shipsPosition }) => {
  const borderRows = 10;
  const borderCols = 10;

  const positionHasShip = (row, col) => {
    const hasShip = shipsPosition
      .map((ship: any) => {
        if (ship.cols.includes(col) && ship.rows.includes(row)) {
          return ship.shipName;
        }
      })
      .filter(Boolean);

    return hasShip.length > 0 ? hasShip[0] : false;
  };

  return (
    <div className="border-yellow-500 border-4">
      {Array.from({ length: borderCols }).map((_, colIndex) => {
        return (
          <div key={colIndex} className="flex">
            {Array.from({ length: borderRows }).map((_, rowIndex) => {
              return (
                <>
                  <Square
                    key={rowIndex}
                    squareHasShip={positionHasShip(colIndex, rowIndex)}
                  />
                  {/* <p>{colIndex}</p>
                  <p>{rowIndex}</p>
                  <p>Ship info: {positionHasShip(colIndex, rowIndex)}</p> */}
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
