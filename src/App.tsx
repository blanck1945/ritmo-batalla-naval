import "./App.css";
import GameProvider from "./context/game.context";
import BoardProvider from "./context/board.context";
import Navbar from "./layout/Navbar";
import ScreenHandler from "./components/Status/ScreenHandler";

function App() {
  return (
    <div className="w-screen h-screen">
      <GameProvider>
        <BoardProvider>
          <Navbar />
          <main className="flex flex-col-reverse lg:flex-row w-full gap-0 sm:gap-4 lg:gap-8 mt-0 sm:mt-4 md:mt-8 justify-center">
            <ScreenHandler />
          </main>
        </BoardProvider>
      </GameProvider>
    </div>
  );
}

export default App;
