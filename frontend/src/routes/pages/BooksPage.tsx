import { useEffect, useState } from 'react'

import { getBooks } from '@/api/book'
import BookList from '@/components/books/BookList'
import Pagenation from '@/components/books/Pagenation'
import SearchBar from '@/components/books/SearchBar'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Book from '@/types/book'

const SORT_BY_LATEST = 'latest'
const SORT_BY_TITLE = 'title'
const SORT_BY_AUTHOR = 'author'

export default function BooksPage() {
  const [books, setBooks] = useState<Book[] | null>(null)
  const [sortOption, setSortOption] = useState(SORT_BY_LATEST)

  useEffect(() => {
    async function fetchBooks() {
      const data = await getBooks(sortOption)
      setBooks(data)
    }
    fetchBooks()
  }, [sortOption])

  return (
    <div className="my-20 flex w-full flex-col items-center">
      <div className="w-2/3">
        <SearchBar/>
          <Select defaultValue={SORT_BY_LATEST} onValueChange={(value) => setSortOption(value)}>
            <SelectTrigger className="w-32 border-none shadow-none my-5">
              <SelectValue/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value={SORT_BY_LATEST}>신간순</SelectItem>
                <SelectItem value={SORT_BY_TITLE}>가나다순-제목</SelectItem>
                <SelectItem value={SORT_BY_AUTHOR}>가나다순-저자</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        <BookList books={books} />
        <Pagenation />
      </div>
    </div>
  )
}
