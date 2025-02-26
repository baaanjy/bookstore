// import {books} from "@/mocks/books.json"

import Book from "@/types/book";

import BookDialog from "../common/BookDialog";
import Tooltip from "../common/Tooltip";
import { DialogTrigger } from "../ui/dialog";
import BookCard from "./BookCard";

interface Props{
  books: Book[] | null
}
export default function BookList({books}:Props){

  if(!books) return (<div>No Books</div>)

  return(
    <div>
      <div className="flex gap-3 items-center">
        <p className="text-xl">총 {books.length}개</p>
        <BookDialog dialogTitle="신규 등록" >
          <Tooltip text="등록">
            <DialogTrigger asChild>
              <button className="w-6 h-6 flex justify-center items-center cursor-pointer">
                <img src="../icons/plus.svg" alt="등록" />
              </button>
            </DialogTrigger>
          </Tooltip>
        </BookDialog>
      </div>
      <div className="gap-5 flex flex-col items-center py-10">
        {books.map((book)=> (
          <BookCard book={book} key={book._id}/>
        ))}
      </div>
    </div>
  )
}