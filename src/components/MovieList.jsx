import MovieCard from "./MovieCard";
import "./../App.css";
export default function MovieList({ data, searchInput }) {
  return (
    <div className="movie-list">
      <MovieCard data={data} searchInput={searchInput} />
    </div>
  );
}
