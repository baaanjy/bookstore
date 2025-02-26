import BookList from "@/components/books/BookList";
import Pagenation from "@/components/books/Pagenation";
import SearchBar from "@/components/books/SearchBar";

export default function BooksPage() {
  return (
    <div className="w-full flex flex-col items-center mb-20">
      <div className="w-2/3">
        <SearchBar/>
        <BookList />
        <Pagenation />
      </div>
    </div>
  )
}
