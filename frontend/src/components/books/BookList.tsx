import {books} from "@/mocks/books.json"

import AddBookDialog from "./AddBookDialog";
import BookCard from "./BookCard";

export default function BookList(){
  return(
    <div>
      <div className="flex gap-3 items-center">
        <p className="text-xl">총 {books.length}개</p>
        <AddBookDialog />
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