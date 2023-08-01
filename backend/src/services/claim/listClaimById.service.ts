import AppDataSource from "../../data-source"
import { Claim } from "../../entities/claim.entity"
import { AppError } from "../../errors/appError"

export const listClaimByIdService = async (id: string): Promise<Claim> => {
  const claimRepository = AppDataSource.getRepository(Claim)

  const claim = await claimRepository.findOneBy({ id })

  if (!claim) {
    throw new AppError("Sinistro não encontrado", 404)
  }

  return claim
}
