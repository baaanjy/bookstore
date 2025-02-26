import {books} from "@/mocks/books.json"

import BookCard from "./BookCard";

export default function BookList(){
  return(
    <div className="gap-5 flex flex-col items-center py-10">
      {/* TODO: 데이터 연결 */}
      {books.map((book)=> (
        <BookCard book={book} key={book.id}/>
      ))}
    </div>
  )
}