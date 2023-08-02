import { Request, Response } from "express"
import { updateClaimService } from "../../services/claim/updateClaim.service"

export const updateClaimController = async (req: Request, res: Response) => {
  const data = req.body
  const claimId = req.params.id
  
  const claim = await updateClaimService(data, claimId)

  return res.json(claim)
}
