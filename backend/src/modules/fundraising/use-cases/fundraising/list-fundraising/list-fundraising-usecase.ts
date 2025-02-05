import { IFundraisingRepository } from '@modules/fundraising/repositories/IFundraisingRepository'
import { Fundraising } from '@modules/fundraising/infra/mongoose/schemas/Fundraising'

class ListFundraisingUseCase {
  constructor(private fundraisingRepository: IFundraisingRepository) {}

  public async execute(): Promise<Fundraising[]> {
    const fundraisings = await this.fundraisingRepository.findAll()
    return fundraisings
  }
}

export { ListFundraisingUseCase }
