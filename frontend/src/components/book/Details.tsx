import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getBook } from '@/api/book'
import Book from '@/types/book'

import EditDeleteBtns from '../common/EditDeleteBtns'

export default function Details() {
  const [book, setBook] = useState<Book>()
  const { id } = useParams()

  useEffect(() => {
    if (!id) return
    const fetchBook = async () => {
      const foundBook = await getBook(id)
      setBook(foundBook)
    }
    fetchBook()
  }, [id])

  return (
    <div className="flex w-full flex-col">
      <div className="flex h-fit items-end justify-end gap-5">
        {book && <EditDeleteBtns book={book} />}
      </div>
      <div className="flex h-80">
        <div className="bg-book h-full w-1/4 p-3 group-hover:shadow-md">
          <p className="text-myblue text-3xl font-semibold">{book?.title}</p>
        </div>
        <div className="flex h-full w-3/4 flex-col p-3 pl-10">
          <div className="flex flex-col gap-5">
            <p className="text-3xl">{book?.title}</p>
            <p className="text-xl">{book?.author}</p>
            <p className="text-xl">
              {book?.publisher} / {book?.pub_date}
            </p>
            <p>
              판매량: {book?.sales} 재고: {book?.stock}
            </p>
          </div>
        </div>
      </div>
      <div className="my-10">{book?.details}</div>
    </div>
  )
}
