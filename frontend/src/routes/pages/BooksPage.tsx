import { useEffect, useState } from 'react'

import { getBooks, searchBooks } from '@/api/book'
import BookList from '@/components/books/BookList'
import SearchBar from '@/components/books/SearchBar'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Book from '@/types/book'

const SORT_BY_LATEST = 'latest'
const SORT_BY_TITLE = 'title'
const SORT_BY_AUTHOR = 'author'
const ITEMS_PER_PAGE = 10

export default function BooksPage() {
  const [books, setBooks] = useState<Book[] | null>(null)
  const [sortOption, setSortOption] = useState(SORT_BY_LATEST)
  const [totalAmount, setTotalAmount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchCategory, setSearchCategory] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBooks() {
      try {
        const data = await getBooks(sortOption, currentPage, ITEMS_PER_PAGE)
        setBooks(data.books)
        setTotalAmount(data.totalAmount)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchBooks()
  }, [currentPage, sortOption])

  const totalPages = Math.ceil(totalAmount / ITEMS_PER_PAGE)

  const handlePages = (page: number) => {
    setCurrentPage(page)
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  async function fetchSearchBooks() {
    try {
      const data = await searchBooks(
        sortOption,
        currentPage,
        ITEMS_PER_PAGE,
        searchCategory,
        searchQuery,
      )
      setBooks(data.books)
      setTotalAmount(data.totalAmount)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const onSearch = (query: string, category: string) => {
    setSearchQuery(query)
    setSearchCategory(category)
    setCurrentPage(1)
    setLoading(true)
    fetchSearchBooks()
  }

  return (
    <div className="my-20 flex w-full flex-col items-center">
      <div className="w-2/3">
        <button
          onClick={() => window.location.reload()}
          className="text-myblue h-10 cursor-pointer hover:font-semibold">
          🔄 초기화
        </button>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchCategory={searchCategory}
          setSearchCategory={setSearchCategory}
          onSearch={onSearch}
        />
        <Select
          defaultValue={SORT_BY_LATEST}
          onValueChange={(value) => {
            setSortOption(value)
            setCurrentPage(1)
            setSearchQuery('')
          }}>
          <SelectTrigger className="my-5 w-32 border-none shadow-none">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value={SORT_BY_LATEST}>신간순</SelectItem>
              <SelectItem value={SORT_BY_TITLE}>가나다순-제목</SelectItem>
              <SelectItem value={SORT_BY_AUTHOR}>가나다순-저자</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <BookList books={books} totalAmount={totalAmount} />
        
        {loading && <div> Loading ... 💬 </div>}
        {totalAmount === 0 && searchQuery && (
          <div className="flex w-full justify-center">
            검색 결과가 존재하지 않습니다.
          </div>
        )}

        <div className="text-myblue my-10 flex h-10 w-full items-center justify-center gap-3 sm:gap-10">
          <button
            onClick={() => handlePages(currentPage - 1)}
            disabled={currentPage === 1}
            className={`hover:font-bold ${currentPage === 1 && 'text-gray-400 hover:font-normal'}`}>
            이전
          </button>
          <div className="flex items-center justify-center gap-5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePages(page)}
                className={`hidden h-8 w-8 cursor-pointer items-center justify-center sm:flex ${page === currentPage && 'bg-myblue font-bold text-white'}`}>
                {page}
              </button>
            ))}

            {/* 반응형 */}
            <div
              className={`text-myblue sm:hidden ${currentPage > 1 && 'block'}`}>
              ...
            </div>
            <button className="bg-myblue flex h-8 w-7 items-center justify-center font-bold text-white sm:hidden">
              {currentPage}
            </button>
            <div
              className={`text-myblue sm:hidden ${currentPage < totalPages && 'block'}`}>
              ...
            </div>
          </div>
          <button
            onClick={() => handlePages(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`hover:font-bold ${currentPage === totalPages && 'text-gray-400 hover:font-normal'}`}>
            다음
          </button>
        </div>
      </div>
    </div>
  )
}
