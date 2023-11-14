export interface IShoes {
  id: number
  shoes_manufacturer: string
  price: number
  country_maufacturer: string
  vendor_code: string
  name: string
  description: string
  images: string
  in_stock: number
  bestseller: boolean
  new: boolean
  popularity: number
  compatibility: string
}

export interface IShoeses {
  count: number
  rows: IShoes[]
}
