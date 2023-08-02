import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"
import { Claim } from "../../entities/claim.entity"

export const listClaimByIdService = async (id: string): Promise<Claim> => {
  const claimRepository = AppDataSource.getRepository(Claim)
  const claim = await claimRepository.findOneBy({ id })

  if (!claim) {
    throw new AppError("Sinistro não encontrado", 404)
  }

  return claim
}
