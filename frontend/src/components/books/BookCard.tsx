import { Link } from 'react-router-dom'

import Book from '@/types/book'

import EditDeleteBtns from '../common/EditDeleteBtns'

interface Props {
  book: Book
}
export default function BookCard({ book }: Props) {
  return (
    <div className="relative h-64 w-full">
      <Link
        to={`/${book._id}`}
        className="group peer grid h-full w-full grid-cols-4 justify-center gap-10">
        <div className="bg-book col-span-1 hidden h-full p-3 group-hover:shadow-md lg:block">
          <p className="text-myblue lg:text-3xl lg:font-semibold">
            {book.title}
          </p>
        </div>

        <div className="col-span-4 flex h-full w-full flex-col justify-between p-5 group-hover:shadow-md lg:col-span-3">
          <p className="text-xl md:text-2xl">{book.title}</p>
          <p className="text-base md:text-xl">
            {book.author}/{book.publisher}/{String(book.pub_date)}
          </p>
          <p className="text-base md:text-xl">
            {book.price.toLocaleString('ko-KR')}원
          </p>
          <p>{book.description}</p>
          <p>
            판매량 {book.sales.toLocaleString('ko-KR')} 재고{' '}
            {book.stock.toLocaleString('ko-KR')}
          </p>
        </div>
      </Link>
      <div className="absolute right-5 bottom-5 hidden gap-5 sm:invisible sm:flex sm:peer-hover:visible sm:hover:visible">
        <EditDeleteBtns book={book} />
      </div>
    </div>
  )
}
