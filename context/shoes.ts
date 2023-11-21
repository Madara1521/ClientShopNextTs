import { IShoeses } from '@/types/shoes'
import { createDomain } from 'effector-next'

const shoes = createDomain()

export const setShoes = shoes.createEvent<IShoeses>()

export const $shoes = shoes
  .createStore<IShoeses>({} as IShoeses)
  .on(setShoes, (_, shoes) => shoes)
