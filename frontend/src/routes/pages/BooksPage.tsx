import BookList from "@/components/books/BookList";
import SearchBar from "@/components/books/SearchBar";

export default function BooksPage() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-2/3">
        <SearchBar/>
        <BookList />
      </div>
    </div>
  )
}
