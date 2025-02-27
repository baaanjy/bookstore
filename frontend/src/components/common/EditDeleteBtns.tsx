import { deleteBook } from '@/api/book'
import Book from '@/types/book'

import { DialogTrigger } from '../ui/dialog'
import BookDialog from './BookDialog'
import Tooltip from './Tooltip'

interface Props {
  book: Book
}
export default function EditDeleteBtns({ book }: Props) {
  const handleDelete = async () => {
    const isConfirmed = window.confirm('정말로 이 책을 삭제하시겠습니까?')

    if (isConfirmed) {
      try {
        await deleteBook(book._id)
        alert('💫 삭제 완료! 💫')
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
      <BookDialog dialogTitle="수정" book={book}>
        <Tooltip text="수정">
          <DialogTrigger asChild>
            <button className="h-6 w-6 cursor-pointer">
              <img
                src="/icons/setting.svg"
                alt="수정"
                className="h-full w-full"
              />
            </button>
          </DialogTrigger>
        </Tooltip>
      </BookDialog>
      <Tooltip text="삭제">
        <button onClick={handleDelete} className="h-6 w-6 cursor-pointer">
          <img src="/icons/delete.svg" alt="삭제" className="h-full w-full" />
        </button>
      </Tooltip>
    </>
  )
}
