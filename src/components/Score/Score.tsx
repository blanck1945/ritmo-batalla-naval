import ScoreBox from "./ScoreBox/ScoreBox";

const Score = () => {
  return (
    <div className="flex border">
      <ScoreBox bg="bg-yellow-500" />
      <ScoreBox bg="bg-green-200" />
    </div>
  );
};

export default Score;
