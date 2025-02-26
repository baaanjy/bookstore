import Book from "@/types/book";

import { DialogTrigger } from "../ui/dialog";
import BookDialog from "./BookDialog";
import Tooltip from "./Tooltip";

interface Props{
  book: Book;
}
export default function EditDeleteBtns({book}:Props){
  const editBook = () =>{
    // TODO: 수정 기능
  }

  return(
    <>
      <BookDialog dialogTitle="수정" onSubmit={editBook} book={book}>
        <Tooltip text="수정">
          <DialogTrigger asChild>
            <button className="w-6 h-6 cursor-pointer">
              <img src="/icons/setting.svg" alt="수정" className="w-full h-full"/>
            </button>
          </DialogTrigger>
        </Tooltip>
      </BookDialog>
      <Tooltip text="삭제">
        <button className="w-6 h-6 cursor-pointer">
          <img src="/icons/delete.svg" alt="삭제" className="w-full h-full"/>
        </button>
      </Tooltip>
    </>
  )
}