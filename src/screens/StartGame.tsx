import { useState } from "react";
import Separator from "../components/Utils/Separator";
import { useGameActions } from "../context/game.context";

const StartGame = () => {
  const [shipsQuantity, setShipsQuantity] = useState(5);
  const [boardSize, setBoardSize] = useState(10); // ["10x10", "15x15", "20x20"
  const actions = useGameActions();

  const removeOneShip = () => {
    if (shipsQuantity === 1) return;
    setShipsQuantity(shipsQuantity - 1);
  };
  const addOneShip = () => setShipsQuantity(shipsQuantity + 1);

  const removeBordSize = () => {
    if (boardSize === 5) return;
    setBoardSize(boardSize - 5);
  };
  const addBoardSize = () => setBoardSize(boardSize + 5);

  return (
    <div className="flex flex-col mt-8 m-auto gap-5">
      <h1 className="text-4xl sm:text-6xl font-semibold text-violet-700">
        Batalla Naval
      </h1>
      <div>
        <div className="flex w-full items-center h-12 justify-between">
          <p>Cantidad de barcos</p>
          <div className="flex items-center justify-center gap-3">
            <p
              onClick={removeOneShip}
              className="border cursor-pointer pb-1 px-4 transition-all hover:bg-violet-400 hover:text-white"
            >
              -
            </p>
            <p>{shipsQuantity}</p>
            <p
              onClick={addOneShip}
              className="border cursor-pointer pb-1 px-4 transition-all hover:bg-violet-400 hover:text-white"
            >
              +
            </p>
          </div>
        </div>
        <Separator />
        <div className="flex w-full items-center h-12 justify-between">
          <p>Tamaño del tablero</p>
          <div className="flex items-center justify-center gap-3">
            <p
              onClick={removeBordSize}
              className="border cursor-pointer pb-1 px-4 transition-all hover:bg-violet-400 hover:text-white"
            >
              -
            </p>
            <p>
              {boardSize}x{boardSize}
            </p>
            <p
              onClick={addBoardSize}
              className="border cursor-pointer pb-1 px-4 transition-all hover:bg-violet-400 hover:text-white"
            >
              +
            </p>
          </div>
        </div>
      </div>
      <button
        className="rounded-full border-yellow-500 bg-yellow-500 text-violet-500 border px-4 m-auto py-2 text-xl hover:bg-violet-700 hover:text-yellow-500 transition-all sm:text-2"
        onClick={() => actions.startGame(boardSize)}
      >
        Empezar
      </button>
    </div>
  );
};

export default StartGame;
