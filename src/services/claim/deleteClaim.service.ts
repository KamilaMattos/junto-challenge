import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"
import { Claim } from "../../entities/claim.entity"

export const deleteClaimService = async (id: string): Promise<void> => {
  const claimRepository = AppDataSource.getRepository(Claim)
  const claim = await claimRepository.findOneBy({ id })

  if (!claim) {
    throw new AppError("Sinistro não encontrado!", 404)
  }

  if (claim.isActive == false) {
    throw new AppError("Sinistro inativado!")
  }

  claim.isActive = false

  await claimRepository.update({ id }, claim)
}
