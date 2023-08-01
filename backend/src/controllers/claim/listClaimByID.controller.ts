import { Request, Response } from "express"
import { listClaimByIdService } from "../../services/claim/listClaimById.service"

export const listClaimByIdController = async (req: Request, res: Response) => {
  const { id } = req.params
  const listClaim = await listClaimByIdService(id)

  return res.json(listClaim)
}
