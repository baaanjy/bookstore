import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

const SEARCH_ALL = 'all'
const SEARCH_AUTHOR = 'author'
const SEARCH_TITLE = 'title'

interface Props {
  searchQuery: string
  searchCategory: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  setSearchCategory: React.Dispatch<React.SetStateAction<string>>
  onSearch: (query: string, category: string) => void
}

export default function SearchBar({
  searchQuery,
  searchCategory,
  setSearchQuery,
  setSearchCategory,
  onSearch,
}: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleCategoryChange = (value: string) => {
    setSearchCategory(value)
  }

  const handleSearch = () => {
    if(searchQuery === ''){
      alert("검색어를 입력해주세요!")
      return
    }
    onSearch(searchQuery, searchCategory)
  }

  return (
    <div className="border-myblue mb-10 h-11 w-full border-2">
      <div className="flex h-full w-full items-center justify-between px-5">
        <Select
          defaultValue={searchCategory}
          onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-30 border-none shadow-none focus:ring-0">
            <SelectValue placeholder="통합검색" />
          </SelectTrigger>
          <SelectContent className="border-none">
            <SelectItem value={SEARCH_ALL}>통합검색</SelectItem>
            <SelectItem value={SEARCH_AUTHOR}>저자</SelectItem>
            <SelectItem value={SEARCH_TITLE}>제목</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          className="h-full border-none shadow-none focus-visible:ring-0"
        />
        <button
          onClick={handleSearch}
          className="flex h-full w-16 cursor-pointer items-center justify-center">
          <img src="/icons/search.svg" alt="검색" className="h-8 w-8" />
        </button>
      </div>
    </div>
  )
}
