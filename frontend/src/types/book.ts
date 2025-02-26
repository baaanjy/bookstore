export default interface Book {
  _id: string
  title: string
  author: string
  publisher: string
  pub_date: string
  description: string
  price: number
  sales: number
  stock: number
  details: string
}

export interface InputBookData {
  title: string
  author: string
  publisher: string
  pub_date: string
  description: string
  price: number
  sales: number
  stock: number
  details: string
}
