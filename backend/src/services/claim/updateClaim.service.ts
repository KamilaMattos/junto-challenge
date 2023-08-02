import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"
import { Claim } from "../../entities/claim.entity"
import { IClaimUpdate } from "../../interfaces/claim"

export const updateClaimService = async (
  data: IClaimUpdate,
  claimId: string
): Promise<Claim> => {
  const claimRepository = AppDataSource.getRepository(Claim)
  const claim = await claimRepository.findOne({
    where: {
      id: claimId,
    },
    relations: {
      user: true,
    },
  })

  if (!claim) {
    throw new AppError("Sinistro não enconrado!", 404)
  }

  await claimRepository.update(claimId, {
    ...data,
  })

  const updatedClaim = await claimRepository.findOneBy({ id: claimId })

  return updatedClaim!
}
