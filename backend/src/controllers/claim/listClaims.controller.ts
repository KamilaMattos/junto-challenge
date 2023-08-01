import { instanceToPlain } from "class-transformer"
import { Request, Response } from "express"
import { listClaimsService } from "../../services/claim/listClaimsByUser.service"

export const listClaimsController = async (req: Request, res: Response) => {
  const { id } = req.params
  const listClaims = await listClaimsService(id)

  return res.json(instanceToPlain(listClaims))
}
