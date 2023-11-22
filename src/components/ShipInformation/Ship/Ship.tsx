import { FC } from "react";

interface ShipProps {
  shipImage: string;
  shipLife: number;
}

const Ship: FC<ShipProps> = ({ shipImage, shipLife }) => {
  return (
    <div className="flex gap-4 items-center  h-12">
      <img className="h-2/3" src={shipImage} alt={`ship ${shipImage}`} />
      <p>{shipLife}</p>
    </div>
  );
};

export default Ship;
