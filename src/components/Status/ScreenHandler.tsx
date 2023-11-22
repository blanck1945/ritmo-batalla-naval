import { useBoardActions } from "../../context/board.context";
import { useGameState } from "../../context/game.context";
import Board from "../Board";
import Score from "../Score/Score";
import ShipInformation from "../ShipInformation/ShipInformation";

const ScreenHandler = () => {
  const state = useGameState();
  const actions = useBoardActions();

  switch (state?.gameState) {
    case 1:
      return (
        <>
          <div className="flex flex-col sm:flex-row sm:justify-center w-full gap-4 mb-4 px-0 sm:px-4 lg:w-auto lg:flex-col">
            <Score />
            <ShipInformation />
          </div>
          <Board />
        </>
      );
    case 2:
      return (
        <div className="flex flex-col mt-8 m-auto gap-5">
          <h1 className="text-4xl sm:text-6xl font-semibold text-violet-700">
            Juego Terminado
          </h1>
          <button
            className="rounded-full border-yellow-500 bg-yellow-500 text-violet-500 border px-4 m-auto py-2 text-xl hover:bg-violet-700 hover:text-yellow-500 transition-all sm:text-2"
            onClick={() => actions.startGame()}
          >
            Volver a jugar
          </button>
        </div>
      );
    default:
      return (
        <div className="flex flex-col mt-8 m-auto gap-5">
          <h1 className="text-4xl sm:text-6xl font-semibold text-violet-700">
            Batalla Naval
          </h1>
          <button
            className="rounded-full border-yellow-500 bg-yellow-500 text-violet-500 border px-4 m-auto py-2 text-xl hover:bg-violet-700 hover:text-yellow-500 transition-all sm:text-2"
            onClick={() => actions.startGame()}
          >
            Empezar
          </button>
        </div>
      );
  }
};

export default ScreenHandler;
