import { useGameState } from "../../context/game.context";
import { ShipToken } from "../../types/types";
import ShipAvatar from "./Ship/Ship";

const ShipInformation = () => {
  const state = useGameState();

  return (
    <div className="grid grid-cols-2 sm:gap-2 lg:flex lg:gap-4 lg:flex-col">
      {state.shipInfo.map((ship: ShipToken) => {
        return (
          <ShipAvatar
            key={ship.shipName}
            shipImage={ship.shipImage}
            shipTotalLife={ship.shipLength}
            shipDamage={ship.shipDamage}
            shipLife={ship.shipLength - ship.shipDamage}
          />
        );
      })}
    </div>
  );
};

export default ShipInformation;
