import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <header>
      <nav>
        <Link to="About">About</Link>
        <Link to="/">Home</Link>
        <Link to="item">item</Link>
        <Link to="books">Books</Link>
      </nav>
    </header>
  );
}
