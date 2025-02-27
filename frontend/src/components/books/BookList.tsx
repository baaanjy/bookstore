// import {books} from "@/mocks/books.json"

import Book from '@/types/book'

import BookDialog from '../common/BookDialog'
import Tooltip from '../common/Tooltip'
import { DialogTrigger } from '../ui/dialog'
import BookCard from './BookCard'

interface Props {
  books: Book[] | null
  totalAmount: number
}
export default function BookList({ books, totalAmount = 0 }: Props) {
  if (!books) return <div>No Books</div>

  return (
    <div>
      <div className="flex items-center gap-3 pl-2">
        <p className="text-xl">총 {totalAmount}개</p>
        <BookDialog dialogTitle="신규 등록">
          <Tooltip text="등록">
            <DialogTrigger asChild>
              <button className="flex h-6 w-6 cursor-pointer items-center justify-center">
                <img src="../icons/plus.svg" alt="등록" />
              </button>
            </DialogTrigger>
          </Tooltip>
        </BookDialog>
      </div>
      <div className="flex flex-col items-center gap-5 py-10">
        {books.map((book) => (
          <BookCard book={book} key={book._id} />
        ))}
      </div>
    </div>
  )
}
