import { Link } from "react-router-dom"
export default function MovieCard({ movie }) {
 return (
  <Link to={`/movie/${movie.id}`}>
    <div>
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
    </div>
  </Link>
)};