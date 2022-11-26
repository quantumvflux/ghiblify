import "./../App.css";
import { useState } from "react";
import MovieInfo from "./MovieInfo";

export default function MovieCard({ data, searchInput }) {
  const [movieId, setMovieId] = useState("");
  const [showMovieDetails, setShowMovieDetails] = useState(false);

  return (
    <>
      {showMovieDetails ? (
        <MovieInfo
          movieId={movieId}
          setShowMovieDetails={setShowMovieDetails}
        />
      ) : (
        data
          .filter((movie) => movie.title.toLowerCase().includes(searchInput))
          .map((item) => (
            <div
              onClick={() => {
                setMovieId(item.id);
                setShowMovieDetails((prevShow) => !prevShow);
              }}
              key={item.id}
              className="card"
            >
              <img loading="lazy" src={item.image} alt={item.title} />
              <div className="info-container">
                <h4>{item.title}</h4>
                <div className="card-info">
                  <p>Director: {item.director}</p>
                  <p>Release date: {item.release_date}</p>
                  <p>
                    Rating: <span>{item.rt_score}</span>/100
                  </p>
                </div>
              </div>
            </div>
          ))
      )}
    </>
  );
}
