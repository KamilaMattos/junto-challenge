export interface IClaim {
  userId?: string
  date: string
  type: string
  street: string
  number: number
  neighborhood: string
  city: string
  state: string
  country: string
}

export interface IClaimUpdate {
  date?: string
  type?: string
  street?: string
  number?: number
  neighborhood?: string
  city?: string
  state?: string
  country?: string
}

export enum claimTypes {
  THEFT = "Roubo ou Furto",
  COLLISION = "Colisão",
  NATURAL_CAUSES = "Causas Naturais",
}
