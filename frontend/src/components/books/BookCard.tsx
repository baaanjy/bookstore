import { Link } from "react-router-dom";

import Book from "@/types/book";

import Tooltip from "../common/Tooltip";

interface Props{
  book: Book
}
export default function BookCard({book}: Props){
  return(
    // TODO: 링크 수정
    <Link to={"/"} className="w-fit h-64 flex gap-10 justify-center group">
      <div className="w-48 h-full bg-book group-hover:shadow-md p-3">
        <p className="font-semibold text-3xl text-myblue">{book.title}</p>
      </div>

      <div className="h-full w-xl p-5 flex flex-col justify-between group-hover:shadow-md">
        <p className="text-2xl">{book.title}</p>
        <p className="text-xl">{book.author}/{book.publisher}/{String(book.pub_date)}</p>
        <p className="text-xl">{book.price}원</p>
        <p>{book.description}</p>
        <p>판매량 {book.sales} 재고 {book.stock}</p>
        <div className="flex gap-5 justify-end w-full">
          <Tooltip text="수정">
            <button className="w-6 h-6 cursor-pointer">
              <img src="/icons/setting.svg" alt="수정" className="w-full h-full"/>
            </button>
          </Tooltip>
          <Tooltip text="삭제">
            <button className="w-6 h-6 cursor-pointer">
              <img src="/icons/delete.svg" alt="삭제" className="w-full h-full"/>
            </button>
          </Tooltip>
        </div>
      </div>
    </Link>
  )
}