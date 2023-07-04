import "./Movie.css";

export const Movie = ({ movie, openModal }) => {
  const handleClick = () => {
    openModal(movie.id);
  };
  return (
    <div className="movie-item" onClick={handleClick}>
      <img
        alt={movie.original_title}
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      />
      {movie.original_title}
    </div>
  );
};
