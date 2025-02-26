export default interface Book{
  _id: string;
  title: string,
  author: string,
  publisher: string,
  pub_date: string,
  description: string,
  price: number,
  sales: number,
  stock: number,
  details: string
}

export interface UpdateBookData{
  title: string,
  author: string,
  publisher: string,
  pub_date: string,
  description: string,
  price: number,
  sales: number,
  stock: number,
  details: string
}