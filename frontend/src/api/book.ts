import api from '@/api/index.ts'
import { InputBookData } from '@/types/book'

export async function getBooks(sortOption:string, currentPage:number, itemsPerPage:number) {
  try {
    const response = await api.get(`/books?sort=${sortOption}&page=${currentPage}&limit=${itemsPerPage}`)
    if (response.data.success) {
      const books = response.data.data
      return books
    } else {
      console.log(response.data.message)
      return []
    }
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function updateBook(id: string, bookData: InputBookData) {
  try {
    const response = await api.put(`/books/${id}`, bookData)
    if (response.data.success) {
      return response.data.data
    } else {
      console.log(response.data.message)
      return
    }
  } catch (error) {
    console.log(error)
    return
  }
}

export async function getBook(id: string) {
  try {
    const response = await api.get(`/books/${id}`)
    if (response.data.success) {
      const book = response.data.data
      return book
    } else {
      console.log(response.data.message)
      return []
    }
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function deleteBook(id: string) {
  try {
    const response = await api.delete(`/books/${id}`)
    if (response.data.success) {
      return
    } else {
      console.log(response.data.message)
      return
    }
  } catch (error) {
    console.log(error)
    return
  }
}

export async function createBook(newData: InputBookData) {
  try {
    const response = await api.post('/books/', newData)
    if (response.data.success) {
      return
    } else {
      console.log(response.data.message)
      return
    }
  } catch (error) {
    console.log(error)
    return
  }
}
