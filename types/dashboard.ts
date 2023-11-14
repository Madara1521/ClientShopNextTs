import { IShoes } from './shoes'

export interface IDashboardSlider {
  items: IShoes[]
  spinner: boolean
  goToPartPage?: boolean
}
