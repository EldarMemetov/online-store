export default function BooksItems({
  title,
  author,
  genre,
  year,
  availability,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{genre}</p>
      <p>{year}</p>
      <p>{availability}</p>
    </div>
  );
}
