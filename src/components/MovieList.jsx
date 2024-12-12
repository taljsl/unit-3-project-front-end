import React from "react";

const MovieList = ({ items }) => {
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {items.map((movie) => {
          <li key={movie._id}>{movie.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default MovieList;
