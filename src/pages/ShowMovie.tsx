import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowMovie: React.FC = () => {
  const [movieData, setMovieData] = useState(null);
  const params = useParams();
  const OMDB_APIKEY = "a64f8d9e";
  async function fetchMovieData() {
    const id = params.id;
    const response = await fetch(
      `http://www.omdbapi.com/?i=${id}&&apikey=${OMDB_APIKEY}`
    );
    const formattedResponse = await response.json();
    setMovieData(formattedResponse);
  }
  useEffect(() => {
    fetchMovieData();
  });
  if (movieData === null) {
    return <div>Fetching movie data....</div>;
  }

  return (
    <div>
      <img src={movieData.Poster} alt="" className="w-[200px] h-[200px]" />
      <div className="">{movieData.Title}</div>
      <div className="">{movieData.Released}</div>
      <div className="">{movieData.imdbRating}</div>
    </div>
  );
};

export default ShowMovie;
