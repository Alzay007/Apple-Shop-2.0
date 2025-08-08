import { Product, ProductDetails } from './product'

export type ProductsResponse = Product[]
export type ProductDetailsResponse = ProductDetails

export interface FilterParams {
  category?: string
  search?: string
  sortBy?: 'name' | 'fullPrice' | 'rating' | 'year'
  sortOrder?: 'asc' | 'desc'
}
