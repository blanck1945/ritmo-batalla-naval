import ScoreBox from "./ScoreBox/ScoreBox";

const Score = () => {
  return (
    <div className="flex ">
      <ScoreBox bg="bg-yellow-500 border border-r-0" playerName="Player 1" />
      <ScoreBox bg="bg-emerald-500 border border-l-0" playerName="Player 2" />
    </div>
  );
};

export default Score;
