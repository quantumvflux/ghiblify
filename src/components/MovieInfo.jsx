import { useEffect, useState } from "react";

export default function MovieInfo({ movieId, setShowMovieDetails }) {
  const [currentMovie, setCurrentMovie] = useState({});

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${movieId}`)
      .then((data) => data.json())
      .then((data) =>
        setCurrentMovie({
          id: data.id,
          title: data.title,
          original_title: data.original_title,
          image: data.image,
          movie_banner: data.movie_banner,
          description: data.description,
          director: data.director,
          release_date: data.release_date,
          rt_score: data.rt_score,
        })
      );
  }, []);

  return (
    <>
      <div className="movie-page">
        <button
          className="close-page"
          onClick={() => {
            setShowMovieDetails((prevShow) => !prevShow);
          }}
        >
          {/* ⨯ */}
          <img src="./src/assets/close.svg" alt="Close info page" />
        </button>
        <div className="movie-banner">
          <img src={currentMovie.movie_banner} alt={currentMovie.title} />
        </div>
        <div className="movie-section">
          <div className="movie-information">
            <img src={currentMovie.image} alt="" />
            <p>Director: {currentMovie.director}</p>
            <p>Release date: {currentMovie.release_date}</p>
            <p>Rating: {currentMovie.rt_score}/100</p>
          </div>
          <div className="movie-description">
            <h2>{currentMovie.title}</h2>
            <p>Original title: {currentMovie.original_title}</p>
            <p>{currentMovie.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
