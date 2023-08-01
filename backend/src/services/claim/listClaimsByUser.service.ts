import AppDataSource from "../../data-source"
import { Claim } from "../../entities/claim.entity"
import { User } from "../../entities/user.entity"

export const listClaimsService = async (id: string): Promise<Claim[]> => {
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOne({
    where: { id },
    relations: {
      claims: true,
    },
  })


  return user?.claims!
}
