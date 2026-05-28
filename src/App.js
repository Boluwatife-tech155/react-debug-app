import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

export default function App() {
  const [movies, setMovies] = useState([
    {
      title: "Avatar",
      description: "Sci-fi movie",
      posterURL:
        "https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg",
      rating: 5
    },

    {
      title: "Titanic",
      description: "Romantic movie",
      posterURL:
        "https://m.media-amazon.com/images/I/71y8lSRBywL._AC_SL1024_.jpg",
      rating: 4
    }
  ]);

  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("");

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: ""
  });

  const addMovie = () => {
    setMovies([...movies, newMovie]);

    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: ""
    });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      movie.rating >= rating
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Movie App</h1>

      <Filter
        search={search}
        setSearch={setSearch}
        rating={rating}
        setRating={setRating}
      />

      <br />

      <input
        type="text"
        placeholder="Title"
        value={newMovie.title}
        onChange={(e) =>
          setNewMovie({
            ...newMovie,
            title: e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Description"
        value={newMovie.description}
        onChange={(e) =>
          setNewMovie({
            ...newMovie,
            description: e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={(e) =>
          setNewMovie({
            ...newMovie,
            posterURL: e.target.value
          })
        }
      />

      <input
        type="number"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={(e) =>
          setNewMovie({
            ...newMovie,
            rating: e.target.value
          })
        }
      />

      <button onClick={addMovie}>
        Add Movie
      </button>

      <MovieList movies={filteredMovies} />
    </div>
  );
}