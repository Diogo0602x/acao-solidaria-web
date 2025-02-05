import { IFundraisingPurchaseRepository } from '@modules/fundraising/repositories/IFundraisingPurchaseRepository'
import { FundraisingPurchase } from '@modules/fundraising/infra/mongoose/schemas/FundraisingPurchase'

class FundraisingPurchaseRepository implements IFundraisingPurchaseRepository {
  public async create(data: {
    fundraising: string
    user: string
    quantity: number
    pricePurchased: number
    priceSold: number
  }): Promise<FundraisingPurchase> {
    const purchase = new FundraisingPurchase(data)
    await purchase.save()
    return purchase
  }

  public async findByUserId(userId: string): Promise<FundraisingPurchase[]> {
    return FundraisingPurchase.find({ user: userId })
      .populate('fundraising')
      .exec()
  }

  public async findByFundraisingId(
    fundraisingId: string,
  ): Promise<FundraisingPurchase[]> {
    return FundraisingPurchase.find({ fundraising: fundraisingId })
      .populate('user')
      .exec()
  }
}

export { FundraisingPurchaseRepository }
