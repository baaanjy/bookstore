import { Link } from 'react-router-dom'

import Book from '@/types/book'

import EditDeleteBtns from '../common/EditDeleteBtns'

interface Props {
  book: Book
}
export default function BookCard({ book }: Props) {
  return (
    <div className="relative h-64 w-fit">
      <Link
        to={`/${book._id}`}
        className="group peer flex h-full w-full justify-center gap-10">
        <div className="bg-book h-full w-48 p-3 group-hover:shadow-md">
          <p className="text-myblue text-3xl font-semibold">{book.title}</p>
        </div>

        <div className="flex h-full w-xl flex-col justify-between p-5 group-hover:shadow-md">
          <p className="text-2xl">{book.title}</p>
          <p className="text-xl">
            {book.author}/{book.publisher}/{String(book.pub_date)}
          </p>
          <p className="text-xl">{book.price.toLocaleString('ko-KR')}원</p>
          <p>{book.description}</p>
          <p>
            판매량 {book.sales.toLocaleString('ko-KR')} 재고{' '}
            {book.stock.toLocaleString('ko-KR')}
          </p>
        </div>
      </Link>
      <div className="invisible absolute right-5 bottom-5 flex gap-5 peer-hover:visible hover:visible">
        <EditDeleteBtns book={book} />
      </div>
    </div>
  )
}
