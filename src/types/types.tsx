import Ship from "../components/ShipInformation/Ship/Ship";

export const operationTypes = {
  add: "add",
  subtract: "subtract",
} as const;

export type OperationType =
  (typeof operationTypes)[keyof typeof operationTypes];

export const directions = {
  vertical: "vertical",
  horizontal: "horizontal",
} as const;

export type DirectionType = (typeof directions)[keyof typeof directions];

export type ShipToken = {
  shipName: string;
  shipLength: number;
  shipDamage: number;
  shipImage: string;
};

export type Ship = {
  shipName: string;
  shipLength: number;
  shipImage?: string;
};

export type ShipPosition = Ship & {
  shipPosition: string[];
  position: string;
};

export type VariablesToCalculateShipPosition = {
  row: number;
  col: string;
  position: DirectionType;
};
