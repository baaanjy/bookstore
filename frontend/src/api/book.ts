import api from "@/api/index.ts"
import Book, { UpdateBookData } from "@/types/book"

const REGION = 'ko-KR'

export async function getBooks(){
  try{
    const response = await api.get("/books")
    if(response.data.success){
      const books = response.data.data

      const formattedBooks = books.map((book:Book)=>{
        return {
          ...book,
          price: book.price.toLocaleString(REGION),
          sales: book.sales.toLocaleString(REGION),
          stock: book.stock.toLocaleString(REGION)
        }
      })

      return formattedBooks
    } else{
      console.log(response.data.message)
      return []
    }
  } catch(error) {
    console.log(error)
    return []
  }
}

export async function updateBook(id:string, bookData: UpdateBookData){
  try{
    const response = await api.put(`/books/${id}`, bookData)
    if(response.data.success){
      return response.data.data
    }else{
      console.log(response.data.message)
      return
    }
  } catch(error){
    console.log(error)
    return
  }
}