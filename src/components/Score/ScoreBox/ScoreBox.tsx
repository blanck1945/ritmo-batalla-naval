import { FC } from "react";
import Separator from "../../Utils/Separator";

interface ScoreBoxProps {
  bg: string;
  playerName: string;
}

const ScoreBox: FC<ScoreBoxProps> = ({ bg, playerName }) => {
  return (
    <div className={`w-full p-4 lg:h-auto ${bg}`}>
      <p className="text-center text-xl lg:text-5xl font-bold mb-3 lg:mb-6">
        00
      </p>
      <Separator />
      <p className="text-center text-sm lg:text-2xl font-bold mt-1 lg:mt-2">
        {playerName}
      </p>
    </div>
  );
};

export default ScoreBox;
