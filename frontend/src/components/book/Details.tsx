import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {books} from "@/mocks/books.json"
import Book from "@/types/book";

import Tooltip from "../common/Tooltip";

export default function Details(){
  const [book, setBook] = useState<Book>();
  const { id } = useParams();

  useEffect(()=>{
    if(!id) return

    // TODO: 데이터 연결
    const foundBook = books.find((book) => book.id === Number(id))
    setBook(foundBook)
  },[id])

  return(
    <div className="flex flex-col w-full">
      <div className="flex justify-end h-fit items-end gap-5">
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
      <div className="flex h-80">
        <div className="w-1/4 h-full bg-book group-hover:shadow-md p-3">
          <p className="font-semibold text-3xl text-myblue">{book?.title}</p>
        </div>
        <div className="flex flex-col pl-10 h-full w-3/4 p-3">
          <div className="flex flex-col gap-5">
            <p className="text-3xl">{book?.title}</p>
            <p className="text-xl">{book?.author}</p>
            <p className="text-xl">{book?.publisher} / {book?.pub_date}</p>
            <p>판매량: {book?.sales} 재고: {book?.stock}</p>
          </div>
        </div>
      </div>
      <div className="my-10">{book?.details}</div>
    </div>
  )
}