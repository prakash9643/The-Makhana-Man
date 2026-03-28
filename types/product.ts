export interface ProductImage {
  id: number
  src: string
}

export interface Product {
  id: number
  name: string
  slug: string
  price: string
  description: string
  images: ProductImage[]
}