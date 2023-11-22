import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Ship, ShipPosition, directions } from "../types/types";
import { useGameActions } from "./game.context";

interface BoardProviderProps {
  children: ReactNode;
}

export type BoardContextType = {
  state: {
    shipsPosition: Ship[];
    isLoading: boolean;
  };
  actions: {
    calculateShipPosition: () => void;
    restartGame: () => void;
    setIsLoading: (value: boolean) => void;
    startGame: () => void;
  };
};

const availableCols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

export const GameContext = createContext<BoardContextType>({
  state: {
    shipsPosition: [],
    isLoading: true,
  },
  actions: {
    calculateShipPosition: () => {},
    restartGame: () => {},
    setIsLoading: () => {},
    startGame: () => {},
  },
});

const BoardProvider = ({ children }: BoardProviderProps) => {
  const [shipsPosition, setShipsPosition] = useState<ShipPosition[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const gameActions = useGameActions();

  const getVariablesToCalculate = () => {
    const row = Math.floor(Math.random() * 10);
    const col = availableCols[Math.floor(Math.random() * 10)];

    const position = [directions.horizontal, directions.vertical][
      Math.floor(Math.random() * 2)
    ];

    return { row, col, position };
  };

  const handleVerticalCase = (
    row: number,
    col: string,
    position: string,
    ship: Ship,
    usedPositions: string[]
  ): ShipPosition => {
    const canGoDown = row > ship.shipLength;

    const operation = canGoDown ? "subtract" : "add";

    let length = ship.shipLength;
    let iterator = 0;

    const pos = [];

    while (length > 0) {
      pos.push(
        operation === "add"
          ? `${row + iterator}${col}`
          : `${row - iterator}${col}`
      );
      iterator++;
      length--;
    }

    const check = pos.map((el) => usedPositions.includes(el)).filter(Boolean);

    if (check.length > 0) {
      const {
        row: newRow,
        col: newCol,
        position: newPosition,
      } = getVariablesToCalculate();
      return handleVerticalCase(
        newRow,
        newCol,
        newPosition,
        ship,
        usedPositions
      );
    }

    return {
      shipPosition: pos,
      position,
      shipName: ship.shipName,
      shipLength: ship.shipLength,
    };
  };

  const handleHorizontalCase = (
    row: number,
    col: string,
    position: string,
    ship: Ship,
    usedPositions: string[]
  ): ShipPosition => {
    const index = availableCols.findIndex((el) => el === col);

    const minus = index + 1;

    const numToCheck = availableCols.length - minus;
    const conGoLeft = numToCheck > ship.shipLength;

    const operation = conGoLeft ? "subtract" : "add";

    let length = ship.shipLength;
    let iterator = 0;

    const pos = [];

    while (length > 0) {
      pos.push(
        operation === "add"
          ? `${row}${availableCols[index - iterator]}`
          : `${row}${availableCols[index + iterator]}`
      );
      iterator++;
      length--;
    }

    const check = pos.map((el) => usedPositions.includes(el)).filter(Boolean);

    if (check.length > 0) {
      const {
        row: newRow,
        col: newCol,
        position: newPosition,
      } = getVariablesToCalculate();
      return handleVerticalCase(
        newRow,
        newCol,
        newPosition,
        ship,
        usedPositions
      );
    }

    return {
      shipPosition: pos,
      position,
      shipName: ship.shipName,
      shipLength: ship.shipLength,
    };
  };

  const getShipsToAdd = () => {
    return [
      {
        shipName: "carrier",
        shipLength: 5,
      },
      {
        shipName: "battleship",
        shipLength: 4,
      },
      {
        shipName: "cruiser",
        shipLength: 3,
      },
      {
        shipName: "submarine",
        shipLength: 3,
      },
      {
        shipName: "destroyer",
        shipLength: 2,
      },
    ];
  };

  const calculateShipPosition = () => {
    const shipsToAdd = getShipsToAdd();

    const usedPositions: string[] = [];

    const boardInformation2 = shipsToAdd
      .map((ship: Ship) => {
        const row = Math.floor(Math.random() * 10);
        const col = availableCols[Math.floor(Math.random() * 10)];

        const position = [directions.horizontal, directions.vertical][
          Math.floor(Math.random() * 2)
        ];

        const shipData =
          position === "vertical"
            ? handleVerticalCase(row, col, position, ship, usedPositions)
            : handleHorizontalCase(row, col, position, ship, usedPositions);

        usedPositions.push(...shipData.shipPosition);

        return shipData;
      })
      .filter(Boolean);
    setIsLoading(false);
    return setShipsPosition(boardInformation2);
  };

  const restartGame = () => {
    // setShipsPosition([]);
    calculateShipPosition();
  };

  useEffect(() => {
    calculateShipPosition();
  }, []);

  const startGame = () => {
    calculateShipPosition();
    gameActions.restartGame();
  };

  const state = {
    shipsPosition,
    isLoading,
  };

  const actions = {
    calculateShipPosition,
    restartGame,
    setIsLoading,
    startGame,
  };

  return (
    <GameContext.Provider value={{ state, actions }}>
      {children}
    </GameContext.Provider>
  );
};

export default BoardProvider;

export const useBoardState = () => {
  const { state } = useContext(GameContext);

  return state;
};

export const useBoardActions = () => {
  const { actions } = useContext(GameContext);

  return actions;
};
