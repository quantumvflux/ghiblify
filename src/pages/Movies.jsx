import MovieList from "../components/MovieList";

export default function Movies({ data, searchInput }) {
  return (
    <div>
      <MovieList data={data} searchInput={searchInput} />
    </div>
  );
}
