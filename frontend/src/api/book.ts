import api from "@/api/index.ts"
import { UpdateBookData } from "@/types/book"

export async function getBooks(){
  try{
    const response = await api.get("/books")
    if(response.data.success){
      const books = response.data.data
      return books
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

export async function getBook(id:string){
  try{
    const response = await api.get(`/books/${id}`)
    if(response.data.success){
      const book = response.data.data
      return book
    } else{
      console.log(response.data.message)
      return []
    }
  } catch(error) {
    console.log(error)
    return []
  }
}