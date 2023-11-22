import "./App.css";
import { useEffect, useState } from "react";
import Board from "./components/Board";
import Score from "./components/Score/Score";
import ShipInformation from "./components/ShipInformation/ShipInformation";
import {
  DirectionType,
  OperationType,
  Ship,
  ShipPosition,
  VariablesToCalculateShipPosition,
  directions,
} from "./types/types";

function App() {
  const [shipsPosition, setShipsPosition] = useState<ShipPosition[]>([]);

  const handleShipLengthOnBoard = (
    shipLength: number,
    operation: OperationType
  ) => {
    let iteratorLength = shipLength;
    let iterator = 1;
    const length = [shipLength];

    while (iteratorLength > 1) {
      length.push(
        operation === "add" ? shipLength + iterator : shipLength - iterator
      );

      iteratorLength--;
      iterator++;
    }

    return length;
  };

  const handleVerticalCase = (
    row: number,
    col: number,
    position: string,
    ship: Ship
  ) => {
    const canGoDown = row >= ship.shipLength;

    return {
      rows: canGoDown
        ? handleShipLengthOnBoard(ship.shipLength, "subtract")
        : handleShipLengthOnBoard(ship.shipLength, "add"),
      cols: [col],
      position,
      shipName: ship.shipName,
      shipLength: ship.shipLength,
    };
  };

  const handleHorizontalCase = (
    row: number,
    col: number,
    position: string,
    ship: Ship
  ) => {
    const canGoRight = col >= ship.shipLength;

    return {
      rows: [row],
      cols: canGoRight
        ? handleShipLengthOnBoard(ship.shipLength, "subtract")
        : handleShipLengthOnBoard(ship.shipLength, "add"),
      position,
      shipName: ship.shipName,
      shipLength: ship.shipLength,
    };
  };

  const calculateShipPosition = () => {
    const shipsToAdd = getShipsToAdd();

    const useRows: number[] = [];
    const useCols: number[] = [];

    const boardInformation = shipsToAdd.map((ship: Ship) => {
      const { row, col, position } = getVariablesToCalculateShipPosition(
        useRows,
        useCols,
        ship
      );

      const shipInformation =
        position === "vertical"
          ? handleVerticalCase(row, col, position, ship)
          : handleHorizontalCase(row, col, position, ship);

      useRows.push(...shipInformation.rows);
      useCols.push(...shipInformation.cols);

      return shipInformation;
    });

    boardInformation.forEach((ship) => {
      console.log(ship);
    });

    setShipsPosition(boardInformation);
  };

  const checkIfRowIsAlreadyUsed = (
    position: DirectionType,
    usedRows: number[],
    usedCols: number[],
    shipInformation: any
  ) => {
    const rowsSet = new Set([...usedRows, ...shipInformation.rows]);
    const colsSet = new Set([...usedCols, ...shipInformation.cols]);

    if (position === "vertical") {
      console.warn("ROWS SET", rowsSet);
      console.warn(usedCols.includes(shipInformation.cols[0]));
    } else {
      console.warn("COLS SET", colsSet);
      console.warn(usedRows.includes(shipInformation.rows[0]));
      // if (
      //   colsSet.size !== usedCols.length + shipInformation.cols.length &&
      //   usedRows.includes(shipInformation.rows[0])
      // ) {
      //   return false;
      // }
    }
  };

  const getVariablesToCalculateShipPosition = (
    usedRows: number[],
    usedCols: number[],
    ship: any
  ): VariablesToCalculateShipPosition => {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);

    // If the row and col are already used, we need to calculate again
    if (usedRows.includes(row) && usedCols.includes(col)) {
      return getVariablesToCalculateShipPosition(usedRows, usedCols, ship);
    }

    const position = [directions.horizontal, directions.vertical][
      Math.floor(Math.random() * 2)
    ];

    const shipInformation =
      position === "vertical"
        ? handleVerticalCase(row, col, position, ship)
        : handleHorizontalCase(row, col, position, ship);

    const positionIsValid = checkIfRowIsAlreadyUsed(
      position,
      usedRows,
      usedCols,
      shipInformation
    );

    // if (!positionIsValid) {
    //   return getVariablesToCalculateShipPosition(usedRows, usedCols, ship);
    // }

    return { row, col, position };
  };

  const getShipsToAdd = () => {
    return [
      {
        shipName: "carrier",
        shipLength: 5,
      },
      // {
      //   shipName: "battleship",
      //   shipLength: 4,
      // },
      // {
      //   shipName: "cruiser",
      //   shipLength: 3,
      // },
      // {
      //   shipName: "submarine",
      //   shipLength: 3,
      // },
      // {
      //   shipName: "destroyer",
      //   shipLength: 2,
      // },
    ];
  };

  useEffect(() => {
    calculateShipPosition();
  }, []);

  return (
    <>
      <nav></nav>
      {JSON.stringify(shipsPosition)}
      <main className="flex">
        <div>
          <Score />
          <ShipInformation />
        </div>
        <Board shipsPosition={shipsPosition} />
      </main>
    </>
  );
}

export default App;
