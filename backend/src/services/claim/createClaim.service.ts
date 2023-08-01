import AppDataSource from "../../data-source"
import { Claim } from "../../entities/claim.entity"
import { IClaim } from "../../interfaces/claim"
import { AppError } from "../../errors/appError"
import { User } from "../../entities/user.entity"
import { Address } from "../../entities/address.entity"

export const createClaimService = async (claim: IClaim): Promise<Claim> => {
  const userRepository = AppDataSource.getRepository(User)
  const claimRepository = AppDataSource.getRepository(Claim)
  const addressRepository = AppDataSource.getRepository(Address)

  let { address, date, type, userId } = claim

  address = addressRepository.create(address)

  const addressAlreadyExists = await addressRepository.findOne({
    where: address,
  })

  if (addressAlreadyExists) {
    throw new AppError("Já existe um sinistro cadastrado com esse endereço!")
  }

  await addressRepository.save(address)

  const findUser = await userRepository.findOneBy({ id: userId })
  const user = await userRepository.findOne({
    where: {
      id: findUser?.id,
    },
  })
  
  const newClaim = await claimRepository.save({
    address,
    type,
    date,
    user: user!,
  })
  console.log(newClaim)
  //await claimRepository.save(newClaim)
  return newClaim
}
