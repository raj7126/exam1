import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchMovie = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const navigate = useNavigate();
  const OMDB_APIKEY = "a64f8d9e";
  async function fetchMovieData() {
    const response = await fetch(
      `http://www.omdbapi.com/?t=${movieTitle}&&apikey=${OMDB_APIKEY}`
    );
    const formattedResponse = await response.json();
    navigate("/showmovie/" + formattedResponse.imdbID);
  }

  return (
    <div className="flex items-center w-screen h-screen justify-center">
      <input
        type="text"
        className="border "
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
      />
      <button
        className="border rounded-sm p-1"
        onClick={() => fetchMovieData()}
      >
        Search Btn
      </button>
    </div>
  );
};

export default SearchMovie;
