import AppDataSource from "../../data-source"
import { Claim } from "../../entities/claim.entity"
import { User } from "../../entities/user.entity"
import { IClaim } from "../../interfaces/claim"

export const createClaimService = async ({
  city,
  country,
  date,
  neighborhood,
  number,
  state,
  street,
  type,
  userId,
}: IClaim): Promise<Claim> => {
  const userRepository = AppDataSource.getRepository(User)
  const claimRepository = AppDataSource.getRepository(Claim)

  const findUser = await userRepository.findOneBy({ id: userId })
  const user = await userRepository.findOne({
    where: {
      id: findUser?.id,
    },
  })

  const newClaim = await claimRepository.save({
    city,
    country,
    neighborhood,
    number,
    state,
    street,
    type,
    date,
    user: user!,
  })
  return newClaim
}
