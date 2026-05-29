import { useParams, Link } from "react-router-dom";

function MovieDescription() {
  const { id } = useParams();

  return (
    <div>
      <h1>Movie {id}</h1>

      <p>This is the movie description page</p>

      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}

export default MovieDescription;