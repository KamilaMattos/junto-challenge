import { Request, Response } from "express"
import { deleteClaimService } from "../../services/claim/deleteClaim.service"

export const deleteClaimController = async (req: Request, res: Response) => {
  const { id } = req.params
  await deleteClaimService(id)
  return res.status(204).send()
}
