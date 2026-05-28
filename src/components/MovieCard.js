export default function MovieCard({ movie }) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "10px",
      width: "250px"
    }}>
      <img
        src={movie.posterURL}
        alt={movie.title}
        width="200"
      />

      <h2>{movie.title}</h2>

      <p>{movie.description}</p>

      <h4>⭐ {movie.rating}</h4>
    </div>
  );
}
