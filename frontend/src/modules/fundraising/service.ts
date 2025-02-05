import { API } from '@/api'

export const createFundraising = async (data: {
  name: string
  quantity: number
  quantityAvailable: number
  price: number
  imageUrl: string
  userId: string
}) => {
  try {
    const response = await API.post('/fundraising', data)
    return { data: response.data, status: response.status }
  } catch (error) {
    return { data: null, status: error.response?.status || 500 }
  }
}
