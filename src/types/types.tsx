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

export type Ship = {
  shipName: string;
  shipLength: number;
};

export type ShipPosition = Ship & {
  rows: number[];
  cols: number[];
  position: string;
};

export type VariablesToCalculateShipPosition = {
  row: number;
  col: number;
  position: DirectionType;
};
