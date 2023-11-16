import { IShoes } from './shoes'

export interface IDashboardSlider {
  items: IShoes[]
  spinner: boolean
  goToPartPage?: boolean
}

export interface ICartAlertProps {
  count: number
  closeAlert: VoidFunction
}
