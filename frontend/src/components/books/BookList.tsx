import {books} from "@/mocks/books.json"

import Tooltip from "../common/Tooltip";
import BookCard from "./BookCard";

export default function BookList(){
  return(
    <div>
      <div className="flex gap-3 items-center">
        <p className="text-xl">총 {books.length}개</p>
        <Tooltip text="등록">
          <button className="w-6 h-6 flex justify-center items-center cursor-pointer">
            <img src="../icons/plus.svg" alt="등록" />
          </button>
        </Tooltip>
      </div>
      <div className="gap-5 flex flex-col items-center py-10">
        {/* TODO: 데이터 연결 */}
        {books.map((book)=> (
          <BookCard book={book} key={book.id}/>
        ))}
      </div>
    </div>
  )
}