import { Request, Response } from "express"
import { createClaimService } from "../../services/claim/createClaim.service"

export const createClaimController = async (req: Request, res: Response) => {
  const claim = req.body
  claim.userId = req.user.id

  await createClaimService(claim)

  return res.status(201).json(claim)
}
