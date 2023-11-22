import { ReactNode, createContext, useContext, useState } from "react";
import { Ship } from "../types/types";
import { shipsInitialState } from "./ships";

interface GameProviderProps {
  children: ReactNode;
}

export type GameContextType = {
  state: {
    shipInfo: Ship[] | [];
    gameState: number;
  };
  actions: {
    addDamageToShip: (shipName: boolean | string) => void;
    changeStatus: (status: number) => void;
    restartShipPosition: () => void;
    restartGame: () => void;
  };
};

export const GameContext = createContext<GameContextType>({
  state: {
    shipInfo: [],
    gameState: 0,
  },
  actions: {
    addDamageToShip: () => {},
    changeStatus: () => {},
    restartShipPosition: () => {},
    restartGame: () => {},
  },
});

const GameProvider = ({ children }: GameProviderProps) => {
  const [shipInfo, setShipInfo] = useState(shipsInitialState);
  const [remainingLifes, setRemainingLifes] = useState(17); // [5, 4, 3, 3, 2
  const [gameState, setGameState] = useState(0); // 0: not started, 1: started, 2: ended

  const addDamageToShip = (shipName: boolean | string) => {
    const shipToAddDamageIndex = shipInfo.findIndex(
      (el) => el.shipName === shipName
    );

    const updatedShipInfo = shipInfo.map((ship, index) => {
      if (index === shipToAddDamageIndex) {
        return {
          ...ship,
          shipDamage: ship.shipDamage + 1,
        };
      }
      return ship;
    });

    const isGameOver = remainingLifes - 1 === 0;

    setRemainingLifes(remainingLifes - 1);
    setShipInfo(updatedShipInfo);

    if (isGameOver) {
      changeStatus(2);
    }
  };

  const restartShipPosition = () => {
    setShipInfo(shipsInitialState);
  };

  const restartRemainingLifes = () => {
    setRemainingLifes(17);
  };

  const changeStatus = (status: number) => {
    setGameState(status);
  };

  const restartGame = () => {
    restartShipPosition();
    restartRemainingLifes();
    changeStatus(1);
  };

  const state = {
    shipInfo,
    gameState,
  };

  const actions = {
    addDamageToShip,
    restartShipPosition,
    changeStatus,
    restartGame,
  };

  return (
    <GameContext.Provider value={{ state, actions }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;

export const useGameState = () => {
  const { state } = useContext(GameContext);

  return state;
};

export const useGameActions = () => {
  const { actions } = useContext(GameContext);

  return actions;
};
