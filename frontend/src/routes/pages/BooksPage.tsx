import { useEffect, useState } from 'react'

import { getBooks } from '@/api/book'
import BookList from '@/components/books/BookList'
import Pagenation from '@/components/books/Pagenation'
import SearchBar from '@/components/books/SearchBar'
import Book from '@/types/book'

export default function BooksPage() {
  const [books, setBooks] = useState<Book[] | null>(null)

  useEffect(() => {
    async function fetchBooks() {
      const data = await getBooks()
      setBooks(data)
    }
    fetchBooks()
  }, [])

  return (
    <div className="my-20 flex w-full flex-col items-center">
      <div className="w-2/3">
        <SearchBar />
        <BookList books={books} />
        <Pagenation />
      </div>
    </div>
  )
}
