import { IAddress } from "../address"

export interface IClaim {
  userId?: string
  date: string
  type: string
  address: IAddress
}

export enum claimTypes {
  THEFT = "Roubo ou Furto",
  COLLISION = "Colisão",
  NATURAL_CAUSES = "Causas Naturais",
}
