export interface Product {
  id: number
  itemId: string
  category: 'phones' | 'tablets' | 'accessories'
  name: string
  fullPrice: number
  rating: number
  screen: string
  capacity: string
  color: string
  ram: string
  year: number
  image: string
}

export interface ProductDetails {
  id: string
  namespaceId: string
  name: string
  capacityAvailable: string[]
  capacity: string
  priceRegular: number
  priceDiscount?: number
  colorsAvailable: string[]
  color: string
  images: string[]
  description: ProductDescription[]
  screen: string
  resolution: string
  processor: string
  ram: string
  camera: string
  zoom: string
  cell: string[]
}

export interface ProductDescription {
  title: string
  text: string[]
}
