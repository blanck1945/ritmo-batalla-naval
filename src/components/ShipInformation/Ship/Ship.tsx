import { FC } from "react";

interface ShipProps {
  shipImage: string;
  shipTotalLife: number;
  shipDamage: number;
  shipLife: number;
}

const ShipAvatar: FC<ShipProps> = ({ shipImage, shipDamage, shipLife }) => {
  return (
    <div className="flex gap-3 md:gap-4 items-center h-8 md:h-12">
      <img className="h-4 lg:h-2/3" src={shipImage} alt={`ship ${shipImage}`} />
      {Array.from(Array(shipDamage)).map((_, index) => {
        return (
          <div
            key={index}
            className="bg-red-500 w-2 sm:w-3 lg:w-4 h-2 sm:h-3 lg:h-4 rounded-full"
          ></div>
        );
      })}
      {Array.from(Array(shipLife)).map((_, index) => {
        return (
          <div
            key={index}
            className="bg-green-500 w-2 sm:w-3 lg:w-4 h-2 sm:h-3 lg:h-4 rounded-full"
          ></div>
        );
      })}
    </div>
  );
};

export default ShipAvatar;
