import { useSelector } from "react-redux";
import BooksItems from "./BooksItem";

export default function BooksList() {
  const books = useSelector((state) => state.tasks.items);

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <BooksItems
            title={book.title}
            author={book.author}
            genre={book.genre}
            year={book.year}
            availability={book.availability}
          />
        </li>
      ))}
    </ul>
  );
}
