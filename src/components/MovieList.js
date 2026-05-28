import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {movies.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </div>
  );
}