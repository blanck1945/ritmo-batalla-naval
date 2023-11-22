import { FC } from "react";
import Separator from "../../Utils/Separator";

interface ScoreBoxProps {
  bg: string;
}

const ScoreBox: FC<ScoreBoxProps> = ({ bg }) => {
  return (
    <div className={`w-1/2 h-1/2 p-4 ${bg}`}>
      <p>00</p>
      <Separator />
      <p>Player 1</p>
    </div>
  );
};

export default ScoreBox;
