import { createEffect } from 'effector'
import api from '../axiosClient'

export const getBestsellersOrNewShoesFx = createEffect(async (url: string) => {
  const { data } = await api.get(url)

  return data
})
