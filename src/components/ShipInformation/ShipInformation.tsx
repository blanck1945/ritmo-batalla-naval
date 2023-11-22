import Ship from "./Ship/Ship";

const ShipInformation = () => {
  return (
    <div className="flex gap-4 flex-col">
      <Ship shipImage="/Carrier Shape.png" shipLife={5} />
      <Ship shipImage="/Battleship Shape.png" shipLife={4} />
      <Ship shipImage="/Cruiser Shape.png" shipLife={3} />
      <Ship shipImage="/Submarine Shape.png" shipLife={3} />
      <Ship shipImage="/Destroyer Shape.png" shipLife={2} />
    </div>
  );
};

export default ShipInformation;
