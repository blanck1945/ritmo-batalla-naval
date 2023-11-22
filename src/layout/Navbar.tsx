import { useGameActions } from "../context/game.context";

const Navbar = () => {
  const actions = useGameActions();

  return (
    <nav className="bg-violet-700 h-12 w-full flex items-center gap-3 justify-between px-4">
      <button
        onClick={() => actions.changeStatus(0)}
        className="bg-violet-400 rounded-full text-white w-1/5 md:w-1/6 px-1 md:px-3 py-2 transition-all hover:bg-violet-900"
      >
        Menu
      </button>
      <div className="flex items-center md:gap-3 w-full">
        <input type="text" className="w-full h-8" />
        <p className="w-16 md:w-1/5 h-8 bg-violet-500"></p>
      </div>
      <div className="md:flex gap-3 items-center justify-end">
        <p className="bg-black bg-opacity-70 h-8 w-8"></p>
        <p className="bg-black hidden md:flex bg-opacity-70 h-8 w-8"></p>
        <p className="bg-black hidden md:flex bg-opacity-70 h-8 w-8"></p>
      </div>
    </nav>
  );
};

export default Navbar;
