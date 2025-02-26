import { Input } from "../ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

export default function SearchBar() {
  return (
    <div className="flex w-full justify-center pt-10">
      <div className="border-myblue h-11 w-2/3 border-2">
        <div className="flex h-full w-full items-center justify-between px-5">
          <Select defaultValue="all">
            <SelectTrigger className="w-30 border-none shadow-none focus:ring-0">
              <SelectValue placeholder="통합검색" />
            </SelectTrigger>
            <SelectContent className="border-none">
              <SelectItem value="all">통합검색</SelectItem>
              <SelectItem value="author">저자</SelectItem>
              <SelectItem value="title">제목</SelectItem>
            </SelectContent>
          </Select>
          <Input type="text" className="border-none shadow-none focus-visible:ring-0 h-full"/>
          <button className="w-16 h-full flex justify-center items-center cursor-pointer">
            <img src="/icons/search.svg" alt="검색" className="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  )
}

